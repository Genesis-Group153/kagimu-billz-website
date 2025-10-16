# Kagimu Billz - Luxury Website

A sophisticated, luxury website built with Next.js, TypeScript, and Tailwind CSS for Kagimu Billz, featuring dark/light theme toggle and fully responsive design.

![Kagimu Billz Website](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Live Demo

🚀 **[View Live Website](https://your-deployed-url.vercel.app)** (Update with your deployment URL)

## ✨ Features

- **🎨 Luxury Design**: Premium dark theme with champagne gold accents
- **🌓 Dark/Light Mode**: Smooth theme switching with system preference detection
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🔍 SEO Optimized**: Meta tags, JSON-LD structured data, and semantic HTML
- **♿ Accessibility**: WCAG AA compliant with proper focus states and keyboard navigation
- **⚡ Performance**: Optimized images, lazy loading, and fast loading times
- **🛠️ Modern Stack**: Next.js 15, TypeScript, Tailwind CSS v3
- **📝 Content Management**: MDX blog posts and JSON data files

## 🏗️ Project Structure

```
kagimu-billz-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── brands/            # Brands showcase
│   │   ├── contact/           # Contact form
│   │   ├── insights/          # Blog posts (MDX)
│   │   └── ...
│   ├── components/            # Reusable components
│   │   ├── ui/                # Base UI components
│   │   ├── theme/             # Theme provider & toggle
│   │   ├── nav/               # Navigation components
│   │   └── ...
│   ├── content/               # MDX blog posts
│   ├── data/                  # JSON data files
│   └── lib/                   # Utilities and config
├── public/                    # Static assets
└── ...
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts, JSON for data
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/kagimu-billz-website.git
cd kagimu-billz-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 🎨 Customization

### Brand Colors
Update the brand colors in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    bg: '#0A0A0A',      // Onyx - Background
    surface: '#111111',  // Obsidian - Surface
    fg: '#F8F6F2',      // Ivory - Text
    mute: '#6E6E6E',    // Smoke - Muted text
    gold: '#D4AF37',    // Champagne Gold - Accent
  },
}
```

### Content Management
- **Site Configuration**: `src/lib/siteConfig.ts`
- **Brand Data**: `src/data/brands.json`
- **Press/Social**: `src/data/press.json`, `src/data/social.json`
- **Blog Posts**: `src/content/insights/*.mdx`

### Theme System
The website features a sophisticated theme system:
- **Dark Theme**: Onyx backgrounds with gold accents
- **Light Theme**: Ivory backgrounds with gold accents
- **System Detection**: Automatically detects user's OS preference
- **Persistent**: Theme choice saved in localStorage

## 📱 Responsive Design

The website is fully responsive with optimized layouts:

| Breakpoint | Screen Size | Layout |
|------------|-------------|---------|
| Mobile | < 640px | 1 column |
| Tablet | 640px - 1024px | 2 columns |
| Desktop | > 1024px | 3+ columns |

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app)
- [Render](https://render.com)

## 🧪 Testing

Visit `/test-theme` to test:
- Theme toggle functionality
- Color palette display
- Responsive grid layouts
- Button variations

## 📄 License

This project is private and proprietary. All rights reserved.

## 🤝 Contributing

This is a private project. For support or questions, please contact the development team.

## 📞 Support

For technical support or questions about this website, please contact:
- Email: genesistechnologies2024@gmail.com
- GitHub: GenesisTechnologies2024

---

**Built with ❤️ for Kagimu Billz**