// API client for gallery management
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://ettechx-backend-production.up.railway.app/api';

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryCategory {
  name: string;
  icon: string;
  color: string;
  images: GalleryImage[];
}

export interface GalleryYear {
  year: string;
  displayName: string;
  categories: GalleryCategory[];
}

// Fetch all gallery data
export async function fetchGalleryData(): Promise<GalleryYear[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery`);
    if (!response.ok) throw new Error('Failed to fetch gallery data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    // Fallback to default data if API fails
    return [];
  }
}

// Save entire gallery data
export async function saveGalleryData(data: GalleryYear[]): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ years: data }),
    });
    if (!response.ok) throw new Error('Failed to save gallery data');
  } catch (error) {
    console.error('Error saving gallery data:', error);
    throw error;
  }
}

// Update a specific year
export async function updateYear(yearId: string, yearData: Partial<GalleryYear>): Promise<GalleryYear> {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery/year/${yearId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(yearData),
    });
    if (!response.ok) throw new Error('Failed to update year');
    const result = await response.json();
    return result.year;
  } catch (error) {
    console.error('Error updating year:', error);
    throw error;
  }
}

// Delete a year
export async function deleteYear(yearId: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery/year/${yearId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete year');
  } catch (error) {
    console.error('Error deleting year:', error);
    throw error;
  }
}

// Upload an image file
export async function uploadImage(
  file: File,
  year: string,
  category: string
): Promise<{ url: string; filename: string }> {
  try {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('year', year);
    formData.append('category', category);

    const response = await fetch(`${API_BASE_URL}/gallery/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to upload image');
    }

    const result = await response.json();
    return { url: result.url, filename: result.filename };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

// Delete an image file
export async function deleteImage(imagePath: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery/image`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imagePath }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to delete image');
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
}
