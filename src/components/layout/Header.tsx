import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import Button from '../shared/Button';


export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80; // Adjust this if your header has a different height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 bg-grey-900 rounded-lg flex items-center justify-center">
              <img src="/images/osint_journo.png" alt="Description of Image" style={{'width': '2.5rem', 'height': '2.5rem'}} />
            </div>
            <span className="font-bold text-xl text-white">OSINT <span className="text-lime-500">JOURNO</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('resources')} className="text-gray-300 hover:text-lime-500 transition-colors">Resources</button>
            <button onClick={() => scrollToSection('social')} className="text-gray-300 hover:text-lime-500 transition-colors">Community</button>
            <button onClick={() => scrollToSection('opensource')} className="text-gray-300 hover:text-lime-500 transition-colors">Open Source</button>
            <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-lime-500 transition-colors">Team</button>
            {/* <button onClick={() => scrollToSection('news')} className="text-gray-300 hover:text-lime-500 transition-colors">News</button> */}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="text-gray-300 hover:text-lime-500 transition-colors">
              <Search size={20} />
            </button> */}
            {/* <Button href="/#" variant="secondary" size="sm" > 
              <User size={16} className="mr-2" />
              Sign In
            </Button> */}
            <Button href="https://reddit.com/r/osint_journo" target="_blank" variant="primary" size="sm">Join Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-lime-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('resources')} className="block w-full text-left text-gray-300 hover:text-lime-500 transition-colors py-2">Resources</button>
            <button onClick={() => scrollToSection('social')} className="block w-full text-left text-gray-300 hover:text-lime-500 transition-colors py-2">Community</button>
            <button onClick={() => scrollToSection('opensource')} className="block w-full text-left text-gray-300 hover:text-lime-500 transition-colors py-2">Open Source</button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left text-gray-300 hover:text-lime-500 transition-colors py-2">Team</button>
            {/* <button onClick={() => scrollToSection('news')} className="block w-full text-left text-gray-300 hover:text-lime-500 transition-colors py-2">News</button> */}
            <div className="flex space-x-4 pt-2">
              <Button href="/signin" variant="secondary" size="sm" className="flex-1">Sign In</Button>
              <Button href="https://reddit.com/r/osint_journo" target="_blank" variant="primary" size="sm" className="flex-1">Join Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
