import React from 'react';
import { Twitter, Linkedin, Youtube, Instagram, Instagram as Telegram, Globe, MessageSquare } from 'lucide-react';
import Card from '../shared/Card';

const SocialPlatforms: React.FC = () => {
  const platforms = [
    {
      name: 'Twitter/X',
      icon: Twitter,
      link: 'https://x.com/osint_journo',
      // followers: '50K+',
      description: 'Real-time OSINT updates and community discussions'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      link: 'https://www.linkedin.com/company/osint-journo',
      // followers: '25K+',
      description: 'Professional networking and industry insights'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      link: 'https://www.youtube.com/@osint_journo',
      // followers: '100K+',
      description: 'Video tutorials and investigation walkthroughs'
    },
    {
      name: 'Reddit',
      icon: MessageSquare,
      link: 'https://reddit.com/r/osint_journo',
      // followers: '45K+',
      description: 'Community discussions and knowledge sharing'
    },
    // {
    //   name: 'Instagram',
    //   icon: Instagram,
    //   link: '#',
    //   followers: '20K+',
    //   description: 'Visual content and investigation highlights'
    // },
    // {
    //   name: 'Telegram',
    //   icon: Telegram,
    //   link: '#',
    //   followers: '15K+',
    //   description: 'Private community channels and instant updates'
    // }
  ];

  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our <span className="text-lime-500">Community</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Connect with fellow OSINT investigators across our social platforms. Stay updated with the latest techniques,
            tools, and investigations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {platforms.map((platform) => (
            <Card 
              key={platform.name} 
              hoverable 
              className="flex flex-col items-center text-center p-8 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <platform.icon size={40} className="text-lime-500" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
              {/* <p className="text-lime-500 font-medium mb-4">{platform.followers} Followers</p> */}
              <p className="text-gray-400 mb-6">{platform.description}</p>
              
              <a 
                href={platform.link}
                className="inline-flex items-center text-lime-500 hover:text-lime-400 transition-colors"
              >
                <Globe size={16} className="mr-2" />
                Join Community
              </a>
            </Card>
          ))}
        </div>

        {/* <div className="mt-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-white text-2xl font-bold mb-2">Get Exclusive Updates</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for insider access to OSINT techniques and community highlights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-lime-500"
              />
              <button className="px-6 py-2 bg-lime-500 text-gray-900 rounded-md hover:bg-lime-600 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SocialPlatforms;