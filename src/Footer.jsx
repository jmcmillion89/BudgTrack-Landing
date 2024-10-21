import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BudgTrack - All Rights Reserved</p>
        <div className="flex justify-center mt-4">
          <a
            href="https://twitter.com"
            className="text-blue-400 mx-2 hover:text-blue-300 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            className="text-blue-400 mx-2 hover:text-blue-300 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;