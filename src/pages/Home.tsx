import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FeaturedResources from '../components/home/FeaturedResources';
import SocialPlatforms from '../components/home/SocialPlatforms';
import OpenSourceTools from '../components/home/OpenSourceTools';
import TeamSection from '../components/home/TeamSection';
import NewsSection from '../components/home/NewsSection';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="resources">
          <FeaturedResources />
        </section>
        <section id="social">
          <SocialPlatforms />
        </section>
        <section id="opensource">
          <OpenSourceTools />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        {/* <section id="news">
          <NewsSection />
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;