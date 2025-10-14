import { QueryClient, type QueryFunction } from "@tanstack/react-query";
import { dataService } from './dataService';

// Legacy API request function - kept for contact form submission
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Handle contact form submission
  if (method === 'POST' && url === '/api/contact' && data) {
    try {
      const submission = await dataService.createContactSubmission(data as any);
      return {
        json: async () => submission,
        status: 200,
        ok: true
      } as Response;
    } catch (error) {
      return {
        json: async () => ({ error: 'Failed to submit contact form' }),
        status: 500,
        ok: false
      } as Response;
    }
  }

  // For all other requests, return a mock response
  return {
    json: async () => ({ error: 'Backend removed - using static data' }),
    status: 404,
    ok: false
  } as Response;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const key = queryKey.join("/") as string;
    
    // Route to appropriate data service method
    switch (key) {
      case '/api/portfolios':
        return await dataService.getPortfolios();
      case '/api/blog':
        return await dataService.getBlogPosts();
      case '/api/services':
        return await dataService.getServices();
      case '/api/testimonials':
        return await dataService.getTestimonials();
      case '/api/team':
        return await dataService.getTeamMembers();
      case '/api/contact':
        return await dataService.getContactSubmissions();
      default:
        // Handle dynamic routes like /api/portfolios/:slug
        if (key.startsWith('/api/portfolios/')) {
          const slug = key.split('/').pop();
          return await dataService.getPortfolioBySlug(slug!);
        }
        if (key.startsWith('/api/blog/')) {
          const slug = key.split('/').pop();
          return await dataService.getBlogPostBySlug(slug!);
        }
        if (key.startsWith('/api/services/')) {
          const slug = key.split('/').pop();
          return await dataService.getServiceBySlug(slug!);
        }
        
        // Return null for unknown routes
        if (unauthorizedBehavior === "returnNull") {
          return null;
        }
        throw new Error(`Route not found: ${key}`);
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});