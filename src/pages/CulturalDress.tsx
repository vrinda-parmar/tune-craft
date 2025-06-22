import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import ProductGrid from '@/components/ProductGrid';

const CulturalDress = () => {
  return (
    <div className="h-[650px] bg-gray-900 text-gray-200 bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: "url('/home-culture.jpg')" }}>
     
      <Navbar />
      <Hero 
        title="TUNE CRAFT " 
        title2='Cultural Dress Collection'
        subtitle="Authentic Indian Attire for Every Occasion" 
        type="dress"
      />
      <AboutSection 
        title="About Us" 
        content="Our Cultural Dress Collection offers a wide variety of traditional Indian attire available for both rent and purchase. From regional dance costumes to festival and event wear, our collection is perfect for school functions, cultural programs, weddings, and more. We aim to make cultural dressing accessible and convenient while celebrating India’s rich diversity in style and tradition."
        type="dress"
      />
      <ProductGrid />
      <ServicesSection  
        title="Our Dress Services" 
        services={[
         
          {
            title: "Costume Rental",
            description: "Rent traditional outfits for performances, cultural events, or special occasions with our well-maintained collection.",
            // icon: "clothes"
          },
          {
            title: "Costume Purchase",
            description: "Explore our diverse range of traditional costumes available for purchase, perfect for cultural events, performances, and celebrations.",
            // icon: "book"
          },
           {
            title: "Daily.Weekly.Monthly Rentals",
            description:"Flexible rental plans available — choose from daily, weekly, or monthly options to suit your event needs and budget.",
            // icon: "book"
          }
        ]}
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default CulturalDress;