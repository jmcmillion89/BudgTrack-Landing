import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt, faChartLine, faBullseye, faReceipt, faChartPie, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: 'Track Your Income',
    description: 'Track your earnings from various gigs in one place.',
    icon: faMoneyCheckAlt,
  },
  {
    title: 'AI-Powered Forecasting',
    description: 'Use AI to predict cash flow based on your earnings.',
    icon: faChartLine,
  },
  {
    title: 'Set Financial Goals',
    description: 'Plan your financial goals and track your progress.',
    icon: faBullseye,
  },
  {
    title: 'Expense Tracking',
    description: 'Keep track of all your expenses and stay on budget.',
    icon: faReceipt,
  },
  {
    title: 'Real-time Insights',
    description: 'Get instant insights on your current financial status.',
    icon: faChartPie,
  },
  {
    title: 'Customizable Reports',
    description: 'Generate detailed reports based on your needs.',
    icon: faFileAlt,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold mb-16">Why Choose BudgTrack?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <FontAwesomeIcon icon={feature.icon} className="text-blue-600 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;