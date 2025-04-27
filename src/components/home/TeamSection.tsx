import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Card from '../shared/Card';
import { teamMembers } from '../../constants';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-lime-500">Expert</span> Team
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Meet our community of OSINT investigators and specialists with expertise across various domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center items-center">
          {teamMembers.map((member) => (
            <Card key={member.id} hoverable className="flex flex-col items-center text-center justify-center mx-auto w-full">
              <div className="relative mb-4 group">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-lime-500/50 p-1">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3">
                  <div className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-xs">{member.name.charAt(0)}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-white text-lg font-medium">{member.name}</h3>
              <p className="text-lime-500 text-sm mb-3">{member.role}</p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {member.expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3 mt-auto">
                {member.socialLinks.twitter && (
                  <a 
                    href={member.socialLinks.twitter} 
                    className="text-gray-400 hover:text-lime-500 transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                )}
                {member.socialLinks.linkedin && (
                  <a 
                    href={member.socialLinks.linkedin} 
                    className="text-gray-400 hover:text-lime-500 transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a 
                    href={member.socialLinks.github} 
                    className="text-gray-400 hover:text-lime-500 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        
        {/* <div className="mt-16 bg-gradient-to-r from-gray-800 via-gray-800 to-gray-800 rounded-xl p-8 border border-gray-700 relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lime-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <div className="w-20 h-20 md:mr-8 mb-4 md:mb-0 rounded-full bg-lime-500/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-lime-500 flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-xl">+</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Join Our Network of Specialists</h3>
                <p className="text-gray-400 max-w-3xl">
                  Are you an OSINT expert, investigative journalist, or security professional? 
                  Connect with like-minded specialists, share your expertise, and contribute to 
                  our growing community of investigators.
                </p>
                
                <button className="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors">
                  Apply to Join
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TeamSection;