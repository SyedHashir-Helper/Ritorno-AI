import React, { useState, useEffect } from 'react';
import { ChevronDown, Bot, Brain, Zap, Users, Mail, Phone, MapPin, Menu, X, ArrowRight, Cpu, Network, GitBranch, Send, Star, CheckCircle, Code, Database, Layers, Sparkles, Target, TrendingUp } from 'lucide-react';
import ContactForm from '../components/ContactForm'; 
import logo from "../assets/ritorno-i.png"

const RitornoLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI Strategy & Consulting",
      description: "Transform your business vision into actionable AI strategies. From ideation to implementation, we guide you through the AI transformation journey with expert consulting.",
      features: ["AI Readiness Assessment", "Strategic Roadmapping", "ROI Analysis & Planning"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "Intelligent Automation",
      description: "Deploy sophisticated AI agents that automate complex workflows, make intelligent decisions, and continuously learn from your business processes.",
      features: ["Process Automation", "Decision Intelligence", "Adaptive Learning Systems"],
      gradient: "from-green-600 to-blue-600"
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Custom AI Development",
      description: "Build bespoke AI solutions tailored to your unique challenges. From machine learning models to neural networks that drive real business value.",
      features: ["Machine Learning Models", "Neural Network Architecture", "Custom AI Algorithms"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "AI Data Engineering",
      description: "Optimize your data infrastructure for AI. Clean, process, and structure your data to unlock powerful insights and enable intelligent decision-making.",
      features: ["Data Pipeline Automation", "Intelligent Data Processing", "AI-Ready Data Architecture"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Generative AI Solutions", 
      description: "Harness the power of generative AI to create content, automate communications, and enhance creativity across your organization.",
      features: ["Content Generation", "Document Automation", "Creative AI Applications"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "AI Performance Optimization",
      description: "Maximize your AI investments with continuous monitoring, optimization, and scaling strategies that ensure peak performance.",
      features: ["Performance Monitoring", "Model Optimization", "Scalability Solutions"],
      gradient: "from-green-600 to-teal-600"
    }
  ];

  const projects = [
    {
      title: "Intelligent Document Processing System",
      description: "Advanced AI solution that processes thousands of documents daily with 99.4% accuracy. Automatically extracts, categorizes, and routes information while learning from user feedback to continuously improve performance.",
      category: "Document AI",
      tech: ["Transformer Models", "OCR Technology", "Natural Language Processing"],
      impact: "94% time reduction",
      status: "Production Ready",
      metrics: "Processing 10K+ docs/day"
    },
    {
      title: "AI-Powered Customer Intelligence Platform",
      description: "Multi-channel AI system that analyzes customer interactions, predicts behavior, and provides personalized recommendations. Integrates seamlessly with existing CRM systems.",
      category: "Customer AI",
      tech: ["Predictive Analytics", "Sentiment Analysis", "Recommendation Engine"],
      impact: "47% satisfaction increase",
      status: "Live Deployment",
      metrics: "Serving 50K+ customers"
    },
    {
      title: "Automated Content Generation Engine",
      description: "Enterprise-grade generative AI platform that creates marketing content, technical documentation, and personalized communications while maintaining brand consistency and quality.",
      category: "Generative AI",
      tech: ["Large Language Models", "Brand Training", "Quality Assurance AI"],
      impact: "78% faster content creation",
      status: "Enterprise Scale",
      metrics: "1M+ pieces generated"
    },
    {
      title: "Predictive Maintenance AI System",
      description: "IoT-integrated AI solution that predicts equipment failures before they occur, optimizes maintenance schedules, and reduces operational downtime through intelligent monitoring.",
      category: "Industrial AI",
      tech: ["Time Series Analysis", "IoT Integration", "Anomaly Detection"],
      impact: "89% downtime reduction",
      status: "Multi-Site Deployment",
      metrics: "Monitoring 500+ assets"
    }
  ];

  const stats = [
    { number: "25+", label: "AI Solutions Delivered", icon: <Target className="w-5 h-5" /> },
    { number: "99.4%", label: "Average Model Accuracy", icon: <Brain className="w-5 h-5" /> },
    { number: "89%", label: "Process Efficiency Gain", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "24/7", label: "AI System Monitoring", icon: <Cpu className="w-5 h-5" /> }
  ];

  const aiCapabilities = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision & Image Recognition",
    "Predictive Analytics & Forecasting",
    "Intelligent Process Automation",
    "Conversational AI & Chatbots"
  ];

  const FloatingAIElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circuit pattern elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-blue-400 opacity-20">
        <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-1 left-1"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full absolute bottom-1 right-1"></div>
        <div className="absolute top-2 left-2 w-4 h-0.5 bg-blue-400"></div>
      </div>
      <div className="absolute top-1/3 right-20 w-12 h-12 border border-purple-400 opacity-15 rotate-45">
        <div className="w-full h-0.5 bg-purple-400 absolute top-1/2 transform -translate-y-1/2"></div>
        <div className="w-0.5 h-full bg-purple-400 absolute left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-6 h-6 border-2 border-green-400 rounded-full opacity-25">
        <div className="w-2 h-2 bg-green-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-60 h-70 flex items-center justify-start">
                <img src={logo} alt="Ritorno Logo" className="h-60" />
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-semibold relative py-2 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0'
                  }`}></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-2">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-20 overflow-hidden min-h-screen flex items-center">
        <FloatingAIElements />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Innovation Studio
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Your AI</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Breakthrough Story
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  From challenges to breakthroughs. Ritorno transforms your business setbacks into AI-powered comebacks, 
                  delivering intelligent solutions that don't just recover—they revolutionize.
                </p>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  {aiCapabilities.slice(0, 4).map((capability, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg"
                  >
                    Start Your AI Journey
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-xl hover:bg-blue-50"
                  >
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-12">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-2xl flex items-center justify-center border border-gray-700 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  <div className="relative text-center space-y-6 z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">The Phoenix Effect</h3>
                      <p className="text-blue-200">Shatter. Reform. Dominate.</p>
                    </div>
                  </div>
                  {/* Circuit pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-8 left-8 w-16 h-16 border border-blue-400">
                      <div className="w-4 h-4 bg-blue-400 rounded-full absolute -top-2 -left-2"></div>
                      <div className="w-4 h-4 bg-blue-400 rounded-full absolute -bottom-2 -right-2"></div>
                    </div>
                    <div className="absolute bottom-8 right-8 w-20 h-20 border border-purple-400 rotate-45">
                      <div className="w-full h-0.5 bg-purple-400 absolute top-1/2"></div>
                      <div className="w-0.5 h-full bg-purple-400 absolute left-1/2"></div>
                    </div>
                  </div>
                </div>
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">99.4%</div>
                    <div className="text-xs text-gray-600">AI Accuracy</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">25+</div>
                    <div className="text-xs text-gray-600">AI Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-blue-600 mr-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              AI Solutions Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to deployment, we deliver end-to-end AI solutions that transform challenges into competitive advantages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg"
              >
                <div className={`text-white mb-6 p-3 bg-gradient-to-r ${service.gradient} rounded-xl w-fit`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Solutions in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations that demonstrate the transformative power of our AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                      {project.category}
                    </span>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="text-sm font-medium text-blue-700">Business Impact</div>
                      <div className="text-lg font-bold text-blue-600">{project.impact}</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                      <div className="text-sm font-medium text-purple-700">Scale</div>
                      <div className="text-sm font-bold text-purple-600">{project.metrics}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium border border-green-200 mb-6">
                <Users className="w-4 h-4 mr-2" />
                About Ritorno
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Turning Setbacks into AI Comebacks</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded by <strong className="text-blue-600">Syed Hashir Husnain</strong>, a recent AI graduate with a passion for transformation, 
                Ritorno embodies the phoenix philosophy: emerging stronger from challenges through intelligent innovation.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our approach combines cutting-edge AI technologies with deep business understanding. We don't just build AI solutions—we craft 
                intelligent systems that learn, adapt, and evolve with your business needs, turning your greatest challenges into competitive advantages.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'AI Strategy Development',
                  'Custom Model Training',
                  'Enterprise Integration', 
                  'Continuous Optimization'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8">The Phoenix Philosophy</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Shatter Limitations</h4>
                      <p className="text-gray-300 text-sm">Break down traditional barriers with AI innovation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Reform with Intelligence</h4>
                      <p className="text-gray-300 text-sm">Rebuild stronger with AI-powered solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Dominate Markets</h4>
                      <p className="text-gray-300 text-sm">Lead your industry with competitive AI advantages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Ritorno</span>
                <p className="text-sm text-gray-400">AI Innovation Studio</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                © 2025 Ritorno. All rights reserved.
              </p>
              <p className="text-blue-400 font-medium">
                Founded by Syed Hashir Husnain
              </p>
              <div className="flex space-x-6 mt-4 justify-center md:justify-end">
                <span className="text-sm text-gray-500 hover:text-blue-400 cursor-pointer">Privacy Policy</span>
                <span className="text-sm text-gray-500 hover:text-blue-400 cursor-pointer">Terms of Service</span>
                <span className="text-sm text-gray-500 hover:text-blue-400 cursor-pointer">AI Ethics</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RitornoLanding;