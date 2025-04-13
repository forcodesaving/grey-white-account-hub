
import { Clock, Gift } from "lucide-react";
import { AccountLayout } from "@/components/layouts/AccountLayout";
import { StatCard } from "@/components/account/StatCard";
import { SubscriptionCard } from "@/components/account/SubscriptionCard";
import { AccountInfo } from "@/components/account/AccountInfo";

// This would typically come from an API
const mockUserData = {
  email: "user@example.com",
  subscription: {
    plan: "Premium Plan",
    renewalDate: "May 15, 2025",
    status: "active" as const,
    creditsLeft: 750,
    minutesLeft: 120
  }
};

export default function Dashboard() {
  const { email, subscription } = mockUserData;
  
  return (
    <AccountLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Manage your account and subscription</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard 
            title="Credits Available" 
            value={subscription.creditsLeft} 
            icon={<Gift className="h-5 w-5" />} 
            helperText="Credits reset on renewal date"
          />
          <StatCard 
            title="Minutes Remaining" 
            value={subscription.minutesLeft} 
            icon={<Clock className="h-5 w-5" />}
            helperText="Minutes reset on renewal date" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SubscriptionCard 
            plan={subscription.plan}
            renewalDate={subscription.renewalDate}
            status={subscription.status}
          />
          <AccountInfo email={email} />
        </div>
      </div>
    </AccountLayout>
  );
}
