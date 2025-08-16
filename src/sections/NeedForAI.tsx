import { ChevronRight } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const NeedForAI = () => {
  const benefits: Benefit[] = [
    {
      title: "Eliminate Repetitive Tasks",
      description: "Free your team from mundane work with AI automation handling repetitive processes 24/7",
      icon: "🔄"
    },
    {
      title: "Reduce Operational Costs",
      description: "Cut expenses by up to 70% by automating manual workflows and reducing human error",
      icon: "💰"
    },
    {
      title: "Scale Without Limits",
      description: "AI systems handle increasing workloads without proportional increases in costs",
      icon: "📈"
    },
    {
      title: "Data-Driven Decisions",
      description: "Get actionable insights from your data with AI-powered analytics and predictions",
      icon: "📊"
    }
  ];

  return (
    <section id="why-ai" className="py-24 bg-gradient-to-b from-black via-gray-900/10 to-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-800/50 border rounded-full mb-6"
               style={{ borderColor: '#AD2831' }}>
            <span className="text-sm font-semibold" style={{ color: '#AD2831' }}>🤖 AI Advantage</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            WHY YOUR BUSINESS NEEDS AI
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            The competitive landscape is shifting. Businesses not adopting AI will be left behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gray-900/70 rounded-xl border border-gray-800">
            <div className="px-6 py-4 bg-gray-900/70 rounded-lg">
              <p className="text-gray-300 text-lg">
                <span className="font-semibold" style={{ color: '#AD2831' }}>87% of CEOs</span> say AI is becoming essential to maintaining competitiveness (PwC 2024 AI Survey)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit, index }: { benefit: Benefit; index: number }) => (
  <div
    className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-opacity-50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
    style={{ animationDelay: `${index * 0.1}s` }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = '#AD2831';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = '#1f2937';
    }}
  >
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-gray-800/50 border flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300"
           style={{ borderColor: '#AD2831' }}>
        {benefit.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{benefit.description}</p>
      <div className="flex items-center font-semibold" style={{ color: '#AD2831' }}>
        Learn more <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

export default NeedForAI;