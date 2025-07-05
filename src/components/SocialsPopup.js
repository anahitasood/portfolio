import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';

function SocialsPopup({ open, onClose }) {
  if (!open) return null;
  // Close popup when clicking outside the modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={handleBackdropClick}>
      <div className="bg-white border-2 border-primary rounded-2xl shadow-2xl p-10 w-full max-w-md animate-fadeIn relative flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-secondary hover:text-primary text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Connect with Me</h3>
        <div className="flex flex-col gap-6 w-full items-center">
          <a href="mailto:soodanahita@example.com" className="flex items-center gap-3 text-primary no-underline hover:text-primary hover:scale-110 transition-transform transition-colors duration-200 justify-center">
            <MailOutlineIcon className="text-primary" />
            soodanahita@example.com
          </a>
          <a href="https://www.linkedin.com/in/anahita-sood-93b6061a9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary no-underline hover:text-primary hover:scale-110 transition-transform transition-colors duration-200 justify-center">
            <LinkedInIcon className="text-primary" />
            LinkedIn
          </a>
          <a href="tel:+917018499490" className="flex items-center gap-3 text-primary no-underline hover:text-primary hover:scale-110 transition-transform transition-colors duration-200 justify-center">
            <CallIcon className="text-primary" />
            +91 70184-99490
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialsPopup;
