import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  DollarSign,
  Wrench,
  FileText,
  Settings,
  LogOut,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Building2, label: "Properties", path: "/properties" },
  { icon: Users, label: "Tenants", path: "/tenants" },
  { icon: DollarSign, label: "Payments", path: "/payments" },
  { icon: Wrench, label: "Maintenance", path: "/maintenance" },
  { icon: FileText, label: "Leases", path: "/leases" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-slate-900 border-r border-slate-800">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-slate-800 px-6">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
            <Home className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-lg font-bold text-white">Theomie</span>
            <span className="text-lg font-light text-emerald-400"> Properties</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                )}
              >
                <item.icon className={cn("h-5 w-5", isActive && "text-emerald-400")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Back to main site */}
        <div className="px-3 py-2">
          <a
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all duration-200"
          >
            <Home className="h-5 w-5" />
            Back to Main Site
          </a>
        </div>

        {/* User section */}
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2 bg-slate-800/30">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <span className="text-sm font-semibold text-white">TP</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Theomie Properties</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem("authenticated");
                window.location.href = "/";
              }}
              className="text-slate-500 hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
