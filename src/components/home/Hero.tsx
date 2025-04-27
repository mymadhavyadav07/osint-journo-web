import React from 'react';
import Button from '../shared/Button';
import { ArrowRight, Shield, Globe, Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA1OS41VjU4LjVINTguNVY1OS41SDU5LjVaTTU5LjUgMC41SDU4LjVWMS41SDU5LjVWMC41Wk0wLjUgMC41VjEuNUgxLjVWMC41SDAuNVpNMC41IDU5LjVIMC41VjU4LjVIMC41VjU5LjVaIiBzdHJva2U9IiM0QTU1NjgiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')]"></div>
      
      {/* Glow effects */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Empowering <span className="text-lime-500">OSINT</span> Investigators and Journalists
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              A community-driven platform for open-source intelligence professionals. 
              Access cutting-edge tools, methodologies, and insights to enhance your investigative capabilities.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" href="https://www.reddit.com/r/osint_journo">
                Join Our Community
              </Button>
              <Button variant="outline" size="lg" href="https://github.com/shallvhack/awesome-osint-toolkit">
                Explore Resources <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-lime-500/20 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-lime-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Secure Methods</h3>
                  <p className="mt-1 text-sm text-gray-400">Vetted techniques for safe investigations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-lime-500/20 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-lime-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Global Network</h3>
                  <p className="mt-1 text-sm text-gray-400">Connect with experts worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-lime-500/20 flex items-center justify-center">
                  <Search className="h-6 w-6 text-lime-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Advanced Tools</h3>
                  <p className="mt-1 text-sm text-gray-400">Access specialized OSINT resources</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl border border-gray-700 shadow-2xl shadow-black/30">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
              <div className="absolute inset-0 opacity-60">
                <img 
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="OSINT Visualization" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              
              {/* Interactive Elements Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full flex flex-col items-center justify-center p-6">
                  <div className="w-full h-full relative flex items-center justify-center">
                    <div className="absolute w-64 h-64 border border-lime-500/20 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute w-80 h-80 border border-lime-500/30 rounded-full"></div>
                    <div className="absolute w-96 h-96 border border-lime-500/10 rounded-full"></div>
                    
                    <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-xl z-10 max-w-xs" style={{"visibility": "hidden"}}>
                      <h3 className="text-lime-500 font-medium text-lg">OSINT in Action</h3>
                      <p className="text-gray-300 mt-2 text-sm">
                        Discover how investigators are using cutting-edge techniques to uncover hidden connections and reveal the truth.
                      </p>
                      <button className="mt-4 text-sm flex items-center text-lime-400 hover:text-lime-300 transition-colors">
                        View Case Studies <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-lime-500/10 backdrop-blur-xl rounded-xl border border-lime-500/20 transform rotate-6 shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/10 backdrop-blur-xl rounded-xl border border-blue-500/20 transform -rotate-6 shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;