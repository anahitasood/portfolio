import React, { useState } from 'react';
import SocialsPopup from './SocialsPopup';

function About() {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <section id="about" className="py-16 px-4 bg-background min-h-[50vh] md:min-h-[85vh] md:h-[85vh] relative overflow-hidden">
      {/* Responsive animated blobs */}
      <span className="absolute -top-10 left-1/4 w-32 h-32 sm:-top-16 sm:w-44 sm:h-44 bg-primary opacity-25 rounded-full filter blur-2xl z-0 animate-blob1" style={{clipPath: 'ellipse(60% 40% at 50% 50%)'}}></span>
      <span className="absolute top-4 left-4 w-8 h-8 sm:top-10 sm:left-10 sm:w-12 sm:h-12 bg-accent opacity-40 rounded-full filter blur-2xl z-0 animate-blob2" style={{clipPath: 'ellipse(70% 50% at 50% 50%)'}}></span>
      <span className="absolute top-1/3 left-1/2 w-20 h-20 sm:w-32 sm:h-32 bg-secondary opacity-20 rounded-full filter blur-2xl z-0 animate-blob3" style={{clipPath: 'ellipse(60% 40% at 50% 50%)', transform: 'translate(-50%, 0)'}}></span>
      <span className="absolute top-1/4 right-1/4 w-10 h-10 sm:right-1/3 sm:w-16 sm:h-16 bg-primary opacity-30 rounded-full filter blur-2xl z-0 animate-blob4" style={{clipPath: 'ellipse(60% 40% at 50% 50%)'}}></span>
      <span className="absolute top-1/2 right-4 w-32 h-32 sm:right-10 sm:w-60 sm:h-60 bg-accent opacity-15 rounded-full filter blur-2xl z-0 animate-blob5" style={{clipPath: 'ellipse(70% 50% at 50% 50%)'}}></span>
      <span className="absolute bottom-4 left-1/4 w-6 h-6 sm:bottom-10 sm:w-10 sm:h-10 bg-secondary opacity-35 rounded-full filter blur-2xl z-0 animate-blob6" style={{clipPath: 'ellipse(60% 40% at 50% 50%)'}}></span>
      <span className="absolute bottom-1/4 left-4 w-16 h-16 sm:left-10 sm:w-24 sm:h-24 bg-primary opacity-20 rounded-full filter blur-2xl z-0 animate-blob2" style={{clipPath: 'ellipse(70% 50% at 50% 50%)'}}></span>
      <span className="absolute bottom-0 right-1/4 w-20 h-20 sm:w-36 sm:h-36 bg-secondary opacity-25 rounded-full filter blur-2xl z-0 animate-blob3" style={{clipPath: 'ellipse(60% 40% at 50% 50%)'}}></span>
      <span className="absolute bottom-10 right-4 w-8 h-8 sm:bottom-20 sm:right-10 sm:w-14 sm:h-14 bg-accent opacity-30 rounded-full filter blur-2xl z-0 animate-blob4" style={{clipPath: 'ellipse(60% 40% at 50% 50%)'}}></span>
      <span className="absolute top-2/3 left-1/6 w-4 h-4 sm:left-1/5 sm:w-8 sm:h-8 bg-primary opacity-35 rounded-full filter blur-2xl z-0 animate-blob5" style={{clipPath: 'ellipse(70% 50% at 50% 50%)'}}></span>
      <span className="absolute top-1/2 left-2/3 w-10 h-10 sm:w-20 sm:h-20 bg-accent opacity-20 rounded-full filter blur-2xl z-0 animate-blob6" style={{clipPath: 'ellipse(60% 40% at 50% 50%)'}}></span>
      <span className="absolute bottom-1/3 right-1/2 w-24 h-24 sm:w-52 sm:h-52 bg-primary opacity-10 rounded-full filter blur-2xl z-0 animate-blob1" style={{clipPath: 'ellipse(60% 40% at 50% 50%)', transform: 'translate(50%, 0)'}}></span>

      <div className="flex flex-col sm:flex-row items-center sm:items-end md:gap-8 h-full relative z-10">
        {/* Left: Image (on all screens), Contact Me button (only on sm+) */}
        <div className="flex flex-col items-center w-full sm:w-1/2 justify-end h-full">
          <img
            src="/imagelogo.png"
            alt="Anahita Sood"
            className="mx-auto relative z-10 mb-1 sm:mb-2"
            style={{ display: 'block', width: '60%' }}
          />
          {/* Contact Me button only on sm+ */}
          <button
            onClick={() => setPopupOpen(true)}
            className="hidden sm:block px-10 py-4 text-lg bg-primary text-surface rounded shadow hover:scale-110 transition text-center relative z-10"
          >
            Contact Me
          </button>
          <SocialsPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
        {/* Right: Name, Title, Description, and Contact Me button (on mobile) */}
        <div className="w-full sm:w-1/2 flex flex-col justify-end h-full items-center sm:items-start">
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white text-center sm:text-left mb-2 relative z-10">Anahita Sood</h3>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-secondary text-center sm:text-left mb-4 relative z-10">Software Engineer</p>
          <p className="mt-2 text-sm xs:text-base sm:text-lg md:text-xl text-secondary text-center sm:text-left">
            I am a passionate frontend developer with a keen interest in building responsive and user-friendly web applications. My skills include modern JavaScript frameworks, CSS preprocessors, and version control systems. I enjoy collaborating with teams to create seamless user experiences.
          </p>
          {/* Contact Me button only on mobile */}
          <button
            onClick={() => setPopupOpen(true)}
            className="block sm:hidden mt-6 px-6 py-2 text-base sm:px-10 sm:py-4 sm:text-lg bg-primary text-surface rounded shadow hover:scale-110 transition text-center relative z-10"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
