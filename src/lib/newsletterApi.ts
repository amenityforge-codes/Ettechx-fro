// API client for newsletter management
import { getApiBaseUrl } from './apiBaseUrl';

const API_BASE_URL = getApiBaseUrl();

export interface NewsletterArticle {
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface Newsletter {
  _id?: string;
  // Header Section
  bannerImageUrl: string;
  issueNumber: string;
  month: string;
  year: string;
  
  // Main Banner
  mainBannerHeading: string;
  mainBannerDescription: string;
  mainBannerCtaText: string;
  mainBannerCtaLink: string;
  
  // Featured Articles
  article1: NewsletterArticle;
  article2: NewsletterArticle;
  article3: NewsletterArticle;
  
  // Optional Advertisement
  ad: {
    enabled: boolean;
    image?: string;
    link?: string;
  };
  
  // Multiple Articles
  articles: NewsletterArticle[];
  
  // Optional YouTube
  youtube: {
    enabled: boolean;
    thumbnail?: string;
    title?: string;
    link?: string;
  };
  
  // Feedback
  feedbackLink: string;
  
  // Contact Info
  officeAddress: string;
  contactNumber: string;
  websiteLink: string;
  
  // Disclaimer
  disclaimerText: string;
  
  // Social Links
  instagramLink: string;
  linkedinLink: string;
  youtubeChannelLink: string;
  
  // Metadata
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Fetch all newsletters
export async function fetchNewsletters(): Promise<Newsletter[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletters`);
    if (!response.ok) throw new Error('Failed to fetch newsletters');
    return await response.json();
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    return [];
  }
}

// Fetch a specific newsletter
export async function fetchNewsletter(id: string): Promise<Newsletter | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletters/${id}`);
    if (!response.ok) throw new Error('Failed to fetch newsletter');
    return await response.json();
  } catch (error) {
    console.error('Error fetching newsletter:', error);
    return null;
  }
}

// Fetch latest published newsletter
export async function fetchLatestNewsletter(): Promise<Newsletter | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletters/published/latest`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error('Failed to fetch newsletter');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest newsletter:', error);
    return null;
  }
}

// Create a new newsletter
export async function createNewsletter(data: Newsletter): Promise<Newsletter> {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to create newsletter' }));
      throw new Error(errorData.error || 'Failed to create newsletter');
    }
    const result = await response.json();
    return result.newsletter;
  } catch (error) {
    console.error('Error creating newsletter:', error);
    throw error;
  }
}

// Update a newsletter
export async function updateNewsletter(id: string, data: Partial<Newsletter>): Promise<Newsletter> {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletters/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to update newsletter' }));
      throw new Error(errorData.error || 'Failed to update newsletter');
    }
    const result = await response.json();
    return result.newsletter;
  } catch (error) {
    console.error('Error updating newsletter:', error);
    throw error;
  }
}

// Delete a newsletter
export async function deleteNewsletter(id: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletters/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete newsletter');
  } catch (error) {
    console.error('Error deleting newsletter:', error);
    throw error;
  }
}

// Publish/unpublish a newsletter
export async function publishNewsletter(id: string, isPublished: boolean): Promise<Newsletter> {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletters/${id}/publish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isPublished }),
    });
    if (!response.ok) throw new Error('Failed to update newsletter status');
    const result = await response.json();
    return result.newsletter;
  } catch (error) {
    console.error('Error publishing newsletter:', error);
    throw error;
  }
}

// Upload newsletter banner image
export async function uploadBannerImage(file: File): Promise<{ url: string; filename: string }> {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_BASE_URL}/newsletters/upload/banner`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to upload image' }));
      throw new Error(errorData.error || 'Failed to upload image');
    }

    const result = await response.json();
    return {
      url: result.url,
      filename: result.filename || result.originalName || 'uploaded-image',
    };
  } catch (error) {
    console.error('Error uploading banner image:', error);
    throw error;
  }
}
