import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-4 bg-background min-h-[60vh] md:min-h-[90vh] md:h-[90vh]">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-8 h-full">
        <div className="flex flex-col items-center w-full sm:w-1/2 justify-end h-full">
          <img
            src="/path/to/your-image.jpg"
            alt="Anahita Sood"
            className="w-32 h-32 rounded-full mb-4 object-cover mx-auto"
          />
          <h3 className="text-xl font-semibold text-primary text-center">Anahita Sood</h3>
          <p className="text-secondary text-center text-lg mb-2">Software Engineer</p>
          <a href="#contact" className="mt-2 px-6 py-2 bg-primary text-surface rounded shadow hover:bg-blue-700 transition text-center">Contact Me</a>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-end h-full">
          <p className="mt-6 sm:mt-0 text-lg text-secondary">
            I am a passionate frontend developer with a keen interest in building responsive and user-friendly web applications. My skills include modern JavaScript frameworks, CSS preprocessors, and version control systems. I enjoy collaborating with teams to create seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
