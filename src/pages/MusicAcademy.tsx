import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const MusicAcademy = () => {
  return (
    <div className="h-[650px] bg-gray-900 text-gray-200 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/home.jpg')" }}>
      <Navbar />
      <Hero 
        title="TUNE CRAFT " 
        title2='Music Academy'
        subtitle="Discover the Ancient Art of Indian Classical Music" 
        type="music"
      />
      <AboutSection 
        title="About Us" 
        content="TuneCraft Music Academy is a growing platform for learning both Indian classical and Western music. Founded in 2018, our mission is to provide quality music education to learners of all levels. While we are still gaining experience, we have had the joy of teaching many passionate students in vocal and instrumental music. Our dedicated team of musicians is committed to sharing their knowledge with care and creativity."
        type="music"
      />
      <ServicesSection 
        title="Our Music Training" 
        services={[
          {
            title: "Sitar",
            description: "Master the iconic stringed instrument with our comprehensive training program, from basics to advanced ragas.",
            // icon: "music",
            backgroundImage: "/sitar.jpg"
          },
          {
            title: "Piano",
            description:"Learn piano playing techniques, melody, and harmony from experienced instructors.",
            // icon: "drum",
             backgroundImage: "/piano.jpg"
          },
          {
            title: "Vocals",
            description: "Develop your voice with traditional Hindustani or Carnatic vocal training guided by professional vocalists.",
            // icon: "microphone"
            backgroundImage: "/vocal.jpg"
          },
          {
            title: "Harmonium",
            description: "Master harmonium techniques and enhance your musical sense with expert help.",
            // icon: "microphone"
            backgroundImage: "/harmonium.jpg"
          },
          {
            title: "Guitar",
            description: "Learn guitar chords, strumming patterns, and melodies with ease.",
            // icon: "microphone"
            backgroundImage: "/guitar.jpg"
          },
            {
            title: "Classical Singing",
            description: "Explore classical vocal techniques, ragas, and voice modulation.",
            // icon: "microphone"
            backgroundImage: "/israel-palacio-Y20JJ_ddy9M-unsplash.jpg"
          }
        ]}
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default MusicAcademy;