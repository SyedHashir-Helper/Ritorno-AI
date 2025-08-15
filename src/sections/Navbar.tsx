import { useState } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-gray-800/50 z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-xl flex items-center justify-center group">
              {/* <Bot className="w-6 h-6 text-black group-hover:scale-110 transition-transform duration-300" /> */}
              <img src={logo}/>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              RITORNO AI
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'services', 'about', 'why-ai', 'testimonials', 'contact'].map((id) => (
              <NavItem 
                key={id}
                id={id}
                activeSection={activeSection}
                onClick={scrollToSection}
              />
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-3 rotate-45' : 'top-1'}`}></span>
              <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800/50 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="container mx-auto px-6 py-6 space-y-4">
          {['Home', 'Services', 'About', 'Why AI', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="block text-gray-300 hover:text-green-400 transition-colors py-2 text-left w-full"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ id, activeSection, onClick }: { id: string, activeSection: string, onClick: (id: string) => void }) => {
  const displayName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <button
      onClick={() => onClick(id)}
      className={`text-gray-300 hover:text-green-400 transition-all duration-300 relative group px-2 py-1 ${
        activeSection === id ? 'text-green-400' : ''
      }`}
    >
      {displayName}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 ${
        activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </button>
  );
};

export default Navbar;