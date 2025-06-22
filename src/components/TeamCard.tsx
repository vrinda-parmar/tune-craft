import React from 'react';

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  qualifications?: string[];
  certifications?: string[];
}

const TeamCard = ({ name, title, image, bio, qualifications, certifications }: TeamCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md text-white max-w-xl w-full">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img src={image} alt={name} className="w-40 h-40 rounded-full object-cover border-4 border-amber-400" />
        <div>
          <h3 className="text-2xl font-bold text-amber-400">{name}</h3>
          <p className="text-sm mb-3 italic text-gray-300">{title}</p>
          <p className="text-gray-200 mb-4">{bio}</p>

          {qualifications && (
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-1">Qualifications:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {qualifications.map((q, idx) => <li key={idx}>{q}</li>)}
              </ul>
            </div>
          )}

          {certifications && (
            <div>
              <h4 className="text-white font-semibold mb-1">Certifications:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {certifications.map((c, idx) => <li key={idx}>{c}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
