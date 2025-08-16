// About.tsx
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import sideImg from "../assets/image.png"

const About = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'mission' | 'vision'>('about');

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900/10 to-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gray-800/50 border rounded-full mb-6"
               style={{ borderColor: '#AD2831' }}>
            <span className="text-sm font-semibold" style={{ color: '#AD2831' }}>👨‍💻 Leadership</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
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
            >
              About
            </TabButton>
            <TabButton
              active={activeTab === 'mission'}
              onClick={() => setActiveTab('mission')}
            >
              Mission
            </TabButton>
            <TabButton
              active={activeTab === 'vision'}
              onClick={() => setActiveTab('vision')}
            >
              Vision
            </TabButton>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"
                 style={{ backgroundColor: 'rgba(173, 40, 49, 0.2)' }}></div>
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl overflow-hidden border-2 border-gray-700 group-hover:border-opacity-50 transition-all duration-300"
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#AD2831';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#374151';
                   }}>
                <img
                  src={sideImg}
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {activeTab === 'about' && (
              <>
                <div className="group">
                  <h3 className="text-2xl font-bold mb-4 group-hover:opacity-80 transition-colors"
                      style={{ color: '#AD2831' }}>
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
                  <h3 className="text-2xl font-bold mb-4 group-hover:opacity-80 transition-colors"
                      style={{ color: '#AD2831' }}>
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
  onClick
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
      active 
        ? 'text-white' 
        : 'text-gray-400 hover:text-white'
    }`}
    style={active ? { backgroundColor: '#AD2831' } : {}}
  >
    {children}
  </button>
);

const MissionTab = () => (
  <div className="p-8 bg-gray-900/50 rounded-2xl border transition-all duration-300"
       style={{ borderColor: '#AD2831' }}>
    <h3 className="text-3xl font-bold mb-6" style={{ color: '#AD2831' }}>Our Mission</h3>
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
    <div className="flex-shrink-0 mt-1 mr-4" style={{ color: '#AD2831' }}>
      <ChevronRight className="w-5 h-5" />
    </div>
    <p className="text-gray-300">{children}</p>
  </li>
);

const VisionTab = () => (
  <div className="p-8 bg-gray-900/50 rounded-2xl border transition-all duration-300"
       style={{ borderColor: '#AD2831' }}>
    <h3 className="text-3xl font-bold mb-6" style={{ color: '#AD2831' }}>Our Vision</h3>
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
    <div className="flex-shrink-0 mt-1 mr-4" style={{ color: '#AD2831' }}>
      <ChevronRight className="w-5 h-5" />
    </div>
    <p className="text-gray-300">{children}</p>
  </li>
);

export default About;