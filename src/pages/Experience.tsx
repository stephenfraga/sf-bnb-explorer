import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Camera, Coffee, TreePine, Building2, Palette, Heart } from "lucide-react";
import cityImage from "@/assets/sf-cityscape.jpg";

export default function Experience() {
  const attractions = [
    {
      name: "Golden Gate Bridge",
      distance: "4.2 miles",
      time: "20 min drive",
      type: "Landmark",
      icon: Building2,
      description: "San Francisco's most iconic symbol and engineering marvel"
    },
    {
      name: "Mission Dolores Park",
      distance: "0.8 miles", 
      time: "10 min walk",
      type: "Park",
      icon: TreePine,
      description: "Perfect for picnics with stunning city views"
    },
    {
      name: "Castro District",
      distance: "1.2 miles",
      time: "15 min walk",
      type: "Neighborhood",
      icon: Heart,
      description: "Historic LGBTQ+ neighborhood with vibrant culture"
    },
    {
      name: "Dolores Mission",
      distance: "0.3 miles",
      time: "4 min walk", 
      type: "Historic Site",
      icon: Building2,
      description: "San Francisco's oldest surviving structure from 1776"
    },
    {
      name: "16th St Mission BART",
      distance: "0.4 miles",
      time: "5 min walk",
      type: "Transportation",
      icon: MapPin,
      description: "Direct access to downtown and the entire Bay Area"
    },
    {
      name: "Valencia Street Corridor",
      distance: "0.2 miles",
      time: "3 min walk",
      type: "Shopping & Dining",
      icon: Coffee,
      description: "Hip street lined with cafes, bookstores, and galleries"
    }
  ];

  const experiences = [
    {
      title: "Mission District Food Tour",
      description: "Explore authentic Mexican cuisine and craft breweries",
      duration: "3 hours",
      price: "From $75",
      image: cityImage
    },
    {
      title: "Street Art & Murals Walk",
      description: "Discover the vibrant murals of Balmy Alley and beyond",
      duration: "2 hours", 
      price: "From $45",
      image: cityImage
    },
    {
      title: "Golden Gate Bridge Bike Tour",
      description: "Cycle across the iconic bridge to Sausalito",
      duration: "4 hours",
      price: "From $95",
      image: cityImage
    }
  ];

  const dayItineraries = [
    {
      title: "Historic San Francisco",
      activities: [
        { time: "9:00 AM", activity: "Breakfast at Inn San Francisco" },
        { time: "10:00 AM", activity: "Visit Mission Dolores" },
        { time: "11:30 AM", activity: "Explore Castro District" },
        { time: "1:00 PM", activity: "Lunch in Castro" },
        { time: "3:00 PM", activity: "Ride historic streetcar" },
        { time: "5:00 PM", activity: "Sunset at Twin Peaks" }
      ]
    },
    {
      title: "Foodie Adventure",
      activities: [
        { time: "9:00 AM", activity: "Continental breakfast" },
        { time: "10:30 AM", activity: "Tartine Bakery visit" },
        { time: "12:00 PM", activity: "Mission District food tour" },
        { time: "2:30 PM", activity: "Bi-Rite Creamery" },
        { time: "4:00 PM", activity: "Valencia Street cafes" },
        { time: "6:00 PM", activity: "Dinner at local favorite" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-primary">Experience San Francisco</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the best of San Francisco from our perfect Mission District location. 
            Walk to incredible attractions, dining, and cultural experiences.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-lg overflow-hidden shadow-elegant">
          <img 
            src={cityImage} 
            alt="San Francisco Experience"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">The Heart of the Mission</h2>
              <p className="text-lg opacity-90">Culture, cuisine, and convenience at your doorstep</p>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">What's Nearby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <attraction.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {attraction.type}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{attraction.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="h-3 w-3" />
                      {attraction.distance}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {attraction.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guided Experiences */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Curated Experiences</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join guided tours and experiences to discover San Francisco's hidden gems and local favorites.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-warm transition-all duration-300">
                <div className="relative">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg">
                    <span className="text-sm font-bold">{experience.price}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{experience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {experience.duration}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Day Itineraries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Sample Day Itineraries</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dayItineraries.map((itinerary, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-3">
                    <Camera className="h-6 w-6" />
                    {itinerary.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {itinerary.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-primary min-w-[80px]">
                          {activity.time}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {activity.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Get Full Itinerary
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Local Tips */}
        <Card className="bg-gradient-elegant mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">Local Insider Tips</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Best Times to Visit</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Golden Gate Bridge: Early morning for clear views</li>
                  <li>• Dolores Park: Weekend afternoons for people watching</li>
                  <li>• Mission murals: Anytime, but morning light is perfect</li>
                  <li>• Valencia Street: Evening for the best cafe atmosphere</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Transportation Tips</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Buy a Clipper Card for easy public transit</li>
                  <li>• Walk when possible - San Francisco is very walkable</li>
                  <li>• Use rideshare for late evening returns</li>
                  <li>• Consider bike rentals for Golden Gate Bridge visits</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Concierge CTA */}
        <Card className="bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Personal Recommendations?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Our knowledgeable staff knows San Francisco inside and out. Let us help you plan 
              the perfect itinerary based on your interests and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Speak with Concierge
              </Button>
              <Button variant="secondary" size="lg">
                Email Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}