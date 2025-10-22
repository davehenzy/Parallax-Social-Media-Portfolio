
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://picsum.photos/seed/profile/500/600"
                alt="Ava Sterling, Social Media Manager"
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Hi, I'm Ava Sterling
            </h2>
            <p className="text-teal-400 text-lg font-semibold mb-6">
              Your Partner in Digital Storytelling
            </p>
            <p className="mb-4 text-slate-400">
              With over 8 years of experience in the dynamic world of social media, I specialize in crafting authentic narratives that resonate with audiences and build lasting brand loyalty. My approach is a blend of data-driven strategy and creative passion, ensuring every campaign not only looks great but also achieves measurable results.
            </p>
            <p className="mb-6 text-slate-400">
              I believe that at the heart of every successful brand is a community. My mission is to build and nurture that community for you, turning followers into advocates and clicks into customers.
            </p>
            <a
              href="#contact"
              className="inline-block bg-transparent border-2 border-teal-500 text-teal-500 font-bold py-3 px-8 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
