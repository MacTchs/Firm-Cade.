
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Instagram, Twitter, Home } from 'lucide-react';
import { categories } from '@/lib/data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-firmcade-navbar border-b border-gray-700 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-firmcade-primary text-2xl font-bold">Firm</span>
              <span className="text-firmcade-light text-2xl font-bold">Cade.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`category-link text-sm font-medium flex items-center ${isActive('/') ? 'text-firmcade-primary' : ''}`}
            >
              <Home size={16} className="mr-1.5" />
              Home
            </Link>
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.slug}`} 
                className={`category-link text-sm font-medium ${isActive(`/category/${category.slug}`) ? 'text-firmcade-primary' : ''}`}
              >
                {category.name}
              </Link>
            ))}
            <Link 
              to="/about" 
              className={`category-link text-sm font-medium ${isActive('/about') ? 'text-firmcade-primary' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`category-link text-sm font-medium ${isActive('/contact') ? 'text-firmcade-primary' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Search and Social */}
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#F5F5F5] text-gray-800 pl-3 pr-10 py-1.5 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-firmcade-primary w-48"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-1.5 text-gray-500 hover:text-firmcade-primary">
                <Search size={18} />
              </button>
            </form>
            <div className="flex space-x-4">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-firmcade-navbar">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`category-link flex items-center px-3 py-2 text-base font-medium ${isActive('/') ? 'text-firmcade-primary' : ''}`}
              onClick={toggleMenu}
            >
              <Home size={18} className="mr-2" />
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className={`category-link block px-3 py-2 text-base font-medium ${isActive(`/category/${category.slug}`) ? 'text-firmcade-primary' : ''}`}
                onClick={toggleMenu}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/about"
              className={`category-link block px-3 py-2 text-base font-medium ${isActive('/about') ? 'text-firmcade-primary' : ''}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`category-link block px-3 py-2 text-base font-medium ${isActive('/contact') ? 'text-firmcade-primary' : ''}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>

          <div className="px-4 py-3 border-t border-gray-700">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-[#F5F5F5] text-gray-800 px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-firmcade-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-firmcade-primary px-4 py-2 rounded-r-md"
              >
                <Search size={18} className="text-white" />
              </button>
            </form>

            <div className="mt-4 flex space-x-6">
              <a
                href="https://www.instagram.com/firmcade?igsh=bGg5cWNhOGZwaTJu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-firmcade-primary transition-colors flex items-center"
              >
                <Instagram size={20} />
                <span className="ml-2">Instagram</span>
              </a>
              <a
                href="https://x.com/FirmCade?t=TsVkQ2tBUInhcON-8b2hWg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-firmcade-primary transition-colors flex items-center"
              >
                <Twitter size={20} />
                <span className="ml-2">X / Twitter</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
