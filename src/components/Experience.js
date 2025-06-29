import React from 'react';
import { experienceData } from '../data/experience';

function Experience() {
  return (
<<<<<<< HEAD
    <section id="experience" className="py-12 px-4 bg-gray-50 min-h-[60vh]">
=======
    <section id="experience" className="py-16 px-4 bg-gray-50 min-h-[60vh]">
>>>>>>> eee604c
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {experienceData.map((exp, index) => (
          <div key={index} className="bg-accent rounded-lg shadow p-6 w-full md:w-auto">
            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
            <p className="text-gray-600 mb-2">{exp.company} | {exp.duration}</p>
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
