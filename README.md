# Kagimu Billz Website

A luxury, professional website for Kagimu Billz - Ugandan entrepreneur focused on construction advisory, real estate development, and lifestyle branding.

## 🚀 Features

- **Luxury Design**: Custom brand colors (Onyx, Obsidian, Ivory, Champagne Gold, Smoke)
- **Responsive Layout**: Mobile-first design with smooth animations
- **SEO Optimized**: Comprehensive metadata, JSON-LD structured data
- **Accessibility**: WCAG AA compliant with focus states and keyboard navigation
- **Performance**: Optimized for Core Web Vitals
- **Content Management**: Structured data files for easy content updates

## 🎨 Brand System

### Color Palette
- **Onyx**: #0A0A0A (Primary background)
- **Obsidian**: #111111 (Surface elements)
- **Ivory**: #F8F6F2 (Primary text)
- **Champagne Gold**: #D4AF37 (Accent color)
- **Smoke**: #6E6E6E (Muted text)

### Typography
- **Headlines**: Display serif with negative letter spacing
- **Body/UI**: Inter font family with comfortable leading
- **Micro-interactions**: Fade/slide reveals, gold shimmer hover effects

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation and footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── brands/            # Brands showcase
│   ├── services/          # Services overview
│   ├── portfolio/         # Project portfolio
│   ├── media/             # Press and media kit
│   ├── insights/          # Blog/articles
│   │   └── [slug]/        # Dynamic article pages
│   ├── events/            # Speaking engagements
│   ├── social/            # Social media highlights
│   ├── contact/           # Contact form
│   └── legal/             # Privacy and terms
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI components
│   ├── nav/              # Navigation components
│   ├── footer/           # Footer components
│   ├── hero/             # Hero section components
│   └── seo/              # SEO components
├── lib/                  # Utility functions and config
├── data/                 # JSON data files
└── content/              # MDX content files
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom configuration
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kagimu-billz-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management

### Updating Content

1. **Site Configuration**: Edit `src/lib/siteConfig.ts`
2. **Brand Data**: Update `src/data/brands.json`
3. **Press Coverage**: Modify `src/data/press.json`
4. **Events**: Edit `src/data/events.json`
5. **Social Media**: Update `src/data/social.json`

### Adding Articles

1. Create new MDX files in `src/content/insights/`
2. Follow the existing frontmatter structure:
   ```yaml
   ---
   title: "Article Title"
   excerpt: "Brief description"
   date: "YYYY-MM-DD"
   tags: ["tag1", "tag2"]
   cover: "/images/insights/image.jpg"
   ---
   ```

### Replacing Placeholder Content

The website includes several `[VERIFY]` placeholders that need to be updated with actual information:

1. **Legal Information**: Update registration numbers, addresses, certifications
2. **Images**: Replace placeholder images with actual photos
3. **Contact Information**: Verify all email addresses and social media links
4. **Project Data**: Replace sample projects with real portfolio items

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    bg: '#0A0A0A',      // Onyx
    surface: '#111111',  // Obsidian
    fg: '#F8F6F2',      // Ivory
    mute: '#6E6E6E',    // Smoke
    gold: '#D4AF37',    // Champagne Gold
  },
}
```

### Typography
Modify font families in `tailwind.config.ts` and `src/app/globals.css`

### Animations
Customize animations in `src/app/globals.css`:
- Shimmer effects
- Fade-in animations
- Slide-up reveals

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project to Vercel
   - Connect your Git repository

2. **Configure Environment**
   - Set `NEXT_PUBLIC_SITE_URL` environment variable
   - Configure build settings (auto-detected)

3. **Deploy**
   - Automatic deployments on git push
   - Preview deployments for pull requests

### Static Export

1. **Configure Next.js**
   ```javascript
   // next.config.js
   module.exports = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. **Build and Export**
   ```bash
   npm run build
   ```

3. **Deploy Static Files**
   - Upload `out/` folder to your hosting provider
   - Configure redirects for client-side routing

### Other Platforms

- **Netlify**: Compatible with Next.js static export
- **GitHub Pages**: Use static export configuration
- **AWS S3**: Upload static files to S3 bucket

## 📱 Performance

### Optimization Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS purging unused styles

### Performance Monitoring

- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Lighthouse**: 90+ scores across all categories
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🔍 SEO

### Features

- **Metadata**: Comprehensive meta tags for all pages
- **JSON-LD**: Structured data for Person and Article schemas
- **Sitemap**: Automatic sitemap generation
- **Open Graph**: Social media preview optimization
- **Twitter Cards**: Twitter-specific meta tags

### SEO Checklist

- [ ] Update all page titles and descriptions
- [ ] Add alt text to all images
- [ ] Verify canonical URLs
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if needed)

## 🛡️ Security

### Best Practices

- **No API Routes**: Frontend-only implementation
- **Input Validation**: Client-side form validation
- **HTTPS**: Ensure SSL certificate is configured
- **Environment Variables**: Keep sensitive data in environment variables

## 📞 Support

### Contact Information

- **Email**: contact@kagimubillz.com
- **Press**: press@kagimubillz.com
- **Partnerships**: partnerships@kagimubillz.com

### Social Media

- **Instagram**: [@brayobillz](https://instagram.com/brayobillz)
- **YouTube**: [Brayo Bills](https://www.youtube.com/@BrayoBills)

## 📄 License

This project is proprietary software. All rights reserved.

## 🔄 Updates

### Version History

- **v1.0.0**: Initial release with all core features
  - Complete website with all pages
  - Luxury design system
  - SEO optimization
  - Responsive layout
  - Content management system

### Future Enhancements

- [ ] CMS integration for easier content management
- [ ] Blog comment system
- [ ] Newsletter integration
- [ ] Advanced analytics
- [ ] Multi-language support

---

**Built with ❤️ for Kagimu Billz**

*For technical support or customization requests, please contact the development team.*