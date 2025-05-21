
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-firmcade-navbar text-firmcade-light py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 md:text-5xl">About FirmCade</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted source for the latest news in Technology, Business, startups, AI Innovation and Engines
            </p>
          </div>
        </div>
        
        {/* About Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              At FirmCade, we're dedicated to delivering timely, accurate, and insightful news covering the rapidly evolving worlds of technology, business, startups, and artificial intelligence. Our mission is to keep our readers informed about the latest developments, trends, and innovations that are shaping our digital future.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-8">
              We believe in journalism that is both accessible and comprehensive. Our team of experienced writers and industry experts work tirelessly to break down complex topics into clear, engaging stories that inform and inspire. Whether you're a tech enthusiast, business professional, entrepreneur, or simply curious about the future of technology, FirmCade provides the insights you need to stay ahead.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">What We Cover</h2>
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-firmcade-primary">Technology</h3>
                <p className="text-gray-700">
                  From breakthrough innovations to everyday tech that impacts our lives, we cover the full spectrum of technological development across hardware, software, and digital services.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-firmcade-primary">Business</h3>
                <p className="text-gray-700">
                  We analyze market trends, corporate strategies, and economic factors that drive the business world, with special attention to how technology is transforming industries.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-firmcade-primary">Startups</h3>
                <p className="text-gray-700">
                  Discover the next generation of innovative companies as we spotlight promising startups, funding news, and the entrepreneurial ecosystem that supports them.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-firmcade-primary">AI</h3>
                <p className="text-gray-700">
                  Our dedicated AI coverage explores advances in machine learning, neural networks, robotics, and how artificial intelligence is revolutionizing every aspect of our world.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-firmcade-primary">Engines</h3>
                <p className="text-gray-700">
                  Discover more as we drive through Vehicles & Auto-Mobiles.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-700 mb-6">
              FirmCade is more than just a news site—we're building a community of forward-thinking individuals passionate about technology and innovation. Follow us on social media, subscribe to our newsletter, and join the conversation as we explore the exciting developments shaping our future.
            </p>
            
            <div className="flex justify-center mt-12">
              <a 
                href="/contact" 
                className="bg-firmcade-primary text-white px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
