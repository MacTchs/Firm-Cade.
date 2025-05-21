
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formsubmit.co/firmcade@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          subject: 'New Newsletter Subscription',
          message: `New subscription from: ${email}`
        })
      });
      
      if (response.ok) {
        toast({
          title: "Success",
          description: "Thank you for subscribing!",
        });
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-firmcade-navbar text-firmcade-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <span className="text-firmcade-primary text-2xl font-bold">Firm</span>
              <span className="text-firmcade-light text-2xl font-bold">Cade</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Your trusted source for the latest news in technology, business, startups, and AI innovation.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.instagram.com/firmcade?igsh=bGg5cWNhOGZwaTJu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-firmcade-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://x.com/FirmCade?t=TsVkQ2tBUInhcON-8b2hWg&s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-firmcade-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/category/technology" className="text-gray-400 hover:text-firmcade-primary">Technology</Link>
              </li>
              <li>
                <Link to="/category/business" className="text-gray-400 hover:text-firmcade-primary">Business</Link>
              </li>
              <li>
                <Link to="/category/startups" className="text-gray-400 hover:text-firmcade-primary">Startups</Link>
              </li>
              <li>
                <Link to="/category/ai" className="text-gray-400 hover:text-firmcade-primary">AI</Link>
              </li>
              <li>
                <Link to="/category/latest" className="text-gray-400 hover:text-firmcade-primary">Latest News</Link>
              </li>
              <li>
                <Link to="/category/engines" className="text-gray-400 hover:text-firmcade-primary">Engines</Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-firmcade-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-firmcade-primary">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-l-md bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-firmcade-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-firmcade-primary px-4 py-2 font-medium text-white hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FirmCade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
