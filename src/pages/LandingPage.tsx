import Hero from '../sections/Hero';
import Navbar from '../sections/Navbar';
import Services from '../sections/Services';
import About from '../sections/About';
import NeedForAI from '../sections/NeedForAI';
import Testimonials from '../sections/Testimonials';
import CtaBanner from '../sections/CtaBanner';
import ContactForm from '../components/ContactForm';
import Footer from '../sections/Footer';
import ScrollToTop from '../components/ScrollToTop';

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <NeedForAI />
        <Testimonials />
        <CtaBanner />
        
        <section id="contact" className="py-24 bg-gradient-to-b from-black via-gray-900/10 to-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-gray-800/50 border border-cyan-400/30 rounded-full mb-6">
                <span className="text-cyan-400 text-sm font-semibold">📞 Let's Connect</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                GET IN TOUCH
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Ready to transform your business with AI? Let's discuss your unique challenges and opportunities.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;