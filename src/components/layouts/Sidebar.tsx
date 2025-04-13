
import { CreditCard, Home, LogOut, Settings, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/account", icon: Home },
    { name: "Profile", path: "/account/profile", icon: User },
    { name: "Billing", path: "/account/billing", icon: CreditCard },
    { name: "Settings", path: "/account/settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-[#333333] border-r border-[#444444] hidden md:block">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">Account</h2>
      </div>
      
      <nav className="mt-6">
        <ul>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                    isActive 
                      ? "text-white bg-[#444444]" 
                      : "text-gray-300 hover:text-white hover:bg-[#3a3a3a]"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-6 px-6 w-64">
        <button className="flex items-center gap-3 text-gray-300 hover:text-white text-sm py-2">
          <LogOut className="h-4 w-4" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
}
