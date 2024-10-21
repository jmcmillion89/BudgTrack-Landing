import React from 'react';

function Footer() {
  return (
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
  );
}

export default Footer;