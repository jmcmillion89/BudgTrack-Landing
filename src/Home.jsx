import React from 'react';
import { motion } from 'framer-motion';

// Variants for scrolling animations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.header
        className="bg-blue-500 text-white h-screen flex items-center justify-center flex-col text-center px-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}  // Fades in without sliding
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-6">Take Control of Your Freelance Finances</h1>
        <p className="text-xl mb-8 max-w-2xl">
          BudgTrack helps freelancers and gig workers track income, forecast cash flow, and manage financial goals in one place. Simplify your finances and gain confidence in your future.
        </p>
        <a href="#signup" className="bg-green-500 px-6 py-3 rounded-md text-white font-semibold">
          Join the Waitlist
        </a>
      </motion.header>

      {/* Key Benefits Section */}
      <motion.section
        className="py-24 bg-gray-100 text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInRight}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why BudgTrack?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <i className="fas fa-dollar-sign text-blue-600 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold">Automated Income Tracking</h3>
              <p className="text-gray-600">Easily track your income from multiple freelance gigs without the hassle.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <i className="fas fa-chart-line text-blue-600 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold">AI-Powered Cash Flow Forecasting</h3>
              <p className="text-gray-600">Get accurate, AI-driven cash flow predictions based on your earnings and expenses.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <i className="fas fa-bullseye text-blue-600 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold">Financial Goal Setting</h3>
              <p className="text-gray-600">Set and track personal financial goals to stay on top of your finances.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-24 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <i className="fas fa-sync-alt text-blue-600 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold">1. Connect Your Accounts</h3>
              <p className="text-gray-600">Link your freelance platforms or manually input your earnings to track all income in one place.</p>
            </div>
            <div>
              <i className="fas fa-brain text-blue-600 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold">2. Get Smart Insights</h3>
              <p className="text-gray-600">BudgTrack analyzes your income patterns and provides actionable insights to help you save and plan better.</p>
            </div>
            <div>
              <i className="fas fa-trophy text-blue-600 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold">3. Achieve Your Goals</h3>
              <p className="text-gray-600">Set financial goals, get tailored recommendations, and watch your progress with real-time data.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Signup Section */}
      <motion.section
        id="signup"
        className="py-24 bg-blue-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInRight}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Join the BudgTrack Waitlist</h3>
          <form className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg text-gray-800" />
            <button className="bg-green-500 px-6 py-3 rounded-r-lg font-semibold">Sign Up</button>
          </form>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 BudgTrack - All Rights Reserved</p>
          <p>
            Follow us on:
            <a href="https://twitter.com" className="text-blue-400 ml-2">Twitter</a>
            <a href="https://linkedin.com" className="text-blue-400 ml-2">LinkedIn</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;