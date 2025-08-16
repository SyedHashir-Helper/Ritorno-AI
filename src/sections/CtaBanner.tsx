import { ChevronRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900/30 via-black to-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
           style={{ 
             background: `radial-gradient(circle at center, rgba(173, 40, 49, 0.1) 0%, transparent 50%, rgba(173, 40, 49, 0.1) 100%)`
           }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
          BUILD YOUR AI-POWERED
          <br />
          FUTURE TODAY
        </h2>
        <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Ready to <span className="font-semibold" style={{ color: '#AD2831' }}>10X your efficiency</span>, 
          <span className="font-semibold" style={{ color: '#AD2831' }}> automate complex workflows</span>, and 
          <span className="font-semibold" style={{ color: '#AD2831' }}> unlock unprecedented insights</span>?
        </p>
        
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-16 py-6 rounded-2xl font-black text-xl text-white transition-all duration-300 transform hover:scale-110 overflow-hidden shadow-2xl"
          style={{ 
            background: '#AD2831',
            boxShadow: '0 25px 50px rgba(173, 40, 49, 0.25)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#8B1A2B';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#AD2831';
          }}
        >
          <span className="relative z-10 flex items-center">
            Schedule Strategic Call
            <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
          
          <div className="absolute inset-0 rounded-2xl animate-pulse opacity-20"
               style={{ background: '#AD2831' }}></div>
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;