import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.substring(1);
    
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={handleLinkClick} className="text-2xl font-bold text-white tracking-wider cursor-pointer">
          <i className="fa-solid fa-wind mr-2 text-teal-400"></i>
          Ava Sterling
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 font-medium cursor-pointer">
              {link.label}
            </a>
          ))}
        </nav>
         <button className="md:hidden text-white">
            <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
