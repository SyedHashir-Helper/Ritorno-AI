import { ArrowUp } from 'lucide-react';
import useScrollY from '../hooks/UseScrollY';

const ScrollToTop = () => {
  const scrollY = useScrollY();
  
  return (
    <button
      className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-40 ${
        scrollY > 500 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-black" />
    </button>
  );
};

export default ScrollToTop;