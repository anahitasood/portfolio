import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(null); // null, 'success', or 'error'

  const clearForm = () => {
    if (form.current) {
      form.current.reset();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_es6nl1h', 'template_yrzj56s', form.current, '-vD2HI2Jjsc9ZLMfO')
      .then(() => {
        setSent('success');
        clearForm();
      }, () => {
        setSent('error');
      });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">Contact Me</h2>
      <div className="max-w-xl mx-auto mb-8 flex flex-col items-center gap-2">
        <div className="text-lg text-secondary">
          <span className="font-semibold">Email:</span> <a href="mailto:soodanahita@example.com" className="text-secondary underline">soodanahita@example.com</a>
        </div>
        <div className="text-lg text-secondary">
          <span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/anahita-sood-93b6061a9/" target="_blank" rel="noopener noreferrer" className="text-secondary underline">linkedin.com/in/anahitasood</a>
        </div>
        <div className="text-lg text-secondary">
          <span className="font-semibold">Phone:</span> <a href="tel:+917018499490" className="text-secondary underline">+91 70184-99490</a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4 bg-white/80 rounded-lg shadow-lg p-6 border-2 border-primary">
        <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" required />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" required />
        <textarea name="message" placeholder="Message" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" rows="4" required></textarea>
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition">Send</button>
        {sent === 'success' && <p className="text-green-600 mt-2">Message sent successfully!I will reach out to you shortly.</p>}
        {sent === 'error' && <p className="text-red-600 mt-2">Failed to send message. Please try again.</p>}
      </form>
    </section>
  );
}

export default Contact;
