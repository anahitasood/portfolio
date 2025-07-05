import React from 'react';

function Footer() {
  return (
    <footer className="bg-background text-white py-6 text-center mt-auto border-t-4 border-accent shadow-inner">
      <p>&copy; {new Date().getFullYear()} Anahita Sood. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
