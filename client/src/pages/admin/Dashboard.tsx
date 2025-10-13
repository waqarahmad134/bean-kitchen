import { useQuery } from '@tanstack/react-query';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderKanban, FileText, Briefcase, MessageSquare, Users, Mail } from 'lucide-react';
import type { Portfolio, BlogPost, Service, Testimonial, TeamMember, ContactSubmission } from '@shared/schema';

export default function AdminDashboard() {
  const { data: portfolios } = useQuery<Portfolio[]>({ queryKey: ['/api/portfolios'] });
  const { data: blogPosts } = useQuery<BlogPost[]>({ queryKey: ['/api/blog'] });
  const { data: services } = useQuery<Service[]>({ queryKey: ['/api/services'] });
  const { data: testimonials } = useQuery<Testimonial[]>({ queryKey: ['/api/testimonials'] });
  const { data: team } = useQuery<TeamMember[]>({ queryKey: ['/api/team'] });
  const { data: contacts } = useQuery<ContactSubmission[]>({ queryKey: ['/api/contact'] });

  const stats = [
    { icon: FolderKanban, label: 'Portfolios', count: portfolios?.length || 0, color: 'text-primary' },
    { icon: FileText, label: 'Blog Posts', count: blogPosts?.length || 0, color: 'text-blue-600' },
    { icon: Briefcase, label: 'Services', count: services?.length || 0, color: 'text-green-600' },
    { icon: MessageSquare, label: 'Testimonials', count: testimonials?.length || 0, color: 'text-purple-600' },
    { icon: Users, label: 'Team Members', count: team?.length || 0, color: 'text-orange-600' },
    { icon: Mail, label: 'Contact Forms', count: contacts?.length || 0, color: 'text-red-600' },
  ];

  return (
    <AdminLayout>
      <div data-testid="page-admin-dashboard">
        <h1 className="text-3xl font-heading font-bold mb-8" data-testid="text-dashboard-title">Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} data-testid={`card-stat-${index}`}>
              <CardHeader className="flex flex-row items-center justify-between gap-4 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold" data-testid={`text-count-${index}`}>{stat.count}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
