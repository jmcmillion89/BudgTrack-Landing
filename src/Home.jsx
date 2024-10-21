import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt, faChartLine, faBullseye, faClipboardList, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-blue-500 text-white h-screen flex items-center justify-center flex-col text-center">
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Track, Budget, Grow
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Track income, forecast cash flow, and reach your financial goals with BudgTrack.
        </motion.p>
        <motion.a
          href="#signup"
          className="bg-green-500 px-6 py-3 rounded-md text-white font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          Join the Waitlist
        </motion.a>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-16">Why Choose BudgTrack?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-blue-600 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Track Your Income</h3>
              <p className="text-lg text-gray-600">
                Track your earnings from various gigs in one place.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-10"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <FontAwesomeIcon icon={faChartLine} className="text-blue-600 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Forecasting</h3>
              <p className="text-lg text-gray-600">
                Use AI to predict cash flow based on your earnings.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <FontAwesomeIcon icon={faBullseye} className="text-blue-600 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Set Financial Goals</h3>
              <p className="text-lg text-gray-600">
                Plan your financial goals and track your progress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Financial Planning Section */}
      <section id="financial-planning" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-16">Plan for the Future</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-gray-100 rounded-lg shadow-lg p-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <FontAwesomeIcon icon={faClipboardList} className="text-green-600 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customizable Budgets</h3>
              <p className="text-lg text-gray-600">
                Create personalized budgets tailored to your needs.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-100 rounded-lg shadow-lg p-10"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <FontAwesomeIcon icon={faHandsHelping} className="text-green-600 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Guided Financial Planning</h3>
              <p className="text-lg text-gray-600">
                Get personalized advice to help you stay on track.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;