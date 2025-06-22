import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-400">Contact Us</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have questions or want to visit us? Find our location and contact details below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Google Maps Location */}
          <Card className="bg-gray-800 border-gray-700 shadow-xl overflow-hidden">
            <iframe
              title="TuneCraft Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3496.6442740558273!2d76.13043324203537!3d28.7898685126804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ3JzIzLjUiTiA3NsKwMDcnNDkuMCJF!5e0!3m2!1sen!2sin!4v1750589118794!5m2!1sen!2sin" 
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Card>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-amber-400" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="mt-1 text-gray-400">+91 8570864090</p>
                  <p className="text-gray-400">+91 7497093349</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-amber-400" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="mt-1 text-gray-400">nehaparmarmusic@gmail.com</p>
                  <p className="text-gray-400">nickybwn1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-amber-400" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="mt-1 text-gray-400">
                    Prabhat Cinema Market, Near Vaish Model Sr. Sec. School, In front of Jogiwala Mandir
                  </p>
                  <p className="text-gray-400">Bhiwani-127021, Haryana</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-4">Hours of Operation</h3>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 text-gray-400">Monday - Sunday</td>
                    <td className="py-2 text-gray-300 text-right">9:00 AM - 8:00 PM</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 text-gray-400">Wednesday</td>
                    <td className="py-2 text-gray-300 text-right">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
