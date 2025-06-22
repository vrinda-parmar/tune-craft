import React from 'react';
import Navbar from '../components/Navbar';

interface Course {
  name: string;
  image: string;
  type: 'Instrument' | 'Vocal';
}

const courses: Course[] = [
  { name: 'Harmonium', image: '/courses/harmonium.jpg', type: 'Instrument' },
  { name: 'Sitar', image: '/courses/sitar.jpg', type: 'Instrument' },
  { name: 'Guitar', image: '/courses/guitar.jpg', type: 'Instrument' },
  { name: 'Piano / Keyboard', image: '/courses/piano.jpg', type: 'Instrument' },

  { name: 'Classical Singing', image: '/courses/classical.jpg', type: 'Vocal' },
  { name: 'Bhajan / Ghazal', image: '/courses/bhajan.jpg', type: 'Vocal' },
  { name: 'Western Singing', image: '/courses/western.jpg', type: 'Vocal' },
  { name: 'Track Singing', image: '/courses/track.jpg', type: 'Vocal' },
];

const ExploreCourses = () => {
  const renderCourses = (type: 'Instrument' | 'Vocal') =>
    courses
      .filter(course => course.type === type)
      .map((course, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transform transition duration-300"
        >
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-white text-center">{course.name}</h3>
        </div>
      ));

  return (
     <div className="h-[650px] bg-gray-900 text-gray-200 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/home-culture.jpg')" }}>
             
              <Navbar />
    <section className="bg-gray-900 text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-400 mb-12 text-center">Explore Our Courses</h1>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">🎼 Instruments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {renderCourses('Instrument')}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">🎤 Vocals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {renderCourses('Vocal')}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ExploreCourses;
