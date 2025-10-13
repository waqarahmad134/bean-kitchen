import { Link, useLocation } from 'wouter';
import { LayoutDashboard, FolderKanban, FileText, Briefcase, MessageSquare, Users, Mail, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from '@/components/ui/sidebar';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: FolderKanban, label: 'Portfolios', path: '/admin/portfolios' },
  { icon: FileText, label: 'Blog Posts', path: '/admin/blog' },
  { icon: Briefcase, label: 'Services', path: '/admin/services' },
  { icon: MessageSquare, label: 'Testimonials', path: '/admin/testimonials' },
  { icon: Users, label: 'Team', path: '/admin/team' },
  { icon: Mail, label: 'Contact Forms', path: '/admin/contact' },
];

export function AdminSidebar() {
  const [location] = useLocation();
  const { logout, user } = useAuth();

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <h2 className="text-2xl font-heading font-bold" data-testid="text-admin-logo">ARGU Admin</h2>
        <p className="text-sm text-muted-foreground" data-testid="text-admin-user">
          {user?.username}
        </p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild isActive={location === item.path}>
                <Link href={item.path} data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Button 
          variant="outline" 
          className="w-full justify-start gap-2" 
          onClick={() => logout()}
          data-testid="button-logout"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
