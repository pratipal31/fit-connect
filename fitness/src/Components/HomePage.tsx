import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Card Component with Image
const Card: React.FC<{
  title: string;
  description: string;
  imageSrc: string;
}> = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg mb-4" // Adjusted height for responsive behavior
      />
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800">
        {title}
      </h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-montserrat bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gradient-to-r from-blue-100 to-blue-300 p-4 text-blue-900 shadow-md">
        <h1 className="text-3xl sm:text-3xl font-extrabold tracking-wider">
          Fit-Connect
        </h1>
        <div className="flex space-x-4">
          <Link href="/login">
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded-full transition-colors shadow-md">
              Log In
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded-full transition-colors shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex-grow flex flex-col items-center justify-center text-center py-8 md:py-16 bg-gradient-to-b from-white to-blue-100">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
            Empower Your Fitness Journey
          </h1>
          <p className="text-lg sm:text-xl text-blue-700 mb-8 max-w-xl mx-auto">
            Share your workouts, track your progress, and join challenges with
            like-minded fitness enthusiasts.
          </p>

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-6">
            <Card
              title="Workout Sharing"
              description="Share your daily workouts with the community and gain valuable feedback."
              imageSrc="workout.jpg"
            />
            <Card
              title="Track Your Progress"
              description="Monitor your progress over time with detailed statistics and insights."
              imageSrc="gym.jpeg"
            />
            <Card
              title="Challenges"
              description="Participate in challenges to stay motivated and compete with others."
              imageSrc="fitness.jpg"
            />
            <Card
              title="Track Your Calories"
              description="Keep an eye on your calorie intake and stay on top of your nutrition goals."
              imageSrc="calories.jpg"
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
          <Button>Button 4</Button>
          <Button>Button 5</Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-100 to-blue-300 text-blue-900 p-8 shadow-lg">
        <div className="container mx-auto text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Fit Connect. All Rights Reserved.
          </p>
          <p className="mb-4">Connect with us on social media!</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#" className="text-blue-700 hover:text-blue-900">
              Facebook
            </Link>
            <Link href="#" className="text-blue-700 hover:text-blue-900">
              Twitter
            </Link>
            <Link href="#" className="text-blue-700 hover:text-blue-900">
              Instagram
            </Link>
            <Link href="#" className="text-blue-700 hover:text-blue-900">
              LinkedIn
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div>
              <h5 className="font-bold mb-2">Features</h5>
              <ul className="text-blue-700">
                <li>
                  <Link href="#">Challenges</Link>
                </li>
                <li>
                  <Link href="#">Workouts</Link>
                </li>
                <li>
                  <Link href="#">Nutrition</Link>
                </li>
                <li>
                  <Link href="#">Community</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">Company</h5>
              <ul className="text-blue-700">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">Support</h5>
              <ul className="text-blue-700">
                <li>
                  <Link href="#">Help Center</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">Resources</h5>
              <ul className="text-blue-700">
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Success Stories</Link>
                </li>
                <li>
                  <Link href="#">Fitness Guides</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
