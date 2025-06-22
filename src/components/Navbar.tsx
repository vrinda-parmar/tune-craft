import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Show button only on these pages
  const showBookButton =
    location.pathname === '/' || location.pathname === '/cultural-dress';

  return (
    <nav className="bg-gray-950 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-amber-400 tracking-tight">TuneCraft</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-white hover:bg-gray-800 transition-all"
              >
                Music Academy
              </Link>
              <Link
                to="/cultural-dress"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-white hover:bg-gray-800 transition-all"
              >
                Cultural Dress
              </Link>
              <Link
                to="/our-team"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Meet Our Team
              </Link>

              {showBookButton && (
                <Button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  className="text-amber-400 border-amber-400 hover:bg-amber-400 hover:text-gray-900"
                >
                  Book a Class
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-amber-400" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 text-gray-100 border-gray-800">
                <div className="flex flex-col space-y-6 mt-10">
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-md text-lg font-medium text-gray-200 hover:text-white hover:bg-gray-800 transition-all"
                  >
                    Music Academy
                  </Link>
                  <Link
                    to="/cultural-dress"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-md text-lg font-medium text-gray-200 hover:text-white hover:bg-gray-800 transition-all"
                  >
                    Cultural Dress
                  </Link>

                  {showBookButton && (
                    <Button
                      onClick={() => {
                        setIsMenuOpen(false);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      variant="outline"
                      className="text-amber-400 border-amber-400 hover:bg-amber-400 hover:text-gray-900 mt-4"
                    >
                      Book a Class
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
