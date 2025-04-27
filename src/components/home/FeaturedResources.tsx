import React from 'react';
import { Link, ArrowRight, ExternalLink } from 'lucide-react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { resources } from '../../constants';

const FeaturedResources: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Essential <span className="text-lime-500">OSINT</span> Resources
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Discover our curated collection of tools, frameworks, and guides to enhance your investigative capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} hoverable className="flex flex-col h-full">
              <div className="h-48 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800 z-10"></div>
                <img 
                  src={resource.imageUrl} 
                  alt={resource.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-gray-900/70 backdrop-blur-sm text-xs font-medium text-lime-500 px-2 py-1 rounded-md border border-lime-500/20 z-20">
                  {resource.category}
                </div>
              </div>
              
              <h3 className="text-white text-xl font-medium mb-2">{resource.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{resource.description}</p>
              
              <a 
                href={resource.link} 
                className="inline-flex items-center text-lime-500 hover:text-lime-400 transition-colors text-sm font-medium"
              >
                Explore Resource <ExternalLink size={14} className="ml-1" />
              </a>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="secondary" href="https://github.com/shallvhack/awesome-osint-toolkit">
            View All Resources <ArrowRight size={16} className="ml-2" />
          </Button>
          
          <div className="mt-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-white text-2xl font-bold mb-2">Submit Your OSINT Resource</h3>
                <p className="text-gray-400">
                  Have a valuable tool or technique to share with the community? 
                  We welcome contributions from investigators worldwide.
                </p>
              </div>
              <Button variant="primary" href="https://forms.gle/qy6yDtvjFscHfNbC7">
                <Link size={16} className="mr-2" />
                Submit Resource
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;