import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  title2: string;
  subtitle: string;
  type: 'music' | 'dress';
}

const Hero = ({ title, title2,subtitle, type }: HeroProps) => {
  // Select background image based on type
  const bgImage = type === 'music' 
    ? 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/music-hero-bg.jpg")'
    : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/dress-hero-bg.jpg")';

  return (
    <div 
      className="min-h-[70vh] flex items-center justify-center bg-cover bg-center text-center py-20"
      style={{ 
        backgroundImage: bgImage
      }}
    >
      <div className="max-w-3xl px-6 py-12 backdrop-blur-sm bg-black/30 rounded-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          {title}
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          {title2}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
         <Link to={type === 'music' ? '/explore-courses' : '/view-collection'}>
  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium">
    {type === 'music' ? 'Explore Courses' : 'View Collection'}
  </Button>
</Link>
          <Button
  variant="outline"
  size="lg"
  className="bg-white hover:bg-amber-600 text-gray-900 font-medium"
  onClick={() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  About Us <ChevronRight className="ml-2 h-4 w-4" />
</Button>

        </div>
      </div>
    </div>
  );
};

export default Hero;