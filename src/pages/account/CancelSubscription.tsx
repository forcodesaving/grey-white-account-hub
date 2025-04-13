
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { AccountLayout } from "@/components/layouts/AccountLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CancelSubscription() {
  return (
    <AccountLayout>
      <div className="max-w-2xl mx-auto">
        <Link to="/account" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
        
        <div className="bg-[#333333] rounded-lg border border-[#444444] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <h1 className="text-xl font-bold text-white">Cancel Subscription</h1>
          </div>
          
          <p className="text-gray-300 mb-6">
            Are you sure you want to cancel your subscription? You will lose access to:
          </p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-gray-300">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
              <span>Premium features</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
              <span>Monthly credits and minutes</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
              <span>Priority support</span>
            </li>
          </ul>
          
          <p className="text-gray-400 text-sm mb-8">
            Your subscription will remain active until the end of your current billing period. You can resubscribe at any time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/account" className="flex-1">
              <Button variant="outline" className="w-full">
                Keep Subscription
              </Button>
            </Link>
            <Button variant="destructive" className="flex-1">
              Confirm Cancellation
            </Button>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
}
