import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <div className="flex flex-col min-h-screen text-primary">
      <Navbar />
      <main className="flex-1">
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        {/* Contact and Resume side by side on large screens */}
        <div className="flex flex-col bg-white lg:flex-row gap-8  w-full">
          <div className="w-full lg:w-1/2">
            <Contact />
          </div>
          <div className="hidden lg:block border-l-2 border-accent mx-2 my-8" style={{ minHeight: '60vh' }}></div>
          <div className="w-full lg:w-1/2">
            <Resume />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
