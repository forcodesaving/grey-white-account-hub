
import { Mail } from "lucide-react";

interface AccountInfoProps {
  email: string;
}

export function AccountInfo({ email }: AccountInfoProps) {
  return (
    <div className="bg-[#333333] rounded-lg p-6 border border-[#444444]">
      <h3 className="text-lg font-medium text-white mb-4">Account Information</h3>
      
      <div className="flex items-center gap-3">
        <Mail className="h-4 w-4 text-gray-400" />
        <div>
          <p className="text-sm font-medium text-white">{email}</p>
          <p className="text-xs text-gray-400">Email Address</p>
        </div>
      </div>
    </div>
  );
}
