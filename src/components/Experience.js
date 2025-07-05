import React from 'react';
import { experienceData } from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="bg-white/80 rounded-lg shadow-lg border-2 border-accent p-6 w-full md:w-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-accent/50 hover:backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
            <p className="text-gray-600 mb-2 flex flex-col sm:flex-row sm:items-center gap-1">
              <span>{exp.company}</span>
              <span className="hidden sm:inline"> | </span>
              <span>{exp.duration}</span>
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
