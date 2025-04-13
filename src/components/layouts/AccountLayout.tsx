
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

interface AccountLayoutProps {
  children: ReactNode;
}

export function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#222222]">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
