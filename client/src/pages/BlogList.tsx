import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@shared/schema';

export default function BlogList() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold text-center mb-4" data-testid="text-blog-title">
            Latest News & Insights
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Discover kitchen design trends, renovation tips, and industry insights
          </p>

          {isLoading ? (
            <div className="text-center" data-testid="loading-posts">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.map((post) => (
                <article key={post.id} className="bg-card rounded-md overflow-hidden hover-elevate" data-testid={`card-post-${post.id}`}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-md">
                        <div className="text-2xl font-heading font-bold">{new Date(post.publishedAt).getDate()}</div>
                        <div className="text-xs">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short' })}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-heading font-semibold mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
