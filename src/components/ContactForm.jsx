import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Shield } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call - replace with actual EmailJS or API integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you for your message! Our AI team will respond within 24 hours.' 
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact us directly.' 
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Start Your AI Transformation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Your AI Comeback?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how AI can transform your challenges into competitive advantages. 
            Our expert team is ready to architect your intelligent future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking to automate processes, implement intelligent analytics, or build custom AI solutions, 
                we're here to guide your transformation journey from concept to deployment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <p className="text-gray-300">contact@ritorno.com</p>
                  <p className="text-sm text-gray-400">AI solutions inquiries</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Phone</h4>
                  <p className="text-gray-300">+92 (300) 123-4567</p>
                  <p className="text-sm text-gray-400">Direct consultation line</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Global Services</h4>
                  <p className="text-gray-300">Remote & On-site Worldwide</p>
                  <p className="text-sm text-gray-400">Based in Pakistan, serving globally</p>
                </div>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">Why Choose Our AI Solutions?</h4>
              <div className="space-y-3">
                {[
                  { icon: <Clock className="w-4 h-4" />, text: "24-48 hour response time" },
                  { icon: <Shield className="w-4 h-4" />, text: "Enterprise-grade security" },
                  { icon: <MessageSquare className="w-4 h-4" />, text: "Free initial AI consultation" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Start Your AI Journey</h3>
              
              {submitStatus && (
                <div className={`p-4 rounded-xl border ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 border-green-500/30 text-green-300' 
                    : 'bg-red-500/20 border-red-500/30 text-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name (optional)"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your AI needs, challenges, or project requirements..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-4 font-semibold text-lg rounded-xl shadow-lg transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin mr-3"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-3 w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-400 text-center">
                🤖 Powered by AI-driven communication systems. We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Begin Your AI Transformation?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the ranks of forward-thinking businesses that have transformed their operations with our AI solutions. 
              From startups to enterprises, we've helped organizations achieve remarkable results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">1-2 Weeks</div>
                <div className="text-sm text-gray-400">Rapid prototyping</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">System monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">99.4%</div>
                <div className="text-sm text-gray-400">Solution accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;