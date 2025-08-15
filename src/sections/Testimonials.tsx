import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
  metric: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      rating: 5,
      text: "Ritorno AI's automation solutions revolutionized our operations. We achieved 75% cost reduction and 300% productivity increase within 6 months.",
      avatar: "SJ",
      metric: "75% cost reduction"
    },
    {
      name: "Michael Chen",
      company: "DataFlow Inc",
      role: "CEO",
      rating: 5,
      text: "The custom ML models delivered insights that transformed our decision-making process. ROI exceeded expectations by 400%.",
      avatar: "MC",
      metric: "400% ROI"
    },
    {
      name: "Emily Rodriguez",
      company: "Innovation Labs",
      role: "Head of AI",
      rating: 5,
      text: "Exceptional expertise in AI agents. The autonomous systems handle complex tasks flawlessly, operating 24/7 without supervision.",
      avatar: "ER",
      metric: "24/7 operations"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black via-gray-900/20 to-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-800/50 border border-yellow-400/30 rounded-full mb-6">
            <span className="text-yellow-400 text-sm font-semibold">⭐ Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            CLIENT RESULTS
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Real businesses, real transformations, real ROI through our AI solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => (
  <div
    className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative z-10">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-4">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
      
      <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg inline-block">
        <span className="text-green-400 font-bold text-sm">{testimonial.metric}</span>
      </div>
    </div>
  </div>
);

export default Testimonials;