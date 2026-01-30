"""
Image Optimizer Script
Recursively optimizes images in a directory to reduce file sizes while maintaining quality
"""

import os
from PIL import Image
import shutil
from pathlib import Path
from datetime import datetime

class ImageOptimizer:
    def __init__(self, source_dir, quality=85, max_width=1920, max_height=1920, backup=True):
        """
        Initialize the Image Optimizer
        
        Args:
            source_dir: Directory containing images to optimize
            quality: JPEG quality (1-100, recommended 75-90)
            max_width: Maximum width to resize to (maintains aspect ratio)
            max_height: Maximum height to resize to (maintains aspect ratio)
            backup: Create backup of original images
        """
        self.source_dir = Path(source_dir)
        self.quality = quality
        self.max_width = max_width
        self.max_height = max_height
        self.backup = backup
        self.backup_dir = None
        
        # Statistics
        self.total_original_size = 0
        self.total_optimized_size = 0
        self.files_processed = 0
        self.files_skipped = 0
        self.errors = []
        
        # Supported formats
        self.supported_formats = {'.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff', '.tif'}
        
    def create_backup_dir(self):
        """Create a backup directory with timestamp"""
        if self.backup:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            self.backup_dir = self.source_dir.parent / f"Images_Backup_{timestamp}"
            self.backup_dir.mkdir(exist_ok=True)
            print(f"[OK] Backup directory created: {self.backup_dir}")
    
    def get_image_files(self):
        """Recursively find all image files in the directory"""
        image_files = []
        for root, dirs, files in os.walk(self.source_dir):
            for file in files:
                file_path = Path(root) / file
                if file_path.suffix.lower() in self.supported_formats:
                    image_files.append(file_path)
        return image_files
    
    def backup_file(self, file_path):
        """Create a backup of the original file"""
        if self.backup:
            relative_path = file_path.relative_to(self.source_dir)
            backup_path = self.backup_dir / relative_path
            backup_path.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(file_path, backup_path)
    
    def optimize_image(self, image_path):
        """
        Optimize a single image file
        
        Returns:
            tuple: (original_size, optimized_size, success)
        """
        try:
            # Get original file size
            original_size = image_path.stat().st_size
            
            # Open image
            with Image.open(image_path) as img:
                # Convert RGBA to RGB for JPEG
                if img.mode in ('RGBA', 'LA', 'P') and image_path.suffix.lower() in ['.jpg', '.jpeg']:
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                    img = background
                
                # Resize if image is too large
                if img.width > self.max_width or img.height > self.max_height:
                    img.thumbnail((self.max_width, self.max_height), Image.Resampling.LANCZOS)
                    print(f"  +- Resized from original dimensions")
                
                # Create backup before overwriting
                self.backup_file(image_path)
                
                # Optimize based on format
                if image_path.suffix.lower() in ['.jpg', '.jpeg']:
                    # JPEG optimization
                    img.save(
                        image_path,
                        'JPEG',
                        quality=self.quality,
                        optimize=True,
                        progressive=True
                    )
                elif image_path.suffix.lower() == '.png':
                    # PNG optimization
                    img.save(
                        image_path,
                        'PNG',
                        optimize=True,
                        compress_level=9
                    )
                elif image_path.suffix.lower() == '.webp':
                    # WebP optimization
                    img.save(
                        image_path,
                        'WEBP',
                        quality=self.quality,
                        method=6
                    )
                else:
                    # Other formats - convert to JPEG
                    jpeg_path = image_path.with_suffix('.jpg')
                    img.save(
                        jpeg_path,
                        'JPEG',
                        quality=self.quality,
                        optimize=True
                    )
                    if jpeg_path != image_path:
                        image_path.unlink()  # Remove original
                        image_path = jpeg_path
                
                # Get new file size
                optimized_size = image_path.stat().st_size
                
                return original_size, optimized_size, True
                
        except Exception as e:
            self.errors.append((image_path, str(e)))
            return 0, 0, False
    
    def format_size(self, size_bytes):
        """Format bytes to human-readable format"""
        for unit in ['B', 'KB', 'MB', 'GB']:
            if size_bytes < 1024.0:
                return f"{size_bytes:.2f} {unit}"
            size_bytes /= 1024.0
        return f"{size_bytes:.2f} TB"
    
    def process_images(self):
        """Process all images in the directory"""
        print("=" * 70)
        print("IMAGE OPTIMIZER")
        print("=" * 70)
        print(f"Source Directory: {self.source_dir}")
        print(f"Quality Setting: {self.quality}")
        print(f"Max Dimensions: {self.max_width}x{self.max_height}")
        print(f"Backup Enabled: {self.backup}")
        print("=" * 70)
        
        # Create backup directory
        if self.backup:
            self.create_backup_dir()
        
        # Find all image files
        print("\n[*] Scanning for images...")
        image_files = self.get_image_files()
        print(f"[OK] Found {len(image_files)} images to process\n")
        
        if not image_files:
            print("No images found to optimize!")
            return
        
        # Process each image
        print("[*] Processing images...\n")
        for idx, image_path in enumerate(image_files, 1):
            relative_path = image_path.relative_to(self.source_dir)
            print(f"[{idx}/{len(image_files)}] {relative_path}")
            
            original_size, optimized_size, success = self.optimize_image(image_path)
            
            if success:
                self.files_processed += 1
                self.total_original_size += original_size
                self.total_optimized_size += optimized_size
                
                reduction = ((original_size - optimized_size) / original_size * 100) if original_size > 0 else 0
                print(f"  |- Original: {self.format_size(original_size)}")
                print(f"  |- Optimized: {self.format_size(optimized_size)}")
                print(f"  +- Reduced: {reduction:.1f}%")
            else:
                self.files_skipped += 1
                print(f"  +- [ERROR] SKIPPED")
            print()
        
        # Print summary
        self.print_summary()
    
    def print_summary(self):
        """Print optimization summary"""
        print("\n" + "=" * 70)
        print("OPTIMIZATION SUMMARY")
        print("=" * 70)
        print(f"Files Processed: {self.files_processed}")
        print(f"Files Skipped: {self.files_skipped}")
        print(f"Original Total Size: {self.format_size(self.total_original_size)}")
        print(f"Optimized Total Size: {self.format_size(self.total_optimized_size)}")
        
        if self.total_original_size > 0:
            total_saved = self.total_original_size - self.total_optimized_size
            reduction_percent = (total_saved / self.total_original_size) * 100
            print(f"Space Saved: {self.format_size(total_saved)} ({reduction_percent:.1f}%)")
        
        if self.backup:
            print(f"\n[OK] Original files backed up to: {self.backup_dir}")
        
        if self.errors:
            print(f"\n[WARNING] {len(self.errors)} errors occurred:")
            for file_path, error in self.errors[:5]:  # Show first 5 errors
                print(f"  - {file_path.name}: {error}")
            if len(self.errors) > 5:
                print(f"  ... and {len(self.errors) - 5} more")
        
        print("=" * 70)
        print("[DONE] Optimization complete!")
        print("=" * 70)


def main():
    """Main function to run the optimizer"""
    
    # Configuration
    SOURCE_DIR = r"E:\ETTECHX\Images"
    QUALITY = 85  # 75-90 recommended (85 is good balance)
    MAX_WIDTH = 1920  # Max width in pixels
    MAX_HEIGHT = 1920  # Max height in pixels
    CREATE_BACKUP = True  # Set to False to skip backup
    
    # Create optimizer instance
    optimizer = ImageOptimizer(
        source_dir=SOURCE_DIR,
        quality=QUALITY,
        max_width=MAX_WIDTH,
        max_height=MAX_HEIGHT,
        backup=CREATE_BACKUP
    )
    
    # Process images
    optimizer.process_images()


if __name__ == "__main__":
    main()
