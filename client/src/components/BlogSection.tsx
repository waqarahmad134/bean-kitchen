import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blogImage1 from '@assets/generated_images/Walnut_luxury_kitchen_interior_583d3f1e.png';
import blogImage2 from '@assets/generated_images/Modern_luxury_kitchen_hero_57a35960.png';
import blogImage3 from '@assets/generated_images/Classic_white_kitchen_design_e9c601fe.png';

const posts = [
  {
    id: 1,
    title: '2019 Luxury Kitchens',
    category: 'Kitchen Design',
    date: '27 Jan',
    comments: 'No comment',
    excerpt: 'Id per diceret propriae mediocrem, pro ea utamur dolores democritum. Ei eam...',
    image: blogImage1,
  },
  {
    id: 2,
    title: 'Layout For Your Kitchen',
    category: 'Kitchen Design',
    date: '5 Sep',
    comments: 'No comment',
    excerpt: 'Id per diceret propriae medio, pro ea utamur dolores democritum. Ei eam convenire...',
    image: blogImage2,
  },
  {
    id: 3,
    title: 'Kitchen Lighting Elements',
    category: 'Kitchen Design',
    date: '2 May',
    comments: 'No comment',
    excerpt: 'Id per diceret propriae medio, pro ea utamur dolores democritum. Ei eam convenire...',
    image: blogImage3,
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-muted" data-testid="section-blog">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8" data-testid="text-blog-title">
            Latest news
          </h2>
          <Button variant="default" size="lg" data-testid="button-more-news">
            More News
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {posts.map((post, index) => (
            <article key={post.id} className="group bg-background rounded-md overflow-hidden hover-elevate" data-testid={`post-${index}`}>
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-post-${index}`}
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-md">
                  <div className="text-2xl font-heading font-bold">{post.date.split(' ')[0]}</div>
                  <div className="text-xs">{post.date.split(' ')[1]}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors" data-testid={`text-post-title-${index}`}>
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4" data-testid={`text-post-excerpt-${index}`}>
                  {post.excerpt}
                </p>
                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all" data-testid={`link-read-more-${index}`}>
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
