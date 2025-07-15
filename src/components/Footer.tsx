import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-victorian-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-victorian-gold">Inn San Francisco</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the charm of San Francisco's Victorian era in our historic 1872 mansion. 
              We provide authentic hospitality with modern comforts in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-victorian-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-victorian-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-victorian-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-victorian-gold">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/rooms" className="block text-gray-300 hover:text-white transition-colors">Our Rooms</Link>
              <Link to="/dining" className="block text-gray-300 hover:text-white transition-colors">Dining</Link>
              <Link to="/experience" className="block text-gray-300 hover:text-white transition-colors">Local Experience</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-victorian-gold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-victorian-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">943 South Van Ness Ave<br />San Francisco, CA 94110</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-victorian-gold" />
                <span className="text-gray-300">(415) 641-0188</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-victorian-gold" />
                <span className="text-gray-300">info@innsanfrancisco.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-victorian-gold mt-0.5" />
                <div className="text-gray-300">
                  <div>Check-in: 3:00 PM</div>
                  <div>Check-out: 11:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Inn San Francisco. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};