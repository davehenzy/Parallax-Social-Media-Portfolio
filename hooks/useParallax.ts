
import { useState, useEffect } from 'react';

export const useParallax = (speed: number) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (window.innerWidth > 768) { // Only apply parallax on larger screens
      setOffsetY(window.pageYOffset * speed);
    } else {
      setOffsetY(0); // Reset on smaller screens
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { transform: `translateY(${offsetY}px)` };
};
