import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Coffee, Bath, Bed, Users, Square, Star } from "lucide-react";
import roomImage from "@/assets/room-victorian.jpg";

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Victorian Deluxe Room",
      price: "$189",
      image: roomImage,
      size: "320 sq ft",
      occupancy: "2 guests",
      bedType: "Queen Bed",
      features: ["Private bathroom", "Antique furnishings", "Garden view", "Free WiFi"],
      description: "Step into Victorian elegance with original period furniture and modern comforts.",
      popular: true
    },
    {
      id: 2,
      name: "Garden Suite",
      price: "$249",
      image: roomImage,
      size: "450 sq ft",
      occupancy: "3 guests",
      bedType: "King Bed + Sofa",
      features: ["Private bathroom", "Garden access", "Sitting area", "Kitchenette"],
      description: "Spacious suite with direct access to our beautiful garden patio.",
      popular: false
    },
    {
      id: 3,
      name: "Historic Parlor Room",
      price: "$229",
      image: roomImage,
      size: "380 sq ft",
      occupancy: "2 guests",
      bedType: "Queen Bed",
      features: ["Original fireplace", "High ceilings", "Period details", "City view"],
      description: "Experience the grandeur of the original mansion's formal parlor room.",
      popular: false
    },
    {
      id: 4,
      name: "Cozy Victorian Single",
      price: "$149",
      image: roomImage,
      size: "240 sq ft",
      occupancy: "1 guest",
      bedType: "Full Bed",
      features: ["Shared bathroom", "Writing desk", "Historic details", "Free WiFi"],
      description: "Perfect for solo travelers seeking Victorian charm at great value.",
      popular: false
    },
    {
      id: 5,
      name: "Honeymoon Suite",
      price: "$299",
      image: roomImage,
      size: "520 sq ft",
      occupancy: "2 guests",
      bedType: "King Bed",
      features: ["Private balcony", "Jacuzzi tub", "Champagne service", "Rose petals"],
      description: "Our most romantic room, perfect for special occasions and celebrations.",
      popular: false
    },
    {
      id: 6,
      name: "Family Victorian Room",
      price: "$269",
      image: roomImage,
      size: "480 sq ft",
      occupancy: "4 guests",
      bedType: "2 Queen Beds",
      features: ["Two queen beds", "Family bathroom", "Game area", "Refrigerator"],
      description: "Spacious accommodation perfect for families visiting San Francisco.",
      popular: false
    }
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Coffee, name: "Continental Breakfast" },
    { icon: Bath, name: "Private Bathrooms" },
    { icon: Bed, name: "Premium Bedding" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-primary">Our Victorian Rooms</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each room in our historic mansion has been carefully restored to maintain its Victorian character 
            while providing modern comfort and convenience for today's discerning travelers.
          </p>
        </div>

        {/* Amenities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center p-6 bg-victorian-cream rounded-lg">
              <amenity.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <span className="text-sm font-medium text-muted-foreground">{amenity.name}</span>
            </div>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-warm transition-all duration-300">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                {room.popular && (
                  <Badge className="absolute top-4 left-4 bg-victorian-gold text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg">
                  <span className="text-lg font-bold">{room.price}</span>
                  <span className="text-sm">/night</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{room.name}</CardTitle>
                <p className="text-muted-foreground">{room.description}</p>
              </CardHeader>
              
              <CardContent>
                {/* Room Details */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Square className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                    <div className="text-sm font-medium">{room.size}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                    <div className="text-sm font-medium">{room.occupancy}</div>
                  </div>
                  <div className="text-center">
                    <Bed className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                    <div className="text-sm font-medium">{room.bedType}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Room Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-3 w-3 text-victorian-gold mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="elegant" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline" size="lg">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-elegant rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-primary">Can't Decide?</h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you choose the perfect room for your San Francisco adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Call (415) 641-0188
            </Button>
            <Button variant="outline" size="lg">
              Chat with Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}