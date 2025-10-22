
import React from 'react';
import { useParallax } from '../hooks/useParallax';

const HeroSection: React.FC = () => {
  // Parallax hooks for different layers
  const backgroundParallax = useParallax(0.5);
  const headingParallax = useParallax(-0.15); // Moves up slowly
  const subheadingParallax = useParallax(-0.25); // Moves up a bit faster

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/hero/1920/1080')`,
          filter: 'brightness(0.4)',
          // Combine parallax translation with a slight zoom effect
          transform: `${backgroundParallax.transform} scale(1.1)`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Foreground Content Layer */}
      <div className="relative z-20 px-4 text-white">
        {/* Applying parallax to a wrapper div for the heading */}
        <div style={headingParallax}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
            Elevating Brands in the Digital Sphere
          </h1>
        </div>
        {/* Applying parallax to a wrapper div for the subheading */}
        <div style={subheadingParallax}>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            Strategic Social Media Management That Drives Engagement & Growth
          </p>
        </div>
        {/* Applying same parallax as subheading to the button for consistency */}
        <div style={subheadingParallax}>
          <a
            href="#portfolio"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
