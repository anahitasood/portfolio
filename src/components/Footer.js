import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
