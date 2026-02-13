// API client for speakers management
// Use Railway server by default, with localhost option for development
const getApiBaseUrl = () => {
  // If explicitly set via env variable, use that
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  // Default to Railway production server
  return 'https://ettechx-backend-production.up.railway.app/api';
};

const API_BASE_URL = getApiBaseUrl();

export interface Speaker {
  name: string;
  designation: string;
  organization: string;
  image: string;
  accentColor: string;
  bgAccent: string;
  borderAccent: string;
}

export interface SpeakerGroup {
  id: string;
  label: string;
  speakers: Speaker[];
}

// Fetch all speakers data
export async function fetchSpeakersData(): Promise<SpeakerGroup[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/speakers`);
    if (!response.ok) throw new Error('Failed to fetch speakers data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching speakers data:', error);
    // Fallback to empty array if API fails
    return [];
  }
}

// Save entire speakers data
export async function saveSpeakersData(data: SpeakerGroup[]): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ groups: data }),
    });
    if (!response.ok) throw new Error('Failed to save speakers data');
  } catch (error) {
    console.error('Error saving speakers data:', error);
    throw error;
  }
}

// Update a specific group
export async function updateGroup(groupId: string, groupData: Partial<SpeakerGroup>): Promise<SpeakerGroup> {
  try {
    const response = await fetch(`${API_BASE_URL}/speakers/group/${groupId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(groupData),
    });
    if (!response.ok) throw new Error('Failed to update group');
    const result = await response.json();
    return result.group;
  } catch (error) {
    console.error('Error updating group:', error);
    throw error;
  }
}

// Delete a group
export async function deleteGroup(groupId: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/speakers/group/${groupId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete group');
  } catch (error) {
    console.error('Error deleting group:', error);
    throw error;
  }
}

// Upload a speaker image file
export async function uploadSpeakerImage(
  file: File
): Promise<{ url: string; filename: string }> {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_BASE_URL}/speakers/upload`, {
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
    console.error('Error uploading speaker image:', error);
    throw error;
  }
}

// Delete a speaker image file
export async function deleteSpeakerImage(imagePath: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/speakers/image`, {
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
    console.error('Error deleting speaker image:', error);
    throw error;
  }
}
