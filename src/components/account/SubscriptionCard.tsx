
import { CreditCard, Calendar, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SubscriptionCardProps {
  plan: string;
  renewalDate: string;
  status: "active" | "canceled" | "past_due";
}

export function SubscriptionCard({ plan, renewalDate, status }: SubscriptionCardProps) {
  return (
    <div className="bg-[#333333] rounded-lg border border-[#444444] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">Subscription</h3>
          <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
            status === "active" ? "bg-green-900/20 text-green-400" :
            status === "past_due" ? "bg-yellow-900/20 text-yellow-400" :
            "bg-red-900/20 text-red-400"
          }`}>
            {status === "active" ? "Active" : 
             status === "past_due" ? "Past Due" : "Canceled"}
          </div>
        </div>
        
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-3">
            <CreditCard className="h-4 w-4 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-white">{plan}</p>
              <p className="text-xs text-gray-400">Current Plan</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-white">{renewalDate}</p>
              <p className="text-xs text-gray-400">Renewal Date</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#444444] p-4 bg-[#2c2c2c]">
        <Link to="/account/billing/cancel">
          <Button variant="destructive" className="w-full flex items-center gap-2">
            <XCircle className="h-4 w-4" />
            Cancel Subscription
          </Button>
        </Link>
      </div>
    </div>
  );
}
