# ET TECH X Newsletter Template

A professional, email-client compatible newsletter template built with table-based layout and inline CSS.

## File Location
`public/newsletter-template.html`

## Features

✅ **Email-Client Compatible**
- Table-based layout (works in Gmail, Outlook, Apple Mail)
- Inline CSS only
- No external dependencies
- Mobile responsive (max-width 600px)

✅ **Professional Design**
- Clean corporate look
- Neutral colors (#0B1C2D, white, light gray)
- Soft card sections with 8px border-radius
- Safe fonts: Arial, Helvetica, sans-serif

✅ **Dynamic Content**
- All content uses `{{variable_name}}` placeholders
- Optional sections wrapped in conditional comments
- Repeatable article blocks

## Template Structure

### 1. Header Section
- Full-width banner image
- Newsletter title
- Issue number, month, year

**Placeholders:**
- `{{banner_image_url}}`
- `{{issue_number}}`
- `{{month}}`
- `{{year}}`

### 2. Main Banner Content
- Large heading
- Description paragraph
- CTA button

**Placeholders:**
- `{{main_banner_heading}}`
- `{{main_banner_description}}`
- `{{main_banner_cta_text}}`
- `{{main_banner_cta_link}}`

### 3. Featured Articles (3 Articles)
Each article has:
- Image
- Title
- Description
- Read More button

**Placeholders:**
- `{{article1_image}}`, `{{article1_title}}`, `{{article1_desc}}`, `{{article1_link}}`
- `{{article2_image}}`, `{{article2_title}}`, `{{article2_desc}}`, `{{article2_link}}`
- `{{article3_image}}`, `{{article3_title}}`, `{{article3_desc}}`, `{{article3_link}}`

### 4. Optional Advertisement Section
Wrapped in conditional comments:
```
<!-- START optional_ads_section -->
...
<!-- END optional_ads_section -->
```

**Placeholders:**
- `{{ad_image}}`
- `{{ad_link}}`

### 5. Multiple Articles Section (Repeatable)
Repeatable block for unlimited articles:
```
<!-- Repeat this block dynamically -->
```

**Placeholders:**
- `{{loop_article_image}}`
- `{{loop_article_title}}`
- `{{loop_article_desc}}`
- `{{loop_article_link}}`

### 6. Optional YouTube Section
Wrapped in conditional comments:
```
<!-- START optional_youtube_section -->
...
<!-- END optional_youtube_section -->
```

**Placeholders:**
- `{{youtube_thumbnail}}`
- `{{youtube_title}}`
- `{{youtube_link}}`

### 7. Thank You + Feedback Section
**Placeholders:**
- `{{feedback_link}}`

### 8. Office Address & Contact
**Placeholders:**
- `{{office_address}}`
- `{{contact_number}}`
- `{{website_link}}`

### 9. Disclaimer Section
**Placeholders:**
- `{{disclaimer_text}}`

### 10. Footer
**Placeholders:**
- `{{instagram_link}}`
- `{{linkedin_link}}`
- `{{youtube_channel_link}}`
- `{{year}}` (for copyright)

## Usage Instructions

### For Email Marketing Platforms (Mailchimp, SendGrid, etc.)

1. **Copy the HTML** from `public/newsletter-template.html`
2. **Import into your platform** or paste into the HTML editor
3. **Replace placeholders** with actual content:
   - Use your platform's merge tags (e.g., `*|MERGE_TAG|*` in Mailchimp)
   - Or use server-side templating (e.g., Handlebars, Mustache)

### For Server-Side Rendering

If you want to build a newsletter management system:

1. **Create a backend API** to store newsletter content
2. **Use a templating engine** (Handlebars, Mustache, EJS) to replace placeholders
3. **Send via email service** (SendGrid, Mailgun, AWS SES, etc.)

### Example Placeholder Replacement

**Before:**
```html
<h2>{{main_banner_heading}}</h2>
```

**After (with actual content):**
```html
<h2>Join Us at ET TECH X 2026</h2>
```

## Optional Sections

To **include** optional sections, keep the content between:
```
<!-- START optional_ads_section -->
...
<!-- END optional_ads_section -->
```

To **exclude** optional sections, remove everything between the START and END comments.

## Mobile Responsiveness

The template includes media queries for mobile devices (max-width: 600px):
- Images scale to full width
- Text sizes adjust
- Layout stacks vertically on small screens

## Testing

Before sending:
1. Test in **Gmail** (web and mobile)
2. Test in **Outlook** (desktop and web)
3. Test in **Apple Mail**
4. Use **Litmus** or **Email on Acid** for comprehensive testing

## Color Scheme

- **Primary Dark**: `#0B1C2D`
- **Background**: `#ffffff`
- **Light Background**: `#f9f9f9`
- **Text**: `#666666`
- **Light Text**: `#cccccc`
- **Border**: `#e5e5e5`

## Image Requirements

- **Banner**: Recommended 600px width
- **Article Images**: Recommended 540px width
- **All images**: Use absolute URLs (not relative paths)
- **Format**: JPG or PNG
- **Optimize**: Compress images before uploading

## Next Steps

1. **Customize colors** if needed (search and replace `#0B1C2D`)
2. **Add your logo** to the header if desired
3. **Set up email service** integration
4. **Create newsletter management UI** (optional)
5. **Test thoroughly** before sending to subscribers
