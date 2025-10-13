import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertPortfolioSchema,
  insertBlogPostSchema,
  insertServiceSchema,
  insertTestimonialSchema,
  insertTeamMemberSchema,
  insertContactSubmissionSchema,
  insertUserSchema
} from "@shared/schema";
import { z } from "zod";

// Simple authentication middleware
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.userId) {
    return next();
  }
  return res.status(401).json({ error: "Unauthorized" });
};

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Auth routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      
      req.session.userId = user.id;
      return res.json({ user: { id: user.id, username: user.username } });
    } catch (error) {
      return res.status(500).json({ error: "Login failed" });
    }
  });
  
  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ success: true });
    });
  });
  
  app.get("/api/auth/me", isAuthenticated, async (req, res) => {
    const user = await storage.getUser(req.session.userId!);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({ user: { id: user.id, username: user.username } });
  });
  
  // Portfolio routes
  app.get("/api/portfolios", async (req, res) => {
    const portfolios = await storage.getPortfolios();
    return res.json(portfolios);
  });
  
  app.get("/api/portfolios/:slug", async (req, res) => {
    const portfolio = await storage.getPortfolioBySlug(req.params.slug);
    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    return res.json(portfolio);
  });
  
  app.post("/api/portfolios", isAuthenticated, async (req, res) => {
    try {
      const validated = insertPortfolioSchema.parse(req.body);
      const portfolio = await storage.createPortfolio(validated);
      return res.json(portfolio);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to create portfolio" });
    }
  });
  
  app.patch("/api/portfolios/:id", isAuthenticated, async (req, res) => {
    try {
      const updates = insertPortfolioSchema.partial().parse(req.body);
      const portfolio = await storage.updatePortfolio(req.params.id, updates);
      if (!portfolio) {
        return res.status(404).json({ error: "Portfolio not found" });
      }
      return res.json(portfolio);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to update portfolio" });
    }
  });
  
  app.delete("/api/portfolios/:id", isAuthenticated, async (req, res) => {
    const deleted = await storage.deletePortfolio(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    return res.json({ success: true });
  });
  
  // Blog routes
  app.get("/api/blog", async (req, res) => {
    const posts = await storage.getBlogPosts();
    return res.json(posts);
  });
  
  app.get("/api/blog/:slug", async (req, res) => {
    const post = await storage.getBlogPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    return res.json(post);
  });
  
  app.post("/api/blog", isAuthenticated, async (req, res) => {
    try {
      const validated = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validated);
      return res.json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to create blog post" });
    }
  });
  
  app.patch("/api/blog/:id", isAuthenticated, async (req, res) => {
    try {
      const updates = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(req.params.id, updates);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      return res.json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to update blog post" });
    }
  });
  
  app.delete("/api/blog/:id", isAuthenticated, async (req, res) => {
    const deleted = await storage.deleteBlogPost(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    return res.json({ success: true });
  });
  
  // Service routes
  app.get("/api/services", async (req, res) => {
    const services = await storage.getServices();
    return res.json(services);
  });
  
  app.get("/api/services/:slug", async (req, res) => {
    const service = await storage.getServiceBySlug(req.params.slug);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    return res.json(service);
  });
  
  app.post("/api/services", isAuthenticated, async (req, res) => {
    try {
      const validated = insertServiceSchema.parse(req.body);
      const service = await storage.createService(validated);
      return res.json(service);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to create service" });
    }
  });
  
  app.patch("/api/services/:id", isAuthenticated, async (req, res) => {
    try {
      const updates = insertServiceSchema.partial().parse(req.body);
      const service = await storage.updateService(req.params.id, updates);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      return res.json(service);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to update service" });
    }
  });
  
  app.delete("/api/services/:id", isAuthenticated, async (req, res) => {
    const deleted = await storage.deleteService(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Service not found" });
    }
    return res.json({ success: true });
  });
  
  // Testimonial routes
  app.get("/api/testimonials", async (req, res) => {
    const testimonials = await storage.getTestimonials();
    return res.json(testimonials);
  });
  
  app.post("/api/testimonials", isAuthenticated, async (req, res) => {
    try {
      const validated = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validated);
      return res.json(testimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to create testimonial" });
    }
  });
  
  app.patch("/api/testimonials/:id", isAuthenticated, async (req, res) => {
    try {
      const updates = insertTestimonialSchema.partial().parse(req.body);
      const testimonial = await storage.updateTestimonial(req.params.id, updates);
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      return res.json(testimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to update testimonial" });
    }
  });
  
  app.delete("/api/testimonials/:id", isAuthenticated, async (req, res) => {
    const deleted = await storage.deleteTestimonial(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Testimonial not found" });
    }
    return res.json({ success: true });
  });
  
  // Team routes
  app.get("/api/team", async (req, res) => {
    const members = await storage.getTeamMembers();
    return res.json(members);
  });
  
  app.post("/api/team", isAuthenticated, async (req, res) => {
    try {
      const validated = insertTeamMemberSchema.parse(req.body);
      const member = await storage.createTeamMember(validated);
      return res.json(member);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to create team member" });
    }
  });
  
  app.patch("/api/team/:id", isAuthenticated, async (req, res) => {
    try {
      const updates = insertTeamMemberSchema.partial().parse(req.body);
      const member = await storage.updateTeamMember(req.params.id, updates);
      if (!member) {
        return res.status(404).json({ error: "Team member not found" });
      }
      return res.json(member);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to update team member" });
    }
  });
  
  app.delete("/api/team/:id", isAuthenticated, async (req, res) => {
    const deleted = await storage.deleteTeamMember(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Team member not found" });
    }
    return res.json({ success: true });
  });
  
  // Contact routes
  app.get("/api/contact", isAuthenticated, async (req, res) => {
    const submissions = await storage.getContactSubmissions();
    return res.json(submissions);
  });
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validated = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validated);
      return res.json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to submit contact form" });
    }
  });
  
  app.patch("/api/contact/:id", isAuthenticated, async (req, res) => {
    try {
      const updates = insertContactSubmissionSchema.partial().parse(req.body);
      const submission = await storage.updateContactSubmission(req.params.id, updates);
      if (!submission) {
        return res.status(404).json({ error: "Contact submission not found" });
      }
      return res.json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: "Failed to update contact submission" });
    }
  });
  
  app.delete("/api/contact/:id", isAuthenticated, async (req, res) => {
    const deleted = await storage.deleteContactSubmission(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Contact submission not found" });
    }
    return res.json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
