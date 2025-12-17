import { Link, useLocation } from 'react-router-dom';
import { Bell, Search, Bot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Alerts', path: '/alerts' },
  { label: 'Scheduling', path: '/scheduling' },
  { label: 'Customer', path: '/customer' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Security', path: '/security' },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="flex h-16 items-center px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg">PredictMaint AI</span>
        </Link>

        <nav className="ml-10 flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors rounded-md',
                location.pathname === item.path
                  ? 'text-foreground border-b-2 border-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
