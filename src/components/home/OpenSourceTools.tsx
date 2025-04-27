import React from 'react';
import { Github, Star, GitFork, Users, ExternalLink, Code, BookOpen, PenTool as Tool } from 'lucide-react';
import Card from '../shared/Card';
import Button from '../shared/Button';

const OpenSourceTools: React.FC = () => {
  const tools = [
    {
      name: 'Flight Tracker',
      description: ' Python-based tool that allows users to track flights in real-time.',
      github: 'shallvhack/Flight-Tracker',
      stars: '17',
      forks: '5',
      contributors: '1',
      link: 'https://github.com/shallvhack/Flight-Tracker'
    },
    {
      name: 'Awesome OSINT Toolkit',
      description: 'A Toolkit for Open Source Intelligence(OSINT) by the OSINT JOURNO Community!',
      github: 'shallvhack/awesome-osint-toolkit',
      stars: '1',
      forks: '0',
      contributors: '1',
      link: 'https://github.com/shallvhack/awesome-osint-toolkit'
    }
  ];

  return (
    <section id="opensource" className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Open Source <span className="text-lime-500">Tools</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore and contribute to these powerful open-source OSINT tools. Join the community of developers making intelligence gathering more accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {tools.map((tool) => (
            <Card key={tool.name} hoverable className="flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Tool className="h-6 w-6 text-lime-500 mr-2" />
                  <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                </div>
                <Button 
                  href={tool.link}
                  variant="secondary" 
                  size="sm"
                  className="!p-2"
                >
                  <Github size={16} />
                </Button>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow">{tool.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Star size={14} className="text-yellow-500 mr-1" />
                  {tool.stars}
                </div>
                <div className="flex items-center">
                  <GitFork size={14} className="text-lime-500 mr-1" />
                  {tool.forks}
                </div>
                <div className="flex items-center">
                  <Users size={14} className="text-blue-500 mr-1" />
                  {tool.contributors}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="flex items-start mb-6">
              <div className="p-3 bg-lime-500/10 rounded-lg mr-4">
                <Code className="h-6 w-6 text-lime-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Contribute to Open Source</h3>
                <p className="text-gray-400">
                  Help improve these tools by contributing code, reporting bugs, or suggesting new features.
                  Every contribution makes a difference.
                </p>
              </div>
            </div>
            <Button variant="primary" className="w-full" href="https://github.com/shallvhack">
              <Github size={16} className="mr-2" />
              Start Contributing
            </Button>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="flex items-start mb-6">
              <div className="p-3 bg-lime-500/10 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-lime-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Documentation & Guides</h3>
                <p className="text-gray-400">
                  Access comprehensive documentation, tutorials, and best practices for using these OSINT tools effectively.
                </p>
              </div>
            </div>
            <Button variant="primary" className="w-full">
              <ExternalLink size={16} className="mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceTools;