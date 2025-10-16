export const siteConfig = {
  site: {
    name: "Kagimu Billz",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://kagimubillz.com",
    description: "Construction advisory, real estate development, and lifestyle branding.",
    tagline: "Build smart. Live better.",
    signature: "We build quietly, with precision—and let value speak.",
  },
  social: {
    instagram: "https://instagram.com/brayobillz",
    youtube: "https://www.youtube.com/@BrayoBills",
    email: "contact@kagimubillz.com",
    press: "press@kagimubillz.com",
    partnerships: "partnerships@kagimubillz.com",
  },
  og: {
    defaultImage: "/og/kb-portrait.jpg",
    twitterCard: "summary_large_image",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Brands", href: "/brands" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Media", href: "/media" },
    { name: "Insights", href: "/insights" },
    { name: "Events", href: "/events" },
    { name: "Social", href: "/social" },
    { name: "Contact", href: "/contact" },
  ],
  shortBio: "Kagimu Billz is a Ugandan entrepreneur focused on construction advisory, real estate development, and lifestyle branding. He publishes practical updates and brand showcases across social channels under the 'Billz' umbrella, helping clients scope projects, make informed property decisions, and tell their success stories.",
  fullBio: "Kagimu Billz has built a reputation for disciplined execution and quality-focused operations in Uganda's construction and real estate sectors. Through strategic collaboration with industry bodies and community initiatives, he has developed expertise in project scoping, material optimization, and contractor vetting. His approach emphasizes safety standards, cost efficiency, and transparent communication throughout the development process. Working primarily from Kampala, Billz combines technical knowledge with practical experience to help clients navigate complex property decisions and construction challenges. His commitment to excellence extends beyond individual projects to broader industry standards and community development initiatives. [VERIFY: specific certifications, registrations, and partnership details]",
  fastFacts: {
    focus: "Construction • Real Estate • Branding",
    base: "Kampala, Uganda",
    interests: "Site optimization, property marketing, content partnerships",
    education: "Business & Management [VERIFY institution/year]",
  },
  pullquote: "Excellence is patience with standards.",
  services: [
    {
      title: "Construction Advisory & Project Scoping",
      description: "Site visits, BOQs, material guidance, contractor vetting.",
    },
    {
      title: "Real Estate Development & Marketing", 
      description: "Plot evaluation, off-plan promotion, sales collateral.",
    },
    {
      title: "Brand Partnerships & Ambassador Work",
      description: "Lifestyle content, short-form promos, event appearances.",
    },
  ],
  mediaKit: {
    bios: {
      "40w": "Kagimu Billz is a Ugandan entrepreneur specializing in construction advisory, real estate development, and lifestyle branding.",
      "120w": "Kagimu Billz is a Ugandan entrepreneur focused on construction advisory, real estate development, and lifestyle branding. He helps clients scope projects, make informed property decisions, and tell their success stories through the 'Billz' umbrella.",
      "300w": "Kagimu Billz has built a reputation for disciplined execution and quality-focused operations in Uganda's construction and real estate sectors. Through strategic collaboration with industry bodies and community initiatives, he has developed expertise in project scoping, material optimization, and contractor vetting. His approach emphasizes safety standards, cost efficiency, and transparent communication throughout the development process. Working primarily from Kampala, Billz combines technical knowledge with practical experience to help clients navigate complex property decisions and construction challenges.",
    },
  },
} as const;
