
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Let's Create Something Amazing</h2>
          <p className="text-lg text-slate-400 mt-2">Have a project in mind? I'd love to hear about it.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" rows={5} placeholder="Your Message" className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
