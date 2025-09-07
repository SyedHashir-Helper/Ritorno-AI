import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string; // Add className prop
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`group relative px-10 py-2 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden text-white ${className || ''}`}
      style={{ background: '#AD2831' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#8B1A2B';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#AD2831';
      }}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
           style={{ background: '#8B1A2B' }}></div>
    </a>
  );
};

export default NavLink;