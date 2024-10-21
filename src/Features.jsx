import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">BudgTrack Features</h2>
        <p className="text-lg mb-12">
          Designed specifically for freelancers and gig workers, BudgTrack offers dynamic financial tracking and planning.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <i className="fas fa-money-check-alt text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Income Tracking</h3>
            <p className="text-gray-600">Track your income from multiple streams and view real-time summaries of your earnings.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <i className="fas fa-chart-line text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">AI-Powered Forecasting</h3>
            <p className="text-gray-600">Get cash flow forecasts based on your unique income patterns using AI.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <i className="fas fa-bullseye text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Goal Setting</h3>
            <p className="text-gray-600">Set financial goals and track progress with personalized insights and strategies.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <i className="fas fa-hand-holding-usd text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Tax Tracking</h3>
            <p className="text-gray-600">Keep track of your tax liabilities in real-time, ensuring you're always prepared.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <i className="fas fa-route text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Mileage Tracking</h3>
            <p className="text-gray-600">Easily track and categorize your mileage for tax purposes.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <i className="fas fa-file-invoice text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Invoicing</h3>
            <p className="text-gray-600">Generate and send invoices for your freelance gigs directly from BudgTrack.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;