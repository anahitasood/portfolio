import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      <Navbar />
      <main className="flex-1">
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Contact />
        <Resume/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
