import type { Portfolio, BlogPost, Service, Testimonial, TeamMember, ContactSubmission } from '@/types/schema';
import { 
  getPortfolios, getPortfolioBySlug, getPortfolioById,
  getBlogPosts, getBlogPostBySlug, getBlogPostById,
  getServices, getServiceBySlug, getServiceById,
  getTestimonials, getTestimonialById,
  getTeamMembers, getTeamMemberById
} from '@/data/staticData';

// Contact submissions will be stored in localStorage for persistence
const CONTACT_STORAGE_KEY = 'Bean_kitchen_contacts';

export class DataService {
  // Portfolio methods
  async getPortfolios(): Promise<Portfolio[]> {
    return Promise.resolve(getPortfolios());
  }

  async getPortfolio(id: string): Promise<Portfolio | undefined> {
    return Promise.resolve(getPortfolioById(id));
  }

  async getPortfolioBySlug(slug: string): Promise<Portfolio | undefined> {
    return Promise.resolve(getPortfolioBySlug(slug));
  }

  // Blog methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return Promise.resolve(getBlogPosts());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return Promise.resolve(getBlogPostById(id));
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Promise.resolve(getBlogPostBySlug(slug));
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    return Promise.resolve(getServices());
  }

  async getService(id: string): Promise<Service | undefined> {
    return Promise.resolve(getServiceById(id));
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return Promise.resolve(getServiceBySlug(slug));
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Promise.resolve(getTestimonials());
  }

  async getTestimonial(id: string): Promise<Testimonial | undefined> {
    return Promise.resolve(getTestimonialById(id));
  }

  // Team methods
  async getTeamMembers(): Promise<TeamMember[]> {
    return Promise.resolve(getTeamMembers());
  }

  async getTeamMember(id: string): Promise<TeamMember | undefined> {
    return Promise.resolve(getTeamMemberById(id));
  }

  // Contact methods (using localStorage)
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    try {
      const stored = localStorage.getItem(CONTACT_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  async getContactSubmission(id: string): Promise<ContactSubmission | undefined> {
    const submissions = await this.getContactSubmissions();
    return submissions.find(s => s.id === id);
  }

  async createContactSubmission(submission: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>): Promise<ContactSubmission> {
    const submissions = await this.getContactSubmissions();
    const newSubmission: ContactSubmission = {
      ...submission,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    
    submissions.push(newSubmission);
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(submissions));
    return newSubmission;
  }

  async updateContactSubmission(id: string, updates: Partial<ContactSubmission>): Promise<ContactSubmission | undefined> {
    const submissions = await this.getContactSubmissions();
    const index = submissions.findIndex(s => s.id === id);
    
    if (index === -1) return undefined;
    
    submissions[index] = { ...submissions[index], ...updates };
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(submissions));
    return submissions[index];
  }

  async deleteContactSubmission(id: string): Promise<boolean> {
    const submissions = await this.getContactSubmissions();
    const filtered = submissions.filter(s => s.id !== id);
    
    if (filtered.length === submissions.length) return false;
    
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(filtered));
    return true;
  }
}

export const dataService = new DataService();
