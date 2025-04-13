
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222222]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Your Account Hub</h1>
        <p className="text-xl text-gray-400 mb-8">Manage your subscription, track usage, and more</p>
        <Link to="/account">
          <Button className="bg-white text-[#222222] hover:bg-gray-200">
            Go to Account Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
