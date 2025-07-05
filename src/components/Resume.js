import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-16 px-4 bg-background min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">My Resume</h2>
      <div className="w-full max-w-3xl mb-6 rounded-lg overflow-hidden shadow-lg border-2 border-accent bg-white">
        <iframe
          src="/AnahitaSood_Resume.pdf"
          title="Anahita Sood Resume"
          className="w-full h-[60vh] md:h-[80vh]"
        />
      </div>
      <a
        href="/AnahitaSood_Resume.pdf"
        download
        className="inline-block px-8 py-3 bg-primary text-surface font-semibold rounded shadow hover:bg-accent transition"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
