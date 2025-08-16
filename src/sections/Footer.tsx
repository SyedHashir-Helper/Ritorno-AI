import logo from "../assets/r-logo.png"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-15 h-10 rounded-xl flex items-center justify-center group">
                <img src={logo}/>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ritorno AI
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Pioneering the future of AI-powered business transformation through intelligent automation, 
              autonomous agents, and custom ML solutions.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <SocialIcon key={social} social={social} />
              ))}
            </div>
          </div>
          
          <FooterLinks 
            title="Services" 
            links={['AI Automation', 'AI Agents', 'ML/DL Solutions', 'Data Intelligence']} 
          />
          
          <FooterLinks 
            title="Company" 
            links={['About Us', 'Testimonials', 'Contact', 'Blog']} 
          />
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2025 Ritorno AI. All rights reserved.</p>
              <p className="text-sm">Founded by Syed Hashir Husnain</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ social }: { social: string }) => (
  <div 
    className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group"
    onClick={() => window.open(`https://${social.toLowerCase()}.com/ritornoai`, '_blank')}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(173, 40, 49, 0.2)';
      e.currentTarget.style.borderColor = '#AD2831';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#1f2937';
      e.currentTarget.style.borderColor = '#374151';
    }}
  >
    <span className="text-gray-400 group-hover:text-white text-sm font-semibold">{social[0]}</span>
  </div>
);

const FooterLinks = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <a 
            href={`#${link.toLowerCase().replace(' ', '-')}`} 
            className="text-gray-400 hover:text-white transition-colors"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#AD2831';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9ca3af';
            }}
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} 
     className="text-gray-400 hover:text-white transition-colors"
     onMouseEnter={(e) => {
       e.currentTarget.style.color = '#AD2831';
     }}
     onMouseLeave={(e) => {
       e.currentTarget.style.color = '#9ca3af';
     }}>
    {children}
  </a>
);

export default Footer;