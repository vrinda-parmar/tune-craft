import React from 'react';
import Navbar from '../components/Navbar';

interface CollectionItem {
 
  image: string;
  category: string;
}

const categories = [
  "HARYANVI DRESS COLLECTION",
  "RAJASTHANI & PUNJABI",
  "RAMAYAN & MAHABHARAT DRESS",
  "INDEPENDECE & REPUBLIC DAY DRESSES",
  "CLASSICAL DRESS & TRADITIONAL SAREES",
  "FASHION SHOW DRESSES",
  "JANAMASHTAMI DRESSES",
  "DEFENCE DRESSES"
];

const collectionItems: CollectionItem[] = [
  // HARYANVI DRESS COLLECTION
  {  image: "/collections/har2.jpg", category: "HARYANVI DRESS COLLECTION" },
  {  image: "/collections/har.jpg", category: "HARYANVI DRESS COLLECTION" },
  {  image: "/collections/har4.jpg", category: "HARYANVI DRESS COLLECTION" },

  // RAJASTHANI & PUNJABI
  {  image: "/collections/raj.jpg", category: "RAJASTHANI & PUNJABI" },
  {  image: "/collections/pun1.jpg", category: "RAJASTHANI & PUNJABI" },
  {  image: "/collections/pun2.jpg", category: "RAJASTHANI & PUNJABI" },

  // Ramayan & Mahabharat Dress
  { image: "/collections/ramayan.jpg", category: "RAMAYAN & MAHABHARAT DRESS" },
  {  image: "/collections/ramayan2.jpg", category:"RAMAYAN & MAHABHARAT DRESS" },
  {  image: "/collections/ramayan3.jpg", category: "RAMAYAN & MAHABHARAT DRESS" },

  // Independence & Republic Day Dresses
  {  image: "/collections/inde.jpg", category: "INDEPENDECE & REPUBLIC DAY DRESSES" },
  {  image: "/collections/indep2.jpg", category: "INDEPENDECE & REPUBLIC DAY DRESSES"},
  {  image: "/collections/defence3.jpg", category: "INDEPENDECE & REPUBLIC DAY DRESSES" },

  // Classical Dress & Traditional Sarees
  {  image: "/collections/class1.jpg", category: "CLASSICAL DRESS & TRADITIONAL SAREES"},
  {  image: "/collections/class4.jpg", category: "CLASSICAL DRESS & TRADITIONAL SAREES" },
  {  image: "/collections/class.jpg", category: "CLASSICAL DRESS & TRADITIONAL SAREES" },

  // Fashion Show Dresses
  {  image: "/collections/fancy1.jpg", category: "FASHION SHOW DRESSES" },
  {  image: "/collections/fancy2.jpg", category: "FASHION SHOW DRESSES" },
  {  image: "/collections/fancy3.jpg", category: "FASHION SHOW DRESSES" },

  // Janmashtami Dresses
  {  image: "/collections/janam1.jpg", category:  "JANAMASHTAMI DRESSES" },
  {  image: "/collections/janam2.jpg", category: "JANAMASHTAMI DRESSES" },
  {  image: "/collections/janam4.jpg", category: "JANAMASHTAMI DRESSES" },

  // Defence Dresses
  {  image: "/collections/defence1.jpg", category:  "DEFENCE DRESSES" },
  { image: "/collections/defence2.jpg", category:  "DEFENCE DRESSES" },
  { image: "/collections/defence4.jpg", category:  "DEFENCE DRESSES" },
];


const ViewCollection = () => {
  return (
    <div className="h-[650px] bg-gray-900 text-gray-200 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/home-culture.jpg')" }}>
         
          <Navbar />
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-400 mb-12 text-center">CULTURAL DRESS COLLECTION</h1>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {collectionItems
                .filter(item => item.category === category)
                .map((item, index) => (
                  <div
  key={index}
  className="w-full max-w-xs bg-gray-800 rounded-xl p-3 shadow-[0_0_20px_rgba(255,193,7,0.3)] border border-gray-700 mx-auto"
>
  <img
    src={item.image}
   alt={item.category}
    className="w-full h-72 object-contain object-center rounded-lg mb-3 bg-white"
  />
 
</div>

                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default ViewCollection;
