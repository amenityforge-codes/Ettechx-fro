# Backend API Setup for Gallery Management

This backend API allows you to upload images and update gallery text without redeploying the frontend.

## Setup Instructions

### 1. Install Dependencies

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

### 2. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3001` by default.

### 3. Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=3001
NODE_ENV=production

# Cloudinary Configuration (Optional - for cloud image storage)
# If not provided, images will be saved locally in public/ folder
# Get these from: https://console.cloudinary.com/settings/api
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

**To use Cloudinary (Recommended for Railway):**
1. Sign up at [cloudinary.com](https://cloudinary.com) (free tier: 25GB storage)
2. Go to Dashboard → Settings → API Keys
3. Copy your:
   - **Cloud Name** (e.g., `df9y9tlr0`)
   - **API Key** (e.g., `123456789012345`)
   - **API Secret** (e.g., `abcdefghijklmnopqrstuvwxyz123456`)
4. Add them to your `.env` file
5. On Railway, add these as environment variables in your service settings

### 4. API Endpoints

#### GET `/api/gallery`
Get all gallery data.

**Response:**
```json
[
  {
    "year": "2026-jan",
    "displayName": "7th Edition Jan 2026",
    "categories": [...]
  }
]
```

#### POST `/api/gallery`
Save entire gallery data.

**Request Body:**
```json
{
  "years": [...]
}
```

#### PUT `/api/gallery/year/:yearId`
Update a specific year.

**Request Body:**
```json
{
  "displayName": "7th Edition Jan 2026",
  "categories": [...]
}
```

#### DELETE `/api/gallery/year/:yearId`
Delete a year and all its categories/images.

#### POST `/api/gallery/upload`
Upload an image file.

**Form Data:**
- `image`: File (image file)
- `year`: String (e.g., "2026-jan")
- `category`: String (e.g., "Awards")

**Response:**
```json
{
  "success": true,
  "url": "/gallery/2026-jan/Awards/1234567890-image.jpg",
  "filename": "1234567890-image.jpg"
}
```

#### DELETE `/api/gallery/image`
Delete an image file.

**Request Body:**
```json
{
  "imagePath": "/gallery/2026-jan/Awards/image.jpg"
}
```

### 5. File Structure

The backend will:
- Store gallery data in `public/gallery-data.json`
- Store uploaded images in `public/gallery/{year}/{category}/`
- Serve static files from `public/` directory

### 6. Frontend Integration

Update your frontend `.env` file to point to the API:

```env
VITE_API_URL=http://localhost:3001/api
```

For production, use your server URL:
```env
VITE_API_URL=https://api.ettechx.com/api
```

### 7. Deployment

#### Option A: Same Server as Frontend
If deploying to the same server, you can:
1. Run the backend on a different port (e.g., 3001)
2. Use a reverse proxy (nginx) to route `/api/*` to the backend
3. Serve static files from the same domain

#### Option B: Separate Backend Server
Deploy the backend separately and update `VITE_API_URL` in your frontend.

### 8. Security Considerations

**Important:** Add authentication middleware before deploying to production:

```javascript
// Example: Add JWT authentication
import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // Verify token...
  next();
};

// Apply to protected routes
app.post('/api/gallery', authenticate, ...);
app.post('/api/gallery/upload', authenticate, ...);
```

### 9. Database Option (Future)

To use a database instead of JSON file, you can:
1. Install a database (PostgreSQL, MongoDB, etc.)
2. Replace `readGalleryData()` and `writeGalleryData()` with database queries
3. The API interface remains the same

### Troubleshooting

- **Port already in use:** Change `PORT` in `.env` or server code
- **File upload fails:** Check `public/gallery/` directory permissions
- **CORS errors:** Ensure `cors` middleware is enabled
- **Images not showing:** Verify image paths match the uploaded location
