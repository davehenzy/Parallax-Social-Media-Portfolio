
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Ava completely transformed our online presence. Her strategic approach led to a significant increase in engagement and a tangible impact on our sales. She's a true professional and a pleasure to work with.",
    author: 'Jessica Miller',
    company: 'CEO, Stylo Chic Boutique',
    image: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    quote: "Working with Ava was a game-changer for our startup. She understood our niche audience and created content that resonated deeply, establishing us as a credible voice in our industry. Highly recommended!",
    author: 'David Chen',
    company: 'Founder, InnovateIO',
    image: 'https://picsum.photos/seed/person2/100/100'
  },
   {
    quote: "We saw an immediate difference once Ava took over our social accounts. Our restaurant's online community has never been more active. She's creative, responsive, and truly cares about her clients' success.",
    author: 'Maria Rodriguez',
    company: 'Owner, The Gourmet Nook',
    image: 'https://picsum.photos/seed/person3/100/100'
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 flex flex-col items-center text-center">
        <img src={testimonial.image} alt={testimonial.author} className="w-24 h-24 rounded-full mb-6 border-4 border-slate-700" />
        <p className="text-slate-400 italic mb-6">"{testimonial.quote}"</p>
        <div>
            <h4 className="font-bold text-white text-lg">{testimonial.author}</h4>
            <p className="text-teal-400">{testimonial.company}</p>
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">What My Clients Say</h2>
          <p className="text-lg text-slate-400 mt-2">Building relationships is as important as building brands.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
