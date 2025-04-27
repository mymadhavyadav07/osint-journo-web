import React from 'react';
import { Twitter, Linkedin, Github as GitHub, Mail, ExternalLink, MessageSquare, Youtube} from 'lucide-react';
import { scrollToSection } from './Header';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4" style={{'marginLeft': '-0.5rem'}}>
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <img src="/images/osint_journo.png" alt="Description of Image" style={{'width': '2.5rem', 'height': '2.5rem'}} />
              </div>
              <span className="font-bold text-xl text-white">OSINT <span className="text-lime-500">JOURNO</span></span>
            </div>
            <p className="text-gray-400 mb-4">
              A community for OSINT investigators, journalists, and researchers dedicated to advancing open-source intelligence techniques.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/osint_journo" className="text-gray-400 hover:text-lime-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/osint-journo" className="text-gray-400 hover:text-lime-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://reddit.com/r/osint_journo" className="text-gray-400 hover:text-lime-500 transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="https://www.youtube.com/@osint_journo" className="text-gray-400 hover:text-lime-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-white font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-lime-500 transition-colors">Home</a></li>
              <li><a onClick={() => scrollToSection('resources')} className="text-gray-400 hover:text-lime-500 transition-colors">Resources</a></li>
              <li><a onClick={() => scrollToSection('social')} className="text-gray-400 hover:text-lime-500 transition-colors">Community</a></li>
              <li><a onClick={() => scrollToSection('opensource')} className="text-gray-400 hover:text-lime-500 transition-colors">Open Source</a></li>
              <li><a onClick={() => scrollToSection('team')} className="text-gray-400 hover:text-lime-500 transition-colors">Team</a></li>
              {/* <li><a onClick={() => scrollToSection('news')} className="text-gray-400 hover:text-lime-500 transition-colors">News</a></li> */}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/shallvhack" className="text-gray-400 hover:text-lime-500 transition-colors inline-flex items-center">
                  OSINT Tools <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://reddit.com/r/osint_journo" className="text-gray-400 hover:text-lime-500 transition-colors inline-flex items-center">
                  Reddit Community <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <strong className="text-gray-300">Email:</strong> support@osintjourno.com
              </li>
              <li className="text-gray-400">
                <strong className="text-gray-300">Location:</strong> Global (Remote)
              </li>
              {/* <li>
                <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                  Submit a Tip
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                  Join Our Newsletter
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
        <p className="text-gray-500 text-sm">
            Made with <span>❤️</span> in India.
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} OSINT JOURNO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="#" className="text-gray-500 hover:text-lime-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-lime-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-lime-500 text-sm transition-colors">Disclosure Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;