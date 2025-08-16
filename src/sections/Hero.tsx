import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import NeuralNetwork from '../components/NeuralNetwork';
import MatrixRain from '../components/MatrixRain';
import Typewriter from '../components/Typewriter';
import FloatingParticles from '../components/FloatingParticles';
import GridTexture from '../components/GridTexture';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      <NeuralNetwork />
      <MatrixRain />
      <FloatingParticles />
      <GridTexture />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-gray-800/50 border rounded-full mb-6"
               style={{ borderColor: '#AD2831' }}>
            <span className="text-sm font-semibold" style={{ color: '#AD2831' }}>🚀 Next-Gen AI Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-none">
            <div className="h-20 md:h-auto">
              <Typewriter 
                text="REVOLUTIONIZING BUSINESSES WITH AI" 
                delay={100} 
                className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
              />
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your operations with <span className="font-semibold" style={{ color: '#AD2831' }}>autonomous AI agents</span>, 
            <span className="font-semibold" style={{ color: '#AD2831' }}> intelligent automation</span>, and 
            <span className="font-semibold" style={{ color: '#AD2831' }}> custom ML solutions</span> that scale infinitely.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <AnimatedCounter target={95} suffix="%" duration={2000} />
              <p className="text-gray-400 text-sm">Efficiency Boost</p>
            </div>
            <div className="text-center">
              <AnimatedCounter target={24} suffix="/7" duration={2000} />
              <p className="text-gray-400 text-sm">Autonomous Ops</p>
            </div>
            <div className="text-center">
              <AnimatedCounter target={300} suffix="%" duration={2000} />
              <p className="text-gray-400 text-sm">ROI Increase</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden text-white"
            style={{ background: '#AD2831' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#8B1A2B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#AD2831';
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              Get Started Now
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                 style={{ background: '#8B1A2B' }}></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center hover:transition-colors duration-300"
          aria-label="Scroll down"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#AD2831';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#4b5563';
          }}
        >
          <div className="w-1 h-3 rounded-full mt-2 animate-bounce" style={{ backgroundColor: '#AD2831' }}></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;