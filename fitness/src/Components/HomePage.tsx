// src/app/page.tsx

import React from "react";
import Link from "next/link";

// Card Component
const Card: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <h1 className="text-2xl font-bold">fit-connect</h1>
        <div className="flex space-x-4">
          <Link href="/login">
            <button className="bg-white text-blue-600 hover:bg-gray-200 font-bold py-2 px-4 rounded transition-colors">
              Log In
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-white text-blue-600 hover:bg-gray-200 font-bold py-2 px-4 rounded transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Fit Connect
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md">
          Join our community and take your fitness journey to the next level
          with challenges, workouts, and support!
        </p>

        <div className="flex flex-wrap justify-center">
          <Card
            title="Workout Challenges"
            description="Participate in exciting workout challenges and push your limits!"
          />
          <Card
            title="Fitness Workouts"
            description="Access a variety of workouts designed by fitness experts."
          />
          <Card
            title="Community Support"
            description="Join our supportive community to share your progress and stay motivated."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Fit Connect. All Rights Reserved.
          </p>
          <p className="mb-4">Connect with us on social media!</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              Facebook
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h5 className="font-bold mb-2">Features</h5>
              <ul className="text-gray-400">
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
              <ul className="text-gray-400">
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
              <ul className="text-gray-400">
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
              <ul className="text-gray-400">
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
