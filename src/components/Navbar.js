import React, { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = (
    <div className="space-y-4 flex flex-col items-center mt-8 md:mt-0 md:space-y-0 md:space-x-6 md:flex-row">
      <a href="#about" className="text-primary md:text-white hover:text-accent transition-colors">About</a>
      <a href="#experience" className="text-primary md:text-white hover:text-accent transition-colors">Experience</a>
      <a href="#skills" className="text-primary md:text-white hover:text-accent transition-colors">Skills</a>
      {/* <a href="#projects" className="text-primary md:text-white hover:text-accent transition-colors">Projects</a> */}
      <a href="#contact" className="text-primary md:text-white hover:text-accent transition-colors">Contact Me</a>
      <a
        href="/AnahitaSood_Resume.pdf"
        className="inline-flex items-center text-primary md:text-white hover:text-accent transition-colors"
        download
      >
        Resume <DownloadIcon className="ml-1" fontSize="small" />
      </a>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-3">
          <div className="font-bold text-xl text-white">Anahita Sood</div>
          <div className="md:hidden">
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="menu"
              className="rounded-full bg-primary/80 hover:bg-primary hover:shadow-lg transition duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <MenuIcon className="text-white" />
            </button>
          </div>
          <div className="hidden md:block">{navLinks}</div>
        </div>
      </div>
      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[50vw] min-w-[220px] max-w-[600px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ borderTopLeftRadius: '1.5rem', borderBottomLeftRadius: '1.5rem' }}
      >
        {/* Animated blobs like About section */}
        <span className="absolute -top-10 -left-10 w-40 h-40 bg-primary opacity-30 rounded-full filter blur-2xl animate-blob z-0"></span>
        <span className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary opacity-40 rounded-full filter blur-2xl animate-blob animation-delay-2000 z-0"></span>
        <span className="absolute top-1/2 left-0 w-32 h-32 bg-secondary opacity-20 rounded-full filter blur-2xl animate-blob animation-delay-4000 z-0"></span>
        <div className="relative flex flex-col items-center h-full px-6 pt-8 pb-6 z-10">
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-accent text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="flex-1 w-full flex flex-col items-center justify-center mt-12">
            <a href="#about" className="w-full text-white hover:bg-white/10 active:bg-white/20 rounded-lg px-4 py-2 text-lg font-medium transition-colors flex items-center justify-between" onClick={() => setDrawerOpen(false)}>
              About
              <span className="block w-full border-b border-white/30 shadow-sm"></span>
            </a>
            <a href="#experience" className="w-full text-white hover:bg-white/10 active:bg-white/20 rounded-lg px-4 py-2 text-lg font-medium transition-colors flex items-center justify-between" onClick={() => setDrawerOpen(false)}>
              Experience
              <span className="block w-full border-b border-white/30 shadow-sm"></span>
            </a>
            <a href="#skills" className="w-full text-white hover:bg-white/10 active:bg-white/20 rounded-lg px-4 py-2 text-lg font-medium transition-colors flex items-center justify-between" onClick={() => setDrawerOpen(false)}>
              Skills
              <span className="block w-full border-b border-white/30 shadow-sm"></span>
            </a>
            {/* <a href="#projects" className="w-full text-white hover:bg-white/10 active:bg-white/20 rounded-lg px-4 py-2 text-lg font-medium transition-colors flex items-center justify-between" onClick={() => setDrawerOpen(false)}>
              Projects
              <span className="block w-full border-b border-white/30 shadow-sm"></span>
            </a> */}
            <a href="#contact" className="w-full text-white hover:bg-white/10 active:bg-white/20 rounded-lg px-4 py-2 text-lg font-medium transition-colors flex items-center justify-between" onClick={() => setDrawerOpen(false)}>
              Contact Me
              <span className="block w-full border-b border-white/30 shadow-sm"></span>
            </a>
            <a
              href="/AnahitaSood_Resume.pdf"
              className="w-full inline-flex items-center text-white hover:bg-white/10 active:bg-white/20 rounded-lg px-4 py-2 text-lg font-medium transition-colors justify-between"
              download
              onClick={() => setDrawerOpen(false)}
            >
              <span>Resume</span>
              <span className="flex items-center ml-2"><DownloadIcon className="ml-1" fontSize="small" /></span>
              <span className="block w-full border-b border-white/30 shadow-sm absolute left-0 bottom-0"></span>
            </a>
          </div>
          <div className="mt-auto w-full flex justify-center">
            <span className="text-white text-xl font-bold tracking-wide">Anahita Sood</span>
          </div>
        </div>
      </div>
      {/* Overlay for closing drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
