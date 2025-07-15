import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wifi, Coffee, Utensils, Car, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-mansion.jpg";
import roomImage from "@/assets/room-victorian.jpg";
import breakfastImage from "@/assets/breakfast-elegant.jpg";
import cityImage from "@/assets/sf-cityscape.jpg";

export default function Home() {
  const features = [
    { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout" },
    { icon: Coffee, title: "Continental Breakfast", description: "Complimentary daily breakfast" },
    { icon: Utensils, title: "Garden Patio", description: "Beautiful outdoor dining area" },
    { icon: Car, title: "Parking Available", description: "Convenient on-site parking" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York",
      rating: 5,
      comment: "Absolutely magical experience! The Victorian charm combined with modern amenities made our stay unforgettable."
    },
    {
      name: "Michael Chen",
      location: "Los Angeles",
      rating: 5,
      comment: "The breakfast was incredible and the staff went above and beyond. Perfect location to explore San Francisco."
    },
    {
      name: "Emily Rodriguez",
      location: "Chicago",
      rating: 5,
      comment: "Stayed here for our anniversary and it was perfect. The antique furnishings and warm hospitality were exceptional."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-victorian-gold">Inn San Francisco</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            Step back in time to our enchanting 1872 Victorian mansion, where historic charm meets modern comfort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button variant="elegant" size="lg">
              Book Your Stay
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Take a Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-victorian-burgundy text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-6 w-6 text-victorian-gold" />
              <span>Historic Mission District Location</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="h-6 w-6 text-victorian-gold" />
              <span>Since 1872 - Victorian Heritage</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="h-6 w-6 text-victorian-gold" />
              <span>Intimate Boutique Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">A Historic Victorian Treasure</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Built in 1872, Inn San Francisco captures the romantic spirit of the Victorian era while offering 
                all the modern amenities today's travelers expect. Our carefully restored mansion features 
                original architectural details, antique furnishings, and an atmosphere of warmth and elegance.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Located in San Francisco's vibrant Mission District, we're perfectly positioned for exploring 
                the city's renowned attractions, from the Golden Gate Bridge to Fisherman's Wharf.
              </p>
              <Button variant="secondary" size="lg">
                Learn Our Story
              </Button>
            </div>
            <div className="relative">
              <img 
                src={roomImage} 
                alt="Victorian Room" 
                className="rounded-lg shadow-elegant w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Why Choose Inn San Francisco</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of Victorian elegance and modern convenience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-20 bg-victorian-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={breakfastImage} 
                alt="Gourmet Breakfast" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Delightful Dining Experience</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Start each day with our generous continental breakfast served in our grand double parlors 
                or on the beautiful garden patio. Fresh pastries, seasonal fruits, artisanal coffee, 
                and locally sourced ingredients create a memorable morning experience.
              </p>
              <ul className="text-muted-foreground space-y-2 mb-8">
                <li>• Fresh-baked pastries and breads</li>
                <li>• Seasonal fruit selections</li>
                <li>• Premium coffee and teas</li>
                <li>• Garden patio dining available</li>
              </ul>
              <Button variant="secondary" size="lg">
                View Dining Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Prime San Francisco Location</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Mission District location puts you at the heart of San Francisco's cultural scene. 
                Walk to excellent restaurants, shops, and galleries, or take quick transit connections 
                to the city's most famous attractions.
              </p>
              <ul className="text-muted-foreground space-y-2 mb-8">
                <li>• 15 minutes to downtown San Francisco</li>
                <li>• Walking distance to Mission Dolores</li>
                <li>• Easy access to public transportation</li>
                <li>• Surrounded by authentic local culture</li>
              </ul>
              <Button variant="secondary" size="lg">
                Explore the Area
              </Button>
            </div>
            <div className="relative">
              <img 
                src={cityImage} 
                alt="San Francisco View" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">What Our Guests Say</h2>
            <p className="text-lg text-muted-foreground">
              Discover why travelers from around the world choose Inn San Francisco
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-victorian-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div className="text-sm">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Victorian Adventure?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your stay at Inn San Francisco and experience the charm of our historic mansion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Check Availability
            </Button>
            <Button variant="secondary" size="lg">
              Call (415) 641-0188
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}