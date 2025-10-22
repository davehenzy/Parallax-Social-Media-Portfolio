
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-facebook-f', href: '#' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-slate-400 hover:text-teal-400 text-xl transition-colors duration-300">
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Ava Sterling. All Rights Reserved.</p>
        <p className="text-sm mt-2">Designed with <i className="fa-solid fa-heart text-teal-500"></i> using React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
