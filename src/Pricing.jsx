import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
        <p className="text-lg mb-12">
          Choose the plan that fits your needs. Whether you're just starting or need advanced tools, we've got you covered.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
            <p className="text-5xl font-bold mb-4">$0<span className="text-lg font-medium">/mo</span></p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2">Basic Income Tracking</li>
              <li className="mb-2">Access to AI Forecasting</li>
              <li className="mb-2">Up to 3 Financial Goals</li>
              <li>Ad-supported</li>
            </ul>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold">Sign Up</button>
          </div>

          {/* Standard Plan */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Standard Plan</h3>
            <p className="text-5xl font-bold mb-4">$4.99<span className="text-lg font-medium">/mo</span></p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2">Advanced Income Tracking</li>
              <li className="mb-2">AI Cash Flow Forecasting</li>
              <li className="mb-2">Unlimited Financial Goals</li>
              <li className="mb-2">Tax and Mileage Tracking</li>
              <li>No ads</li>
            </ul>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold">Sign Up</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <p className="text-5xl font-bold mb-4">$9.99<span className="text-lg font-medium">/mo</span></p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2">All Standard Features</li>
              <li className="mb-2">Priority Support</li>
              <li className="mb-2">Customizable Financial Coaching</li>
              <li className="mb-2">Invoicing Tools</li>
              <li className="mb-2">Real-time AI-driven insights</li>
            </ul>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;