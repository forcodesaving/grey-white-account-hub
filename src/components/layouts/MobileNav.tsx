
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4 border-b border-[#444444]">
        <h1 className="text-lg font-bold text-white">Account Dashboard</h1>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0 bg-[#333333] border-r border-[#444444]">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
