import { z } from "zod";

// User schemas
export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const userSchema = insertUserSchema.extend({
  id: z.string(),
});

// Portfolio schemas
export const insertPortfolioSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  headline: z.string().optional(),
  heroImage: z.string().min(1),
  gallery: z.array(z.string()),
  description: z.string().min(1),
  location: z.string().optional(),
  style: z.string().optional(),
  completionDate: z.string().optional(),
  client: z.string().optional(),
  services: z.array(z.string()),
  featured: z.boolean().default(false),
});

export const portfolioSchema = insertPortfolioSchema.extend({
  id: z.string(),
});

// Blog Post schemas
export const insertBlogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  heroImage: z.string().min(1),
  content: z.string().min(1),
  category: z.string().min(1),
  publishedAt: z.string(),
  featured: z.boolean().default(false),
});

export const blogPostSchema = insertBlogPostSchema.extend({
  id: z.string(),
});

// Service schemas
export const insertServiceSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  featured: z.boolean().default(false),
});

export const serviceSchema = insertServiceSchema.extend({
  id: z.string(),
});

// Testimonial schemas
export const insertTestimonialSchema = z.object({
  customerName: z.string().min(1),
  content: z.string().min(1),
  rating: z.number().min(1).max(5).default(5),
  projectType: z.string().optional(),
  featured: z.boolean().default(false),
  customerImage: z.string().optional().nullable(),
  clientCompany: z.string().optional().nullable(),
  projectId: z.string().optional().nullable(),
});

export const testimonialSchema = insertTestimonialSchema.extend({
  id: z.string(),
});

// Team Member schemas
export const insertTeamMemberSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  bio: z.string().min(1),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
});

export const teamMemberSchema = insertTeamMemberSchema.extend({
  id: z.string(),
});

// Contact Submission schemas
export const insertContactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export const contactSubmissionSchema = insertContactSubmissionSchema.extend({
  id: z.string(),
  createdAt: z.string(),
  status: z.string().default("new"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof userSchema>;

export type InsertPortfolio = z.infer<typeof insertPortfolioSchema>;
export type Portfolio = z.infer<typeof portfolioSchema>;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = z.infer<typeof blogPostSchema>;

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = z.infer<typeof serviceSchema>;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;

export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = z.infer<typeof teamMemberSchema>;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
