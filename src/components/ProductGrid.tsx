import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductGrid = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Traditional Saree',
      image: '/collections/class.jpg'
      
    },
    {
      id: 2,
      name: 'Haryanvi Dress',
     
      image: '/harynvi.jpg'
      
    },
    {
      id: 3,
      name: 'Janamashtami Radha Krishna Dress',
      
      image: '/collections/janam4.jpg'
    },
    {
      id: 4,
      name: 'Classic Dress',
      
      image: '/collections/class4.jpg'
    },
    {
      id: 5,
      name: 'Rajasthani Dress ',
     
      image: '/collections/raj.jpg'
    },
    {
      id: 6,
      name: 'Punjabi Costume',
     
      image: '/collections/pun1.jpg'
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-400">Our Collection</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Discover our authentic collection of traditional Indian attire for performances and special occasions
          </p>
        </div>

       

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden bg-gray-800 border-gray-700 text-gray-200 shadow-xl hover:shadow-amber-900/20 transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  
                </div>
                
              </CardContent>
              
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="text-white border-white hover:bg-orange-500 bg-transparent">
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;