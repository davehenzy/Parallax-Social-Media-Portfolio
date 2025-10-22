
import React from 'react';
import type { Service } from '../types';

const services: Service[] = [
  {
    icon: 'fa-solid fa-pen-ruler',
    title: 'Content Strategy & Creation',
    description: 'Developing a cohesive content plan and creating high-quality, engaging posts, stories, and videos tailored to your brand voice.'
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Community Management',
    description: 'Actively engaging with your audience, responding to comments and messages, and fostering a positive and interactive online community.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Analytics & Reporting',
    description: 'Tracking key performance indicators (KPIs) and providing detailed monthly reports to measure success and refine strategies.'
  },
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Paid Advertising Campaigns',
    description: 'Designing and managing targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to maximize reach and ROI.'
  },
    {
    icon: 'fa-solid fa-handshake',
    title: 'Influencer Marketing',
    description: 'Identifying and collaborating with influencers to amplify your brand message and reach new, relevant audiences.'
  },
    {
    icon: 'fa-solid fa-comments',
    title: 'Brand Voice & Tone',
    description: 'Defining and maintaining a consistent and authentic brand personality across all social media channels.'
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700">
    <i className={`${service.icon} text-4xl text-teal-400 mb-6`}></i>
    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
    <p className="text-slate-400">{service.description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">My Expertise</h2>
          <p className="text-lg text-slate-400 mt-2">Services designed to make your brand shine online.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
