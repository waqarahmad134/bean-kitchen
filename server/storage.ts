import { 
  type User, type InsertUser,
  type Portfolio, type InsertPortfolio,
  type BlogPost, type InsertBlogPost,
  type Service, type InsertService,
  type Testimonial, type InsertTestimonial,
  type TeamMember, type InsertTeamMember,
  type ContactSubmission, type InsertContactSubmission
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Portfolios
  getPortfolios(): Promise<Portfolio[]>;
  getPortfolio(id: string): Promise<Portfolio | undefined>;
  getPortfolioBySlug(slug: string): Promise<Portfolio | undefined>;
  createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio>;
  updatePortfolio(id: string, portfolio: Partial<InsertPortfolio>): Promise<Portfolio | undefined>;
  deletePortfolio(id: string): Promise<boolean>;
  
  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  // Services
  getServices(): Promise<Service[]>;
  getService(id: string): Promise<Service | undefined>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: string, service: Partial<InsertService>): Promise<Service | undefined>;
  deleteService(id: string): Promise<boolean>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: string): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: string, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: string): Promise<boolean>;
  
  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: string): Promise<TeamMember | undefined>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  updateTeamMember(id: string, member: Partial<InsertTeamMember>): Promise<TeamMember | undefined>;
  deleteTeamMember(id: string): Promise<boolean>;
  
  // Contact Submissions
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: string): Promise<ContactSubmission | undefined>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  updateContactSubmission(id: string, submission: Partial<InsertContactSubmission>): Promise<ContactSubmission | undefined>;
  deleteContactSubmission(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private portfolios: Map<string, Portfolio>;
  private blogPosts: Map<string, BlogPost>;
  private services: Map<string, Service>;
  private testimonials: Map<string, Testimonial>;
  private teamMembers: Map<string, TeamMember>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.portfolios = new Map();
    this.blogPosts = new Map();
    this.services = new Map();
    this.testimonials = new Map();
    this.teamMembers = new Map();
    this.contactSubmissions = new Map();
    
    this.seedData();
  }
  
  private seedData() {
    const portfolioData: Portfolio[] = [
      {
        id: randomUUID(),
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
        id: randomUUID(),
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
        id: randomUUID(),
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

    const blogData: BlogPost[] = [
      {
        id: randomUUID(),
        title: "2024 Kitchen Design Trends",
        slug: "2024-kitchen-design-trends",
        excerpt: "Discover the hottest kitchen design trends for 2024, from sustainable materials to smart technology integration.",
        content: "The kitchen design landscape is evolving rapidly, with homeowners seeking spaces that balance aesthetics, functionality, and sustainability. Here are the top trends shaping kitchens in 2024:\n\n1. Sustainable Materials: Eco-friendly options like reclaimed wood and recycled glass are gaining popularity.\n\n2. Smart Technology: From voice-activated faucets to app-controlled ovens, technology is seamlessly integrating into kitchen design.\n\n3. Bold Color Choices: While white kitchens remain popular, we're seeing a surge in deep greens, navy blues, and even black cabinetry.\n\n4. Multi-Functional Islands: Kitchen islands are evolving into command centers with built-in appliances, storage, and seating.",
        heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        category: "Trends",
        publishedAt: new Date("2024-02-15").toISOString()
      },
      {
        id: randomUUID(),
        title: "Choosing the Perfect Kitchen Layout",
        slug: "choosing-perfect-kitchen-layout",
        excerpt: "Learn how to select the ideal kitchen layout for your space, lifestyle, and cooking habits.",
        content: "The right kitchen layout can make all the difference in how you use and enjoy your space. Here's a guide to the most popular layouts:\n\nL-Shaped: Perfect for open-plan living, offering great workflow and flexibility.\n\nU-Shaped: Maximizes counter and storage space, ideal for serious cooks.\n\nGalley: Efficient for smaller spaces, with everything within easy reach.\n\nIsland: Adds prep space and seating, perfect for entertaining.",
        heroImage: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&h=800&fit=crop",
        category: "Design Tips",
        publishedAt: new Date("2024-01-20").toISOString()
      }
    ];

    const serviceData: Service[] = [
      {
        id: randomUUID(),
        title: "Kitchen Design",
        slug: "kitchen-design",
        summary: "Expert design services to create your dream kitchen, tailored to your lifestyle and preferences.",
        description: "Our comprehensive kitchen design service includes consultation, 3D visualization, and detailed planning.",
        icon: "✏️",
        featured: true
      },
      {
        id: randomUUID(),
        title: "Full Renovation",
        slug: "full-renovation",
        summary: "Complete kitchen renovation services from demolition to final installation.",
        description: "We handle every aspect of your kitchen renovation with precision and care.",
        icon: "🔨",
        featured: true
      },
      {
        id: randomUUID(),
        title: "Custom Cabinetry",
        slug: "custom-cabinetry",
        summary: "Handcrafted custom cabinets designed and built to your exact specifications.",
        description: "Our master craftsmen create beautiful, functional cabinetry that stands the test of time.",
        icon: "🪵",
        featured: true
      }
    ];

    const testimonialData: Testimonial[] = [
      {
        id: randomUUID(),
        customerName: "Sarah Johnson",
        content: "ARGU transformed our outdated kitchen into a modern masterpiece. The attention to detail and professionalism was outstanding!",
        rating: 5,
        projectType: "Modern Kitchen Renovation",
        featured: true,
        customerImage: null
      },
      {
        id: randomUUID(),
        customerName: "Michael Chen",
        content: "From design to installation, the team was incredible. Our new kitchen has become the heart of our home.",
        rating: 5,
        projectType: "Traditional Kitchen Design",
        featured: true,
        customerImage: null
      }
    ];

    const teamData: TeamMember[] = [
      {
        id: randomUUID(),
        name: "Emma Rodriguez",
        role: "Lead Designer",
        bio: "With 15 years of experience, Emma brings creativity and precision to every project.",
        image: null
      },
      {
        id: randomUUID(),
        name: "James Thompson",
        role: "Senior Architect",
        bio: "James specializes in transforming spaces with innovative design solutions.",
        image: null
      }
    ];

    portfolioData.forEach(p => this.portfolios.set(p.id, p));
    blogData.forEach(b => this.blogPosts.set(b.id, b));
    serviceData.forEach(s => this.services.set(s.id, s));
    testimonialData.forEach(t => this.testimonials.set(t.id, t));
    teamData.forEach(t => this.teamMembers.set(t.id, t));
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Portfolios
  async getPortfolios(): Promise<Portfolio[]> {
    return Array.from(this.portfolios.values());
  }

  async getPortfolio(id: string): Promise<Portfolio | undefined> {
    return this.portfolios.get(id);
  }

  async getPortfolioBySlug(slug: string): Promise<Portfolio | undefined> {
    return Array.from(this.portfolios.values()).find((p) => p.slug === slug);
  }

  async createPortfolio(insertPortfolio: InsertPortfolio): Promise<Portfolio> {
    const id = randomUUID();
    const portfolio: Portfolio = { 
      ...insertPortfolio,
      id,
      headline: insertPortfolio.headline ?? null,
      location: insertPortfolio.location ?? null,
      style: insertPortfolio.style ?? null,
      completionDate: insertPortfolio.completionDate ?? null,
      client: insertPortfolio.client ?? null,
      featured: insertPortfolio.featured ?? false,
    };
    this.portfolios.set(id, portfolio);
    return portfolio;
  }

  async updatePortfolio(id: string, updates: Partial<InsertPortfolio>): Promise<Portfolio | undefined> {
    const existing = this.portfolios.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...updates };
    this.portfolios.set(id, updated);
    return updated;
  }

  async deletePortfolio(id: string): Promise<boolean> {
    return this.portfolios.delete(id);
  }
  
  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find((p) => p.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { 
      ...insertPost,
      id,
      featured: insertPost.featured ?? false,
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: string, updates: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existing = this.blogPosts.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...updates };
    this.blogPosts.set(id, updated);
    return updated;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }
  
  // Services
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: string): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return Array.from(this.services.values()).find((s) => s.slug === slug);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { 
      ...insertService,
      id,
      featured: insertService.featured ?? false,
    };
    this.services.set(id, service);
    return service;
  }

  async updateService(id: string, updates: Partial<InsertService>): Promise<Service | undefined> {
    const existing = this.services.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...updates };
    this.services.set(id, updated);
    return updated;
  }

  async deleteService(id: string): Promise<boolean> {
    return this.services.delete(id);
  }
  
  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonial(id: string): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { 
      ...insertTestimonial,
      id,
      clientCompany: insertTestimonial.clientCompany ?? null,
      rating: insertTestimonial.rating ?? 5,
      projectId: insertTestimonial.projectId ?? null,
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async updateTestimonial(id: string, updates: Partial<InsertTestimonial>): Promise<Testimonial | undefined> {
    const existing = this.testimonials.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...updates };
    this.testimonials.set(id, updated);
    return updated;
  }

  async deleteTestimonial(id: string): Promise<boolean> {
    return this.testimonials.delete(id);
  }
  
  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values());
  }

  async getTeamMember(id: string): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const id = randomUUID();
    const member: TeamMember = { 
      ...insertMember,
      id,
      email: insertMember.email ?? null,
      phone: insertMember.phone ?? null,
      image: insertMember.image ?? null,
    };
    this.teamMembers.set(id, member);
    return member;
  }

  async updateTeamMember(id: string, updates: Partial<InsertTeamMember>): Promise<TeamMember | undefined> {
    const existing = this.teamMembers.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...updates };
    this.teamMembers.set(id, updated);
    return updated;
  }

  async deleteTeamMember(id: string): Promise<boolean> {
    return this.teamMembers.delete(id);
  }
  
  // Contact Submissions
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getContactSubmission(id: string): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const submission: ContactSubmission = { 
      ...insertSubmission,
      id,
      createdAt,
      phone: insertSubmission.phone ?? null,
      status: 'new',
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async updateContactSubmission(id: string, updates: Partial<InsertContactSubmission>): Promise<ContactSubmission | undefined> {
    const existing = this.contactSubmissions.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...updates };
    this.contactSubmissions.set(id, updated);
    return updated;
  }

  async deleteContactSubmission(id: string): Promise<boolean> {
    return this.contactSubmissions.delete(id);
  }
}

export const storage = new MemStorage();
