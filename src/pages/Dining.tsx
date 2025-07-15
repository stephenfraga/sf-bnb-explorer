import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Coffee, Utensils, Leaf, Star } from "lucide-react";
import breakfastImage from "@/assets/breakfast-elegant.jpg";

export default function Dining() {
  const menuItems = [
    {
      category: "Fresh Pastries",
      items: [
        "Croissants with local butter and preserves",
        "Danish pastries with seasonal fruit",
        "Freshly baked muffins and scones",
        "Artisanal sourdough bread"
      ]
    },
    {
      category: "Breakfast Selections",
      items: [
        "Farm-fresh scrambled eggs",
        "Steel-cut oatmeal with berries",
        "Yogurt parfait with granola",
        "Seasonal fresh fruit platter"
      ]
    },
    {
      category: "Beverages",
      items: [
        "Locally roasted coffee blends",
        "Premium tea selections",
        "Fresh orange and apple juice",
        "San Francisco fog city blend"
      ]
    }
  ];

  const diningLocations = [
    {
      name: "Grand Double Parlors",
      description: "Dine in elegance surrounded by original Victorian architecture and antique furnishings.",
      features: ["Historic setting", "Indoor seating", "All-weather option"]
    },
    {
      name: "Garden Patio",
      description: "Enjoy your breakfast al fresco in our beautiful garden surrounded by flowers and greenery.",
      features: ["Outdoor dining", "Garden views", "Weather permitting"]
    }
  ];

  const nearbyDining = [
    {
      name: "Tartine Bakery",
      type: "Bakery & Café",
      distance: "0.3 miles",
      description: "World-renowned bakery famous for pastries and bread",
      rating: 4.5
    },
    {
      name: "Bi-Rite Creamery",
      type: "Ice Cream",
      distance: "0.4 miles", 
      description: "Artisanal ice cream made with local ingredients",
      rating: 4.6
    },
    {
      name: "La Taqueria",
      type: "Mexican",
      distance: "0.5 miles",
      description: "Authentic Mission-style burritos and tacos",
      rating: 4.4
    },
    {
      name: "Dolores Park Café",
      type: "Coffee & Light Bites",
      distance: "0.6 miles",
      description: "Perfect coffee spot near Dolores Park",
      rating: 4.3
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-primary">Dining at Inn San Francisco</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start each day with our complimentary continental breakfast, featuring fresh, locally-sourced 
            ingredients served in our historic parlors or beautiful garden patio.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-lg overflow-hidden shadow-elegant">
          <img 
            src={breakfastImage} 
            alt="Elegant Breakfast Setting"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Continental Breakfast Included</h2>
              <p className="text-lg opacity-90">Complimentary with every stay</p>
            </div>
          </div>
        </div>

        {/* Breakfast Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <Coffee className="h-6 w-6" />
                Our Continental Breakfast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe breakfast is the most important meal of the day. Our continental breakfast 
                features a carefully curated selection of fresh pastries, local ingredients, and 
                premium beverages to fuel your San Francisco adventures.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {menuItems.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-primary mb-3">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Leaf className="h-3 w-3 text-victorian-sage mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-3">
                <Clock className="h-5 w-5" />
                Breakfast Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="font-semibold">Monday - Friday</div>
                <div className="text-muted-foreground">7:00 AM - 10:00 AM</div>
              </div>
              <div>
                <div className="font-semibold">Saturday - Sunday</div>
                <div className="text-muted-foreground">7:30 AM - 10:30 AM</div>
              </div>
              <div className="mt-6 p-4 bg-victorian-cream rounded-lg">
                <div className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Breakfast is included with all room bookings. 
                  Special dietary requirements can be accommodated with advance notice.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dining Locations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Where You'll Dine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diningLocations.map((location, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nearby Dining */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Nearby Dining Recommendations</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The Mission District is a food lover's paradise. Here are some local favorites 
            within walking distance of the inn.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyDining.map((restaurant, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{restaurant.type}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-victorian-gold fill-current" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{restaurant.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <MapPin className="h-3 w-3" />
                    {restaurant.distance} walk
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Requests */}
        <Card className="bg-gradient-elegant">
          <CardContent className="p-8 text-center">
            <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-primary">Special Dietary Needs?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're happy to accommodate vegetarian, vegan, gluten-free, and other dietary requirements. 
              Please let us know about any special needs when making your reservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Us About Dietary Needs
              </Button>
              <Button variant="outline" size="lg">
                Call (415) 641-0188
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}