import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-white min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p>A personal portfolio built with React, Tailwind CSS, and MUI.</p>
        </div>
        <div className="p-6 border rounded-lg shadow bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">E-commerce App</h3>
          <p>Full-stack e-commerce app using React, Node.js, and MongoDB.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
