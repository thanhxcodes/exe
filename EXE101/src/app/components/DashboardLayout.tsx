import { Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  DollarSign, 
  Users, 
  Settings,
  Truck,
  User,
  Bell,
  LogOut,
  Tag,
  BarChart3,
  Shield
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'customer' | 'vendor' | 'delivery' | 'admin';
}

const roleConfigs = {
  customer: {
    title: 'Customer Dashboard',
    nav: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/customer/dashboard' },
      { label: 'My Orders', icon: ShoppingBag, path: '/customer/orders' },
      { label: 'Profile', icon: User, path: '/customer/profile' },
    ],
  },
  vendor: {
    title: 'Vendor Dashboard',
    nav: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/vendor/dashboard' },
      { label: 'Products', icon: Package, path: '/vendor/products' },
      { label: 'Orders', icon: ShoppingBag, path: '/vendor/orders' },
      { label: 'Financials', icon: DollarSign, path: '/vendor/financials' },
    ],
  },
  delivery: {
    title: 'Delivery Dashboard',
    nav: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/delivery/dashboard' },
      { label: 'Active Deliveries', icon: Truck, path: '/delivery/active' },
    ],
  },
  admin: {
    title: 'Admin Dashboard',
    nav: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
      { label: 'Users', icon: Users, path: '/admin/users' },
      { label: 'Vendors', icon: Shield, path: '/admin/vendors' },
      { label: 'Categories', icon: Tag, path: '/admin/categories' },
      { label: 'Vouchers', icon: Tag, path: '/admin/vouchers' },
      { label: 'Reports', icon: BarChart3, path: '/admin/reports' },
    ],
  },
};

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const location = useLocation();
  const config = roleConfigs[role];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <div className="bg-white border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">Rental Hub</span>
            </Link>
            <span className="text-sm text-muted-foreground hidden md:block">
              {config.title}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-white">JD</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:block">John Doe</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 bg-white border-r border-border min-h-[calc(100vh-4rem)] sticky top-16">
          <nav className="flex-1 p-4 space-y-2">
            {config.nav.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className={`w-full justify-start ${isActive ? 'bg-primary text-white' : ''}`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
