import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser'; // Uncomment after installing

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  // Uncomment and configure after installing emailjs
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
  //     .then(() => setSent(true), () => setSent(false));
  // };

  return (
    <section id="contact" className="py-16 px-4 bg-white min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact</h2>
      <div className="max-w-xl mx-auto mb-8 flex flex-col items-center gap-2">
        <div className="text-lg">
          <span className="font-semibold">Email:</span> <a href="mailto:your.email@example.com" className="text-primary">your.email@example.com</a>
        </div>
        <div className="text-lg">
          <span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary">linkedin.com/in/yourprofile</a>
        </div>
        <div className="text-lg">
          <span className="font-semibold">Phone:</span> <a href="tel:+1234567890" className="text-primary">+1 234 567 890</a>
        </div>
      </div>
      {/* <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4"> */}
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" name="user_name" placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="email" name="user_email" placeholder="Email" className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" rows="4" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send</button>
        {/* {sent && <p className="text-green-600 mt-2">Message sent!</p>} */}
      </form>
    </section>
  );
}

export default Contact;
