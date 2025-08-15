import { ChevronRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900/30 via-black to-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-cyan-400/10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent leading-tight">
          BUILD YOUR AI-POWERED
          <br />
          FUTURE TODAY
        </h2>
        <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Ready to <span className="text-green-400 font-semibold">10X your efficiency</span>, 
          <span className="text-cyan-400 font-semibold"> automate complex workflows</span>, and 
          <span className="text-orange-400 font-semibold"> unlock unprecedented insights</span>?
        </p>
        
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 px-16 py-6 rounded-2xl font-black text-xl text-black transition-all duration-300 transform hover:scale-110 overflow-hidden shadow-2xl hover:shadow-orange-500/25"
        >
          <span className="relative z-10 flex items-center">
            Schedule Strategic Call
            <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse opacity-20"></div>
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;