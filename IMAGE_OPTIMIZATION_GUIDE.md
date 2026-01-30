# Image Optimization Guide

## 📦 Installation

1. **Install Python** (if not already installed):
   - Download from https://www.python.org/downloads/
   - Make sure to check "Add Python to PATH" during installation

2. **Install required packages**:
   ```bash
   pip install -r requirements.txt
   ```
   Or directly:
   ```bash
   pip install Pillow
   ```

## 🚀 Usage

### Quick Start

Simply run the script:
```bash
python optimize_images.py
```

### Configuration Options

Edit the settings in `optimize_images.py` at the bottom of the file:

```python
SOURCE_DIR = r"E:\ETTECHX\Images"  # Directory to optimize
QUALITY = 85                        # JPEG quality (1-100)
MAX_WIDTH = 1920                    # Maximum width in pixels
MAX_HEIGHT = 1920                   # Maximum height in pixels
CREATE_BACKUP = True                # Create backup before optimization
```

### Quality Settings Guide

- **QUALITY = 95**: Highest quality, minimal compression (~10-30% size reduction)
- **QUALITY = 85**: High quality, good compression (~30-50% size reduction) ⭐ **Recommended**
- **QUALITY = 75**: Good quality, strong compression (~50-70% size reduction)
- **QUALITY = 60**: Acceptable quality, maximum compression (~70-80% size reduction)

### What the Script Does

✅ **Recursively processes** all subdirectories
✅ **Optimizes** JPEG, PNG, WebP, BMP, and TIFF images
✅ **Resizes** images larger than max dimensions (maintains aspect ratio)
✅ **Creates backup** of original images (with timestamp)
✅ **Shows statistics** on space saved
✅ **Handles errors** gracefully

### Supported Formats

- ✅ JPG/JPEG
- ✅ PNG
- ✅ WebP
- ✅ BMP
- ✅ TIFF/TIF

**Note**: ARW (Sony RAW) files are not processed by this script as they require specialized software.

## 📊 Example Output

```
======================================================================
IMAGE OPTIMIZER
======================================================================
Source Directory: E:\ETTECHX\Images
Quality Setting: 85
Max Dimensions: 1920x1920
Backup Enabled: True
======================================================================

✓ Backup directory created: E:\ETTECHX\Images_Backup_20260130_143025

🔍 Scanning for images...
✓ Found 87 images to process

🖼️  Processing images...

[1/87] 2026 Jan\Awards\DSC00104.JPG
  ├─ Original: 8.45 MB
  ├─ Optimized: 3.21 MB
  └─ Reduced: 62.0%

...

======================================================================
OPTIMIZATION SUMMARY
======================================================================
Files Processed: 87
Files Skipped: 0
Original Total Size: 456.78 MB
Optimized Total Size: 178.34 MB
Space Saved: 278.44 MB (60.9%)

✓ Original files backed up to: E:\ETTECHX\Images_Backup_20260130_143025
======================================================================
✓ Optimization complete!
======================================================================
```

## ⚠️ Important Notes

1. **Backup**: The script creates a timestamped backup folder before optimization
2. **Irreversible**: Without backup enabled, optimization overwrites original files
3. **RAW Files**: ARW files (Sony RAW) are not processed - use specialized software like Adobe Lightroom
4. **Test First**: Consider testing on a small subset of images first

## 🔧 Advanced Usage

### Disable Backup (Not Recommended)
```python
CREATE_BACKUP = False
```

### Higher Compression (Lower Quality)
```python
QUALITY = 70
MAX_WIDTH = 1280
MAX_HEIGHT = 1280
```

### Maximum Quality (Minimal Compression)
```python
QUALITY = 95
MAX_WIDTH = 3840  # 4K
MAX_HEIGHT = 2160
```

## 📝 Tips

- **For Web Use**: Quality 75-85 is perfect
- **For Print**: Use Quality 90-95
- **For Archival**: Consider keeping RAW files separately
- **Storage Savings**: Typically expect 40-70% size reduction

## 🆘 Troubleshooting

### "Pillow not found"
```bash
pip install Pillow --upgrade
```

### "Permission denied"
- Close any programs that might have the images open
- Run command prompt as administrator

### Script runs but no changes
- Check that SOURCE_DIR path is correct
- Ensure images are in supported formats
- Check file permissions

## 📧 Support

For issues or questions, review the error messages in the console output.
