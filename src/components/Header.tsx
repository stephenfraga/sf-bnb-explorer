import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      {/* Top contact bar */}
      <div className="bg-victorian-burgundy text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>943 South Van Ness Ave, San Francisco</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>(415) 641-0188</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-3 w-3" />
            <span>info@innsanfrancisco.com</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Inn San Francisco
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="elegant" size="sm">
              Book Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="elegant" size="sm" className="mt-4">
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};