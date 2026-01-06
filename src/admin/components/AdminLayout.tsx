import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Inbox, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { demoAdminLogout } from '@/demo/demoStore';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/enquiries', label: 'Enquiries', icon: Inbox },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-64 border-r border-border min-h-screen sticky top-0">
          <div className="p-4 border-b border-border">
            <div className="font-display font-bold text-lg">Famox Admin</div>
          </div>

          <nav className="p-2 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-foreground',
                  ].join(' ')
                }
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 mt-auto border-t border-border">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                demoAdminLogout();
                navigate('/admin');
              }}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </aside>

        <main className="flex-1">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
