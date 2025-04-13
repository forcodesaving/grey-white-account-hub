
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  helperText?: string;
}

export function StatCard({ title, value, icon, helperText }: StatCardProps) {
  return (
    <div className="bg-[#333333] rounded-lg p-6 border border-[#444444]">
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-sm">{title}</p>
        <div className="text-white">{icon}</div>
      </div>
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
      {helperText && <p className="mt-1 text-sm text-gray-400">{helperText}</p>}
    </div>
  );
}
