import { ResourceItem, CaseStudy, TeamMember, NewsItem } from '../types';

// Resources
export const resources: ResourceItem[] = [
  {
    id: 1,
    title: 'OSINT Framework',
    description: 'A collection of various OSINT tools categorized by their purpose.',
    category: 'Tool',
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://osintframework.com/'
  },
  {
    id: 2,
    title: 'Maltego',
    description: 'Interactive data mining tool that renders directed graphs for link analysis.',
    category: 'Software',
    imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://www.maltego.com/'
  },
  {
    id: 3,
    title: 'Shodan',
    description: 'Search engine for Internet-connected devices.',
    category: 'Search Engine',
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://www.shodan.io/'
  },
  {
    id: 4,
    title: 'The OSINT Handbook',
    description: 'Comprehensive guide to OSINT collection and analysis.',
    category: 'Guide',
    imageUrl: 'https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://i-intelligence.eu/uploads/public-documents/OSINT_Handbook_2020.pdf'
  }
];

// Case Studies
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Tracking Disinformation Campaigns',
    summary: 'How OSINT techniques were used to identify and track disinformation during the 2020 election.',
    imageUrl: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2023-05-15',
    tags: ['Disinformation', 'Election', 'Social Media']
  },
  {
    id: 2,
    title: 'Identifying Corporate Shell Companies',
    summary: 'Investigation into corporate ownership structures using public records and OSINT techniques.',
    imageUrl: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2023-03-22',
    tags: ['Corporate', 'Finance', 'Public Records']
  },
  {
    id: 3,
    title: 'Geolocation Analysis in Conflict Zones',
    summary: 'Using open-source imagery to verify events in active conflict zones.',
    imageUrl: 'https://images.pexels.com/photos/2774581/pexels-photo-2774581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2023-02-10',
    tags: ['Geolocation', 'Conflict', 'Verification']
  }
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dipti Yadav',
    role: 'Chief Investigation Officer',
    expertise: ['OSINT', 'Investigative Journalism', 'International Relations'],
    imageUrl: '/images/dipti.jfif',
    socialLinks: {
      twitter: 'https://x.com/@ghongha007',
      linkedin: 'https://www.linkedin.com/in/dydiptiyadav07/'
      
    }
  },
  {
    id: 2,
    name: 'Madhav Yadav',
    role: 'CTO',
    expertise: ['AI/ML', 'Cyber Security', 'Development'],
    imageUrl: '/images/madhav.jfif',
    socialLinks: {
      twitter: 'https://x.com/@mymadhavyadav07',
      linkedin: 'https://linkedin.com/in/mymadhavyadav07',
      github: 'https://github.com/mymadhavyadav07'
    }
  }
];

// News Items
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'New OSINT Tool Streamlines Social Media Investigations',
    summary: 'A new tool has been released that allows investigators to efficiently analyze social media data across platforms.',
    date: '2023-06-05',
    source: 'Tech News Daily',
    link: '#'
  },
  {
    id: 2,
    title: 'OSINT Conference Announces 2023 Schedule',
    summary: 'The annual OSINT Conference has announced its 2023 schedule, featuring workshops and presentations from leading experts.',
    date: '2023-05-28',
    source: 'Intelligence Weekly',
    link: '#'
  },
  {
    id: 3,
    title: 'How OSINT Helped Solve a Decade-Old Case',
    summary: 'Investigators used open-source intelligence techniques to solve a cold case that had been unsolved for over a decade.',
    date: '2023-05-15',
    source: 'Criminal Justice Today',
    link: '#'
  }
];