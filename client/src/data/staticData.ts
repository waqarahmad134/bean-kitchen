import type { Portfolio, BlogPost, Service, Testimonial, TeamMember } from '@/types/schema';

// Static portfolio data
export const portfolios: Portfolio[] = [
  {
    id: "1",
    title: "Modern Minimalist Kitchen",
    slug: "modern-minimalist-kitchen",
    description: "A stunning modern kitchen featuring clean lines, handleless cabinets, and integrated appliances. This project showcases our expertise in creating functional yet beautiful spaces that maximize efficiency without compromising on style.",
    heroImage: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop"
    ],
    location: "Manhattan, NY",
    style: "Modern",
    completionDate: "March 2024",
    client: "Private Residence",
    services: ["Design", "Installation", "Custom Cabinetry"],
    featured: true,
    headline: "Sleek sophistication meets everyday functionality"
  },
  {
    id: "2",
    title: "Classic Traditional Kitchen",
    slug: "classic-traditional-kitchen",
    description: "This elegant traditional kitchen combines timeless design with modern conveniences. Rich wood cabinetry, marble countertops, and professional-grade appliances create a warm and inviting space perfect for family gatherings.",
    heroImage: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=800&h=600&fit=crop"
    ],
    location: "Westchester, NY",
    style: "Traditional",
    completionDate: "January 2024",
    client: "Heritage Home",
    services: ["Design", "Renovation", "Custom Millwork"],
    featured: true,
    headline: "Timeless elegance for modern living"
  },
  {
    id: "3",
    title: "Industrial Loft Kitchen",
    slug: "industrial-loft-kitchen",
    description: "Bold and contemporary, this industrial-style kitchen features exposed brick, steel accents, and concrete countertops. The open layout and high ceilings create a dramatic space that's both stylish and practical.",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=800&fit=crop",
    gallery: [],
    location: "Brooklyn, NY",
    style: "Industrial",
    completionDate: "December 2023",
    client: "Urban Loft",
    services: ["Design", "Installation"],
    featured: false,
    headline: "Raw materials, refined living"
  }
];

// Static blog data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "2024 Kitchen Design Trends",
    slug: "2024-kitchen-design-trends",
    excerpt: "Discover the hottest kitchen design trends for 2024, from sustainable materials to smart technology integration.",
    content: "The kitchen design landscape is evolving rapidly, with homeowners seeking spaces that balance aesthetics, functionality, and sustainability. Here are the top trends shaping kitchens in 2024:\n\n1. Sustainable Materials: Eco-friendly options like reclaimed wood and recycled glass are gaining popularity.\n\n2. Smart Technology: From voice-activated faucets to app-controlled ovens, technology is seamlessly integrating into kitchen design.\n\n3. Bold Color Choices: While white kitchens remain popular, we're seeing a surge in deep greens, navy blues, and even black cabinetry.\n\n4. Multi-Functional Islands: Kitchen islands are evolving into command centers with built-in appliances, storage, and seating.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
    category: "Trends",
    publishedAt: "2024-02-15T00:00:00.000Z",
    featured: true
  },
  {
    id: "2",
    title: "Choosing the Perfect Kitchen Layout",
    slug: "choosing-perfect-kitchen-layout",
    excerpt: "Learn how to select the ideal kitchen layout for your space, lifestyle, and cooking habits.",
    content: "The right kitchen layout can make all the difference in how you use and enjoy your space. Here's a guide to the most popular layouts:\n\nL-Shaped: Perfect for open-plan living, offering great workflow and flexibility.\n\nU-Shaped: Maximizes counter and storage space, ideal for serious cooks.\n\nGalley: Efficient for smaller spaces, with everything within easy reach.\n\nIsland: Adds prep space and seating, perfect for entertaining.",
    heroImage: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&h=800&fit=crop",
    category: "Design Tips",
    publishedAt: "2024-01-20T00:00:00.000Z",
    featured: false
  }
];

// Static services data
export const services: Service[] = [
  {
    id: "1",
    title: "Kitchen Design",
    slug: "kitchen-design",
    summary: "Expert design services to create your dream kitchen, tailored to your lifestyle and preferences.",
    description: "Our comprehensive kitchen design service includes consultation, 3D visualization, and detailed planning.",
    icon: "✏️",
    featured: true
  },
  {
    id: "2",
    title: "Full Renovation",
    slug: "full-renovation",
    summary: "Complete kitchen renovation services from demolition to final installation.",
    description: "We handle every aspect of your kitchen renovation with precision and care.",
    icon: "🔨",
    featured: true
  },
  {
    id: "3",
    title: "Custom Cabinetry",
    slug: "custom-cabinetry",
    summary: "Handcrafted custom cabinets designed and built to your exact specifications.",
    description: "Our master craftsmen create beautiful, functional cabinetry that stands the test of time.",
    icon: "🪵",
    featured: true
  }
];

// Static testimonials data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    customerName: "Sarah Johnson",
    content: "Bean transformed our outdated kitchen into a modern masterpiece. The attention to detail and professionalism was outstanding!",
    rating: 5,
    projectType: "Modern Kitchen Renovation",
    featured: true,
    customerImage: null,
    clientCompany: null,
    projectId: null
  },
  {
    id: "2",
    customerName: "Michael Chen",
    content: "From design to installation, the team was incredible. Our new kitchen has become the heart of our home.",
    rating: 5,
    projectType: "Traditional Kitchen Design",
    featured: true,
    customerImage: null,
    clientCompany: null,
    projectId: null
  }
];

// Static team data
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    role: "Lead Designer",
    bio: "With 15 years of experience, Emma brings creativity and precision to every project.",
    image: null,
    email: null,
    phone: null
  },
  {
    id: "2",
    name: "James Thompson",
    role: "Senior Architect",
    bio: "James specializes in transforming spaces with innovative design solutions.",
    image: null,
    email: null,
    phone: null
  }
];

// Helper functions to simulate API behavior
export const getPortfolios = (): Portfolio[] => portfolios;
export const getPortfolioBySlug = (slug: string): Portfolio | undefined => 
  portfolios.find(p => p.slug === slug);
export const getPortfolioById = (id: string): Portfolio | undefined => 
  portfolios.find(p => p.id === id);

export const getBlogPosts = (): BlogPost[] => blogPosts;
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => 
  blogPosts.find(p => p.slug === slug);
export const getBlogPostById = (id: string): BlogPost | undefined => 
  blogPosts.find(p => p.id === id);

export const getServices = (): Service[] => services;
export const getServiceBySlug = (slug: string): Service | undefined => 
  services.find(s => s.slug === slug);
export const getServiceById = (id: string): Service | undefined => 
  services.find(s => s.id === id);

export const getTestimonials = (): Testimonial[] => testimonials;
export const getTestimonialById = (id: string): Testimonial | undefined => 
  testimonials.find(t => t.id === id);

export const getTeamMembers = (): TeamMember[] => teamMembers;
export const getTeamMemberById = (id: string): TeamMember | undefined => 
  teamMembers.find(t => t.id === id);
