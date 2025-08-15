import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'mission' | 'vision'>('about');

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900/10 to-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gray-800/50 border border-orange-400/30 rounded-full mb-6">
            <span className="text-orange-400 text-sm font-semibold">👨‍💻 Leadership</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            ABOUT US
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Learn about our vision, mission, and the team behind Ritorno AI
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/50 rounded-xl p-1 border border-gray-800">
            <TabButton 
              active={activeTab === 'about'}
              onClick={() => setActiveTab('about')}
              gradient="from-orange-500/20 to-yellow-500/20"
              textColor="text-orange-400"
            >
              About
            </TabButton>
            <TabButton 
              active={activeTab === 'mission'}
              onClick={() => setActiveTab('mission')}
              gradient="from-orange-500/20 to-yellow-500/20"
              textColor="text-orange-400"
            >
              Mission
            </TabButton>
            <TabButton 
              active={activeTab === 'vision'}
              onClick={() => setActiveTab('vision')}
              gradient="from-orange-500/20 to-yellow-500/20"
              textColor="text-orange-400"
            >
              Vision
            </TabButton>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl flex items-center justify-center border-2 border-gray-700 group-hover:border-green-400/50 transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl font-black text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2">
                    SH
                  </div>
                  <div className="text-lg text-gray-400">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {activeTab === 'about' && (
              <>
                <div className="group">
                  <h3 className="text-2xl font-bold mb-4 text-green-400 group-hover:text-green-300 transition-colors">
                    Syed Hashir Husnain - Founder
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    With 1.5+ years of hands-on experience in AI engineering, I've specialized in building 
                    intelligent automation systems and custom ML solutions. My expertise spans workflow automation, 
                    autonomous AI agents, and deploying production-grade machine learning models.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg mt-4">
                    I founded Ritorno AI to help businesses leverage these cutting-edge technologies to achieve 
                    operational excellence and sustainable growth.
                  </p>
                </div>
                
                <div className="group">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Ritorno AI - Innovation Hub
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Premier AI consultancy specializing in enterprise-grade automation, autonomous agents, and custom ML/DL solutions. 
                    We engineer intelligent systems that scale infinitely and adapt continuously to your evolving business needs.
                  </p>
                </div>
              </>
            )}

            {activeTab === 'mission' && <MissionTab />}
            {activeTab === 'vision' && <VisionTab />}
          </div>
        </div>
      </div>
    </section>
  );
};

const TabButton = ({ 
  children, 
  active, 
  onClick, 
  gradient, 
  textColor 
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void; 
  gradient: string; 
  textColor: string;
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
      active ? `${gradient} ${textColor}` : 'text-gray-400 hover:text-white'
    }`}
  >
    {children}
  </button>
);

const MissionTab = () => (
  <div className="p-8 bg-gray-900/50 rounded-2xl border border-orange-400/30 transition-all duration-300">
    <h3 className="text-3xl font-bold text-orange-400 mb-6">Our Mission</h3>
    <p className="text-gray-300 leading-relaxed text-lg mb-6">
      To democratize advanced AI technology, making intelligent automation accessible to businesses 
      of all sizes while driving unprecedented efficiency and innovation.
    </p>
    <ul className="space-y-4">
      <MissionItem>Make AI solutions affordable and accessible</MissionItem>
      <MissionItem>Deliver measurable business impact</MissionItem>
      <MissionItem>Empower businesses with autonomous operations</MissionItem>
    </ul>
  </div>
);

const MissionItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 mt-1 mr-4 text-orange-400">
      <ChevronRight className="w-5 h-5" />
    </div>
    <p className="text-gray-300">{children}</p>
  </li>
);

const VisionTab = () => (
  <div className="p-8 bg-gray-900/50 rounded-2xl border border-yellow-400/30 transition-all duration-300">
    <h3 className="text-3xl font-bold text-yellow-400 mb-6">Our Vision</h3>
    <p className="text-gray-300 leading-relaxed text-lg mb-6">
      Pioneer the future of AI-powered business transformation, creating autonomous ecosystems 
      that amplify human potential and drive sustainable growth globally.
    </p>
    <ul className="space-y-4">
      <VisionItem>Create self-learning business ecosystems</VisionItem>
      <VisionItem>Develop AI that augments human capabilities</VisionItem>
      <VisionItem>Build sustainable AI solutions for global impact</VisionItem>
    </ul>
  </div>
);

const VisionItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 mt-1 mr-4 text-yellow-400">
      <ChevronRight className="w-5 h-5" />
    </div>
    <p className="text-gray-300">{children}</p>
  </li>
);

export default About;