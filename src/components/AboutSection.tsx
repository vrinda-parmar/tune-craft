import React from 'react';

interface AboutSectionProps {
  title: string;
  content: string;
  type: 'music' | 'dress';
}

const AboutSection = ({ title, content, type }: AboutSectionProps) => {
  const imagePath =
    type === 'music' ? '/assets/about-music.jpg' : '/assets/about-dress.jpg';

  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-x-12">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={type === 'music' ? '/israel-palacio-Y20JJ_ddy9M-unsplash.jpg' : '/modern.jpg'}
                alt={type === 'music' ? 'Music students learning instruments' : 'Cultural dress collection'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-amber-400">{title}</h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 mb-6 leading-relaxed">{content}</p>

             

              {/* Additional Section (Music: Teachers, Dress: Shop) */}
              <div className="mt-10">
                {type === 'music' ? (
                  <>
                    <h3 className="text-xl font-semibold text-white mb-4">Quality Teachers</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>Highly qualified and passionate educators</li>
                      <li>Expertise in both Classical and Western music styles</li>
                      <li>Comprehensive training in instruments and vocals</li>
                      <li>Experienced staff with certifications and accolades</li>
                    </ul>
                    <a
                      href="/our-team"
                      className="inline-block mt-6 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                      Meet Our Team
                    </a>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>Traditional and modern cultural wear collection</li>
                      <li>Flexible rental durations: daily to monthly</li>
                      <li>Buy or rent based on your needs and budget</li>
                      <li>Inclusive options for kids, adults, and seniors</li>
                    </ul>
                    <a
                      href="/view-collection"
                      className="inline-block mt-6 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                      Explore Collection
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
