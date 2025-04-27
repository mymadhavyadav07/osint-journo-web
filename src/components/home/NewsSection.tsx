import React from 'react';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import Button from '../shared/Button';
import { newsItems } from '../../constants';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Latest <span className="text-lime-500">News</span> & Updates
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Stay informed with the latest developments in the world of open-source intelligence.
            </p>
          </div>
          
          <Button variant="secondary" className="mt-4 md:mt-0">
            All News <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div 
              key={news.id} 
              className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-lime-500/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Calendar size={12} className="mr-1" />
                  {news.date}
                  <span className="mx-2">•</span>
                  <span className="text-gray-400">{news.source}</span>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-3">{news.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{news.summary}</p>
                
                <a 
                  href={news.link} 
                  className="inline-flex items-center text-lime-500 hover:text-lime-400 transition-colors text-sm font-medium"
                >
                  Read More <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16 bg-gray-800 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-transparent to-transparent"></div>
          
          <div className="relative z-10 p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400 max-w-xl">
                  Receive the latest OSINT news, case studies, and resources directly in your inbox.
                  We respect your privacy and will never share your information.
                </p>
              </div>
              
              <div className="w-full md:w-auto">
                <div className="flex flex-col sm:flex-row">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full sm:w-64 px-4 py-2 bg-gray-900 border border-gray-700 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 rounded-md mb-3 sm:mb-0 sm:mr-3 text-white outline-none"
                  />
                  <Button variant="primary">Subscribe</Button>
                </div>
                <p className="text-gray-500 text-xs mt-3">
                  By subscribing, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NewsSection;