import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faMoneyCheckAlt, faChartLine, faBullseye, faCar, faFileInvoice, faHandsHelping, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Pricing = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Delay animation for each card
        duration: 0.5
      }
    }),
  };

  return (
    <section id="pricing" className="py-12 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
        <p className="text-lg mb-12">
          Choose the plan that fits your needs. Whether you're just starting or need advanced tools, we've got you covered.
        </p>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Free Plan</th>
                <th className="px-4 py-2">Standard Plan</th>
                <th className="px-4 py-2">Premium Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-left">Basic Income Tracking</td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left">AI Cash Flow Forecasting</td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left">Unlimited Financial Goals</td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left">Tax and Mileage Tracking</td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left">Priority Support</td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left">Customizable Financial Coaching</td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left">Invoicing Tools</td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left">Real-time AI-driven insights</td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /></td>
                <td className="px-4 py-2 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Free Plan */}
          <motion.div
            className="bg-gray-100 rounded-lg shadow-md p-6"
            custom={0} // Controls the animation delay
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
            <p className="text-5xl font-bold mb-4">$0<span className="text-lg font-medium">/mo</span></p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2"><FontAwesomeIcon icon={faMoneyCheckAlt} /> Basic Income Tracking</li>
              <li className="mb-2"><FontAwesomeIcon icon={faChartLine} /> Access to AI Forecasting</li>
              <li className="mb-2"><FontAwesomeIcon icon={faBullseye} /> Up to 3 Financial Goals</li>
              <li><FontAwesomeIcon icon={faTrophy} /> Ad-supported</li>
            </ul>
            <span className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold">Coming Soon</span>
          </motion.div>

          {/* Standard Plan */}
          <motion.div
            className="bg-gray-100 rounded-lg shadow-md p-6"
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Standard Plan</h3>
            <p className="text-5xl font-bold mb-4">$4.99<span className="text-lg font-medium">/mo</span></p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2"><FontAwesomeIcon icon={faMoneyCheckAlt} /> Advanced Income Tracking</li>
              <li className="mb-2"><FontAwesomeIcon icon={faChartLine} /> AI Cash Flow Forecasting</li>
              <li className="mb-2"><FontAwesomeIcon icon={faBullseye} /> Unlimited Financial Goals</li>
              <li className="mb-2"><FontAwesomeIcon icon={faCar} /> Tax and Mileage Tracking</li>
              <li>No ads</li>
            </ul>
            <span className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold">Coming Soon</span>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="bg-gray-100 rounded-lg shadow-md p-6"
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <p className="text-5xl font-bold mb-4">$9.99<span className="text-lg font-medium">/mo</span></p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2"><FontAwesomeIcon icon={faMoneyCheckAlt} /> All Standard Features</li>
              <li className="mb-2"><FontAwesomeIcon icon={faHandsHelping} /> Priority Support</li>
              <li className="mb-2"><FontAwesomeIcon icon={faFileInvoice} /> Customizable Financial Coaching</li>
              <li className="mb-2"><FontAwesomeIcon icon={faFileInvoice} /> Invoicing Tools</li>
              <li className="mb-2"><FontAwesomeIcon icon={faChartLine} /> Real-time AI-driven Insights</li>
            </ul>
            <span className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold">Coming Soon</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;