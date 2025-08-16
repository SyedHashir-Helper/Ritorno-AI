import { ChevronRight, Bot, Cpu, Database, Network } from 'lucide-react';
import type { JSX } from 'react';

interface Service {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  stats: string;
}

const Services = () => {
  const services: Service[] = [
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Automation",
      subtitle: "n8n & make.com",
      description: "Revolutionary workflow automation that transforms manual processes into intelligent, self-executing systems.",
      stats: "95% efficiency boost"
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "AI Agents",
      subtitle: "LangGraph & n8n",
      description: "Autonomous AI agents that think, decide, and act with human-level reasoning across complex workflows.",
      stats: "24/7 autonomous ops"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "ML/DL Solutions",
      subtitle: "Custom Models",
      description: "Cutting-edge machine learning models trained specifically for your unique business challenges and data.",
      stats: "99.7% accuracy"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Intelligence",
      subtitle: "Advanced Analytics",
      description: "Transform raw data into strategic insights with AI-powered analytics and predictive intelligence.",
      stats: "Real-time insights"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-gray-900/20 to-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-800/50 border rounded-full mb-6"
               style={{ borderColor: '#AD2831' }}>
            <span className="text-sm font-semibold" style={{ color: '#AD2831' }}>💡 Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AI SERVICES
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI solutions that transform businesses through intelligent automation, 
            autonomous agents, and predictive analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
  <div
    className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-opacity-60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
    style={{ animationDelay: `${index * 0.1}s` }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = '#AD2831';
      e.currentTarget.style.backgroundColor = 'rgba(173, 40, 49, 0.05)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = '#1f2937';
      e.currentTarget.style.backgroundColor = 'rgba(17, 24, 39, 0.3)';
    }}
  >
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
    
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
           style={{ color: '#AD2831' }}>
        {service.icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
      <p className="text-gray-400 text-sm mb-4 font-semibold">{service.subtitle}</p>
      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
      
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm" style={{ color: '#AD2831' }}>{service.stats}</span>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-all duration-300"
                     style={{ color: '#AD2831' }} />
      </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
  </div>
);

export default Services;