import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">BudgTrack</h1>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-500 text-white h-screen flex items-center justify-center flex-col text-center">
        <h2 className="text-5xl font-bold mb-6">Simplify Your Freelance Finances</h2>
        <p className="text-xl mb-8">Track income, forecast cash flow, and reach your financial goals with BudgTrack.</p>
        <a href="#signup" className="bg-green-500 px-6 py-3 rounded-md text-white font-semibold">Join the Waitlist</a>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 bg-gray-100 text-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Why Choose BudgTrack?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <i className="fas fa-money-check-alt text-blue-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold">Track Your Income</h3>
              <p className="text-gray-600">Track your earnings from various gigs in one place.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <i className="fas fa-chart-line text-blue-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold">AI-Powered Forecasting</h3>
              <p className="text-gray-600">Use AI to predict cash flow based on your earnings.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <i className="fas fa-bullseye text-blue-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold">Set Financial Goals</h3>
              <p className="text-gray-600">Plan your financial goals and track your progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Join the BudgTrack Waitlist</h3>
          <form className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg text-gray-800" />
            <button className="bg-green-500 px-6 py-3 rounded-r-lg font-semibold">Sign Up</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 BudgTrack - All Rights Reserved</p>
          <p>
            Follow us on:
            <a href="#" className="text-blue-400 ml-2">Twitter</a>
            <a href="#" className="text-blue-400 ml-2">LinkedIn</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;