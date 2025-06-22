import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Drum, Mic, Scissors, ShoppingBag, BookOpen } from 'lucide-react';

interface Service {
  title: string;
  description: string;
 
  backgroundImage?: string; // Relative path from public folder, e.g. "/home.jpg"
}

interface ServicesSectionProps {
  title: string;
  services: Service[];
}

const ServicesSection = ({ title, services }: ServicesSectionProps) => {
  // const getIcon = (iconName: string) => {
  //   switch (iconName) {
  //     case 'music':
  //       return <Music className="h-8 w-8 text-amber-400" />;
  //     case 'drum':
  //       return <Drum className="h-8 w-8 text-amber-400" />;
  //     case 'microphone':
  //       return <Mic className="h-8 w-8 text-amber-400" />;
  //     case 'scissors':
  //       return <Scissors className="h-8 w-8 text-amber-400" />;
  //     case 'clothes':
  //       return <ShoppingBag className="h-8 w-8 text-amber-400" />;
  //     case 'book':
  //       return <BookOpen className="h-8 w-8 text-amber-400" />;
  //     default:
  //       return <Music className="h-8 w-8 text-amber-400" />;
  //   }
  // };

  return (
    <section id="services" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-400">{title}</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of offerings designed to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className=" bg-stone-700 relative text-gray-200 border-gray-700 shadow-xl overflow-hidden transition-shadow hover:shadow-amber-900/20"
              style={{
                backgroundImage: service.backgroundImage ? `url('${service.backgroundImage}')` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay for readability */}
              {service.backgroundImage && (
                <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
              )}

              {/* Card Content */}
              <div className="relative z-10">
                <CardHeader>
                  {/* <div className="mb-3">{getIcon(service.icon)}</div> */}
                  <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
