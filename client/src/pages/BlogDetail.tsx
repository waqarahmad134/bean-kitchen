import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar } from 'lucide-react';
import type { BlogPost } from '@shared/schema';

export default function BlogDetail() {
  const [, params] = useRoute('/blog/:slug');
  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: ['/api/blog', params?.slug],
    enabled: !!params?.slug,
  });

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Blog post not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-4 py-24">
        <div className="mb-8">
          <p className="text-primary tracking-widest uppercase text-sm mb-4" data-testid="text-category">
            {post.category}
          </p>
          <h1 className="text-5xl font-heading font-bold mb-6" data-testid="text-post-title">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>

        <img
          src={post.heroImage}
          alt={post.title}
          className="w-full h-96 object-cover rounded-md mb-12"
          data-testid="img-post-hero"
        />

        <div className="prose prose-lg max-w-none" data-testid="content-post">
          <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </div>
      </article>

      <Footer />
    </div>
  );
}
