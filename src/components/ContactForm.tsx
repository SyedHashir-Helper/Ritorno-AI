import { useState } from 'react';
import { Mail, MapPin, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/useToast';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.ritornoai.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: 'We will get back to you within 24 hours.',
          status: 'success'
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error sending your message. Please try again later.',
        status: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-6 py-4 bg-gray-900/50 border ${
              errors.name ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
            } rounded-xl focus:border-green-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 group-hover:bg-gray-800/50`}
          />
          {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
        </div>
        
        <div className="group">
          <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={`w-full px-6 py-4 bg-gray-900/50 border ${
              errors.email ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
            } rounded-xl focus:border-green-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 group-hover:bg-gray-800/50`}
          />
          {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
        </div>
        
        <div className="group">
          <label htmlFor="company" className="block text-gray-400 text-sm mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Inc."
            className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 hover:border-gray-600 rounded-xl focus:border-green-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 group-hover:bg-gray-800/50"
          />
        </div>
        
        <div className="group">
          <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us about your AI automation needs and goals..."
            className={`w-full px-6 py-4 bg-gray-900/50 border ${
              errors.message ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
            } rounded-xl focus:border-green-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none group-hover:bg-gray-800/50`}
          ></textarea>
          {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
      
      <div className="space-y-8">
        <div className="group p-8 bg-gray-900/30 border border-gray-800 rounded-2xl hover:border-green-400/30 transition-all duration-300">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-400">Get a response within 2 hours</p>
            </div>
          </div>
          <a 
            href="mailto:contact@ritornoai.com" 
            className="text-green-400 text-lg font-semibold hover:text-green-300 transition-colors"
          >
            contact@ritornoai.com
          </a>
        </div>
        
        <div className="group p-8 bg-gray-900/30 border border-gray-800 rounded-2xl hover:border-cyan-400/30 transition-all duration-300">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
              <p className="text-gray-400">Serving clients worldwide</p>
            </div>
          </div>
          <p className="text-cyan-400 text-lg font-semibold">Remote & On-site Services</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
            <div className="text-2xl font-bold text-green-400 mb-1">2H</div>
            <div className="text-gray-400 text-sm">Response Time</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
            <div className="text-2xl font-bold text-cyan-400 mb-1">100+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;