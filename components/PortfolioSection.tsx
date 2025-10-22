
import React from 'react';
import type { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  {
    image: 'https://picsum.photos/seed/work1/600/400',
    title: 'E-commerce Fashion Launch',
    client: 'Stylo Chic Boutique',
    description: 'Managed a full-funnel social media campaign for a new clothing line, from pre-launch buzz to post-launch sales.',
    metric: '400% ROI on Ad Spend'
  },
  {
    image: 'https://picsum.photos/seed/work2/600/400',
    title: 'Tech Startup Brand Awareness',
    client: 'InnovateIO',
    description: 'Grew organic reach and established thought leadership in the SaaS space through targeted content on LinkedIn and Twitter.',
    metric: '+350% Follower Growth'
  },
  {
    image: 'https://picsum.photos/seed/work3/600/400',
    title: 'Local Restaurant Engagement',
    client: 'The Gourmet Nook',
    description: ' revitalized their Instagram presence with mouth-watering food photography and community-driven contests.',
    metric: '75% Increase in Engagement'
  },
  {
    image: 'https://picsum.photos/seed/work4/600/400',
    title: 'Wellness App User Acquisition',
    client: 'Mindful Moments',
    description: 'Ran a successful influencer marketing campaign coupled with targeted Facebook ads to drive app downloads.',
    metric: '50,000+ App Installs'
  }
];

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-slate-800">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
            <p className="text-sm font-medium text-teal-300 mb-2">{item.client}</p>
            <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                <p className="text-slate-300 mb-3">{item.description}</p>
                <span className="bg-teal-500/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full">{item.metric}</span>
            </div>
        </div>
    </div>
);


const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Success Stories</h2>
          <p className="text-lg text-slate-400 mt-2">A glimpse into campaigns I've managed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
