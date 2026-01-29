import { useState } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  MessageSquare, 
  Bell, 
  Settings, 
  LogOut, 
  Menu,
  X,
  User,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const SidebarToogle = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) => (
  <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
    <Menu className="h-6 w-6" />
    <span className="sr-only">Toggle Menu</span>
  </Button>
);

const NavItem = ({ href, icon: Icon, label, active, collapsed, onClick }: { href: string, icon: any, label: string, active: boolean, collapsed?: boolean, onClick?: () => void }) => (
  <Link
    to={href}
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group",
      active 
        ? "bg-primary text-primary-foreground shadow-md" 
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
      collapsed && "justify-center px-2"
    )}
  >
    <Icon className={cn("h-5 w-5 flex-shrink-0", active ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
    {!collapsed && <span className="font-medium truncate">{label}</span>}
  </Link>
);

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/dashboard/courses", icon: BookOpen, label: "My Courses" },
    { href: "/dashboard/library", icon: GraduationCap, label: "Course Library" },
    { href: "/dashboard/assessments", icon: FileText, label: "Assessments" },
    { href: "/dashboard/discussions", icon: MessageSquare, label: "Discussions" },
  ];

  const handleLogout = () => {
    // Clear any auth state here
    navigate("/auth");
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-card border-r">
      <div className={cn("h-16 flex items-center border-b px-4", collapsed ? "justify-center" : "justify-between")}>
        {!collapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent truncate">
              Bluebird LMS
            </span>
        )}
        {collapsed && <span className="text-xl font-bold text-primary">B</span>}
      </div>

      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <p className={cn("px-4 text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider", collapsed && "hidden")}>
          Platform
        </p>
        {menuItems.map((item) => (
          <NavItem 
            key={item.href} 
            {...item} 
            active={location.pathname === item.href} 
            collapsed={collapsed}
            onClick={() => setIsSidebarOpen(false)}
          />
        ))}

        <div className="my-6 border-t mx-2" />
        
        <p className={cn("px-4 text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider", collapsed && "hidden")}>
          Account
        </p>
        <NavItem 
            href="/dashboard/settings" 
            icon={Settings} 
            label="Settings" 
            active={location.pathname === "/dashboard/settings"} 
            collapsed={collapsed}
            onClick={() => setIsSidebarOpen(false)}
        />
      </div>

      <div className="p-3 border-t bg-muted/20">
        <Button 
          variant="ghost" 
          className={cn("w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10", collapsed && "justify-center px-0")}
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          {!collapsed && "Log Out"}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/20 flex">
      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden md:block fixed inset-y-0 left-0 z-30 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}>
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="p-0 w-72">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className={cn(
        "flex-1 flex flex-col min-h-screen transition-all duration-300",
        collapsed ? "md:ml-20" : "md:ml-64"
      )}>
        {/* Header */}
        <header className="h-16 bg-background/80 backdrop-blur-md sticky top-0 z-20 border-b px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex text-muted-foreground"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="relative hidden sm:block w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search courses, lessons..." 
                className="pl-9 h-9 bg-muted/50 border-transparent focus:bg-background focus:border-input transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-background" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9 border border-border">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">D</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Demo User</p>
                    <p className="text-xs leading-none text-muted-foreground">demo@bluebirds.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
             <div className="max-w-7xl mx-auto w-full">
                <Outlet />
             </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
