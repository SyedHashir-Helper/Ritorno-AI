import { useState } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import logo from "../assets/r-logo.png"
import NavLink from '../components/NavLink';

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
            <div className="relative w-15 h-10 rounded-xl flex items-center justify-center group">
              <img src={logo}/>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
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
            <NavLink href="/">Portfolio</NavLink>
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
          {['Home', 'Services', 'About', 'Why Choose Us', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="block text-gray-300 hover:text-white transition-colors py-2 text-left w-full"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#AD2831';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#d1d5db';
              }}
            >
              {item}
            </button>
          ))}
          <NavLink href="https://portfolio.ritornoai.com/">Portfolio</NavLink>
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
      className={`text-gray-300 hover:text-white transition-all duration-300 relative group px-2 py-1 ${
        activeSection === id ? '' : ''
      }`}
      style={activeSection === id ? { color: '#AD2831' } : {}}
      onMouseEnter={(e) => {
        if (activeSection !== id) {
          e.currentTarget.style.color = '#AD2831';
        }
      }}
      onMouseLeave={(e) => {
        if (activeSection !== id) {
          e.currentTarget.style.color = '#d1d5db';
        }
      }}
    >
      {displayName}
      <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
        activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
      }`}
      style={{ backgroundColor: '#AD2831' }}></span>
    </button>
  );
};

export default Navbar;
