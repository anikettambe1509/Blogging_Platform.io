import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-3">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-lg text-gray-300">
          © {new Date().getFullYear()} Aniket's Blog. All Rights Reserved. <br />
          Developed by <span className="font-semibold">Aniket Tambe</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
