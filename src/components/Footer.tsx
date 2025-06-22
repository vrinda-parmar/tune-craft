import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-12 pb-8 px-6  border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4">TuneCraft</h3>
          <p className="text-gray-400 mb-4 max-w-xs">
            Preserving tradition through music and cultural expression since 2018.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Facebook  size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                Music Academy
              </Link>
            </li>
            <li>
              <Link to="/cultural-dress" className="text-gray-400 hover:text-amber-400 transition-colors">
                Cultural Dress
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Phone size={16} className="mr-2 text-amber-400" />
              <span className="text-gray-400">+91 8570864090</span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-2 text-amber-400" />
              <span className="text-gray-400">nehaparmarmusic@gmail.com</span>
            </li>
            <li className="flex items-start">
              <MapPin size={16} className="mr-2 mt-1 text-amber-400" />
              <span className="text-gray-400">Prabhat Cinema Market, Near Vaish Model Sr. Sec. School, In front of Jogiwala Mandir, Bhiwani-127021, Haryana</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-800 text-gray-500 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} TuneCraft Music Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;