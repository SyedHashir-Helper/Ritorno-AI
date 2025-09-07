import { ChevronRight, Bot, Cpu, Database, Network, Globe, Smartphone, Camera, Monitor } from 'lucide-react';
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
      description: "We design and implement revolutionary workflow automation that converts manual tasks into intelligent, self-operating systems.",
      stats: "95% efficiency boost"
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "AI Agents",
      subtitle: "LangGraph & n8n",
      description: "Our autonomous AI agents are engineered to think, decide, and act with human-like reasoning to manage complex workflows.",
      stats: "24/7 autonomous ops"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "ML/DL Solutions",
      subtitle: "Custom Models",
      description: "We develop cutting-edge machine learning models that are trained on your specific business data to address your unique challenges.",
      stats: "99.7% accuracy"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Intelligence",
      subtitle: "Advanced Analytics",
      description: "We transform your raw data into strategic insights using AI-powered analytics and predictive intelligence to inform your business decisions.",
      stats: "Real-time insights"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web Development",
      subtitle: "React & Node.js",
      description: "We build modern, responsive, and scalable web applications tailored to your business needs.",
      stats: "Global reach"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "App Development",
      subtitle: "iOS & Android",
      description: "We create beautiful and intuitive mobile applications for both iOS and Android platforms.",
      stats: "Cross-platform"
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Computer Vision",
      subtitle: "OpenCV & YOLO",
      description: "We develop custom computer vision solutions for image and video analysis.",
      stats: "Pixel-perfect"
    },
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Desktop App",
      subtitle: "Electron & Tauri",
      description: "We build cross-platform desktop applications with native performance and modern UI.",
      stats: "Native experience"
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
            Our Services
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            We provide a suite of advanced AI solutions, including intelligent automation, autonomous agents, and predictive analytics, to help businesses innovate and grow.
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