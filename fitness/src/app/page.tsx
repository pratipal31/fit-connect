import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to FitConnect</h1>
      <p className="text-lg mb-8">
        Join our community and track your fitness journey.
      </p>
      <div className="flex space-x-4">
        <Link href="/login">
          <Button className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}
