import React, { useState } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { caseStudies } from '../../constants';

const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(caseStudies[0]);

  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-lime-500">Case Studies</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore real-world applications of OSINT techniques and learn from successful investigations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Case study selector sidebar */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {caseStudies.map((study) => (
                <div 
                  key={study.id}
                  onClick={() => setActiveCase(study)}
                  className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border ${
                    activeCase.id === study.id 
                      ? 'border-lime-500/50 bg-lime-500/5' 
                      : 'border-gray-700 bg-gray-800 hover:border-lime-500/30'
                  }`}
                >
                  <h3 className={`font-medium ${
                    activeCase.id === study.id ? 'text-lime-500' : 'text-white'
                  }`}>{study.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">{study.summary}</p>
                  <div className="flex items-center mt-3">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      {study.date}
                    </div>
                    <div className="ml-4 flex items-center space-x-2">
                      {study.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {study.tags.length > 2 && (
                        <span className="text-xs text-gray-500">+{study.tags.length - 2} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button variant="secondary" className="w-full">
                View All Case Studies <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Featured case study */}
          <div className="lg:col-span-3">
            <Card className="h-full relative overflow-hidden">
              <div className="h-60 -mx-6 -mt-6 mb-6 relative">
                <img 
                  src={activeCase.imageUrl} 
                  alt={activeCase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
              </div>
              
              <div className="absolute top-4 right-4 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-300 flex items-center">
                <Calendar size={14} className="mr-2 text-lime-500" /> {activeCase.date}
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">{activeCase.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCase.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="flex items-center text-xs bg-gray-800 text-lime-500 px-2 py-1 rounded-md border border-lime-500/20"
                  >
                    <Tag size={12} className="mr-1" /> {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6">{activeCase.summary}</p>
              
              <p className="text-gray-400 mb-8">
                This investigation demonstrates the power of OSINT techniques in revealing hidden connections and providing
                crucial evidence. Our team used a combination of social media analysis, geolocation techniques, and public
                records research to develop a comprehensive understanding of the situation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-white font-medium mb-2">Techniques Used</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></div>
                      Social network analysis
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></div>
                      Geolocation verification
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></div>
                      Public records research
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></div>
                      Image metadata analysis
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-white font-medium mb-2">Key Outcomes</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></div>
                      Verified source authenticity
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></div>
                      Identified key actors
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></div>
                      Established timeline of events
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></div>
                      Provided actionable intelligence
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="primary">
                Read Full Case Study <ArrowRight size={16} className="ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;