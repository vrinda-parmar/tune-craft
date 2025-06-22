import Navbar from '@/components/Navbar';
import React from 'react';

const OurTeam = () => {
  return (
 <div className="h-[650px] bg-gray-900 text-gray-200 bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: "url('/home-culture.jpg')" }}>
     
      <Navbar />
   
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
       
    
        {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-400">Meet Our Team</h1>
        <p className="text-gray-300 mt-4">Dedicated educators and cultural mentors guiding your journey.</p>
      </div>

      {/* Teacher 1 – Detailed */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-16 text-white max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/Team/neha2.jpg"
            alt="Ms. Neha Parmar"
            className="w-full md:w-1/3 h-auto rounded-lg shadow-md border-4 border-amber-400 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-amber-400 mb-2">Ms. Neha Parmar</h2>
            <p className="italic text-gray-300 mb-4">Music Instructor – Instrumental & Vocal</p>
            <p className="text-gray-200 mb-6">
             A passionate music practitioner, Neha Parmar is known for her dedication to both vocal and instrumental music. She continues to refine her art through disciplined learning and performance.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Qualifications:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
              <li>M.A.Music  – Kurukshetra University, Kurukshetra</li>
              <li>Diploma in Vocal & Instrumental Music – Prayagraj Sangeet Samiti </li>
              <li>Gold Medalist in Keyboard & Classical Singing – Youth Festival</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">Certifications:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700 rounded-lg shadow-md p-4">
                <img
                  src="/Team/certi4.jpg"
                  alt="Youth Festival Certification"
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <p className="text-sm text-gray-200 text-center"> Youth Festival Position Holder – Kurukshetra University</p>
              </div>

              <div className="bg-gray-700 rounded-lg shadow-md p-4 ">
                <img
                  src="/Team/certi.jpg"
                  alt="Youth fest"
                  className="w-full h-48 object-cover rounded-md mb-2  origin-center"
                />
                <p className="text-sm text-gray-200 text-center">Classical Singing Gold Medalist – Youth Festival</p>
              </div>

              <div className="bg-gray-700 rounded-lg shadow-md p-4">
                <img
                  src="/Team/certi2.jpg"
                  alt="Workshop Trainer"
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <p className="text-sm text-gray-200 text-center">Senior Diploma Vocal –Praygraj Sangeet Samiti, Allahabad</p>
              </div>

               <div className="bg-gray-700 rounded-lg shadow-md p-4">
                <img
                  src="/Team/certi3.jpg"
                  alt="Workshop Trainer"
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <p className="text-sm text-gray-200 text-center">Senior Diploma Instrument – Praygraj Sangeet Samiti, Allahabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher 2 – Simple */}
      <div className="bg-gray-800 rounded-xl shadow-md p-8 text-white max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
         
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-amber-400 mb-2">Nicky Tanwar</h2>
            <p className="italic text-gray-300 mb-4">Cultural Dress Consultant & Mentor</p>
            <p className="text-gray-200">
             Nicky Tanwar has spent several years immersed in the world of traditional Indian fashion, curating elegant ethnic wardrobes and guiding individuals in embracing the beauty of Indian classical attire. With a deep appreciation for cultural heritage, she mentors others in understanding traditional dress styles, fabric choices, and the significance behind regional costumes, ensuring every ensemble reflects authenticity and grace.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default OurTeam;
