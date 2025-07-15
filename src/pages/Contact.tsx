import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Car, Plane, Train } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(415) 641-0188",
      description: "Call us anytime for reservations or questions"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "info@innsanfrancisco.com",
      description: "We typically respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "943 South Van Ness Ave, San Francisco, CA 94110",
      description: "Heart of the Mission District"
    },
    {
      icon: Clock,
      title: "Front Desk Hours",
      details: "24/7 Assistance Available",
      description: "Reception: 7:00 AM - 11:00 PM daily"
    }
  ];

  const transportOptions = [
    {
      icon: Plane,
      title: "From San Francisco Airport (SFO)",
      options: [
        "BART: Take BART to 16th St Mission (45 minutes)",
        "Taxi/Rideshare: 25-35 minutes depending on traffic",
        "Airport Shuttle: Shared shuttle service available"
      ]
    },
    {
      icon: Plane,
      title: "From Oakland Airport (OAK)",
      options: [
        "BART: Take BART to 16th St Mission (1 hour)",
        "Taxi/Rideshare: 45-60 minutes via Bay Bridge",
        "Bus: AC Transit + BART connection"
      ]
    },
    {
      icon: Car,
      title: "By Car",
      options: [
        "From I-101: Take Mission St exit",
        "From I-80: Take 9th St exit to Mission St",
        "Parking: Limited street parking, garage nearby"
      ]
    },
    {
      icon: Train,
      title: "Public Transportation",
      options: [
        "BART: 16th St Mission station (5 minute walk)",
        "Muni Bus: Multiple lines serve the area",
        "Historic Streetcar: F-line to downtown"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-primary">Contact Inn San Francisco</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help make your San Francisco visit unforgettable. 
            Reach out for reservations, questions, or local recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkin">Check-in Date</Label>
                  <Input id="checkin" type="date" />
                </div>
                <div>
                  <Label htmlFor="checkout">Check-out Date</Label>
                  <Input id="checkout" type="date" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input id="guests" type="number" min="1" max="6" placeholder="2" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your travel plans, special requirements, or any questions you have..."
                  rows={4}
                />
              </div>
              
              <Button variant="elegant" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <info.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary">{info.title}</h4>
                      <p className="font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Call for Immediate Booking
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Special Requests
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Getting Here */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Getting Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportOptions.map((transport, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <transport.icon className="h-5 w-5" />
                    {transport.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {transport.options.map((option, optionIndex) => (
                      <li key={optionIndex} className="text-muted-foreground text-sm">
                        • {option}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map placeholder and booking */}
        <Card className="bg-primary text-white mb-16">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Experience the charm of our Victorian mansion in the heart of San Francisco's 
                  Mission District. Book directly with us for the best rates and personalized service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                    Book Online
                  </Button>
                  <Button variant="secondary" size="lg">
                    Call (415) 641-0188
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-8 text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
                <p className="opacity-80 text-sm">
                  View our exact location and nearby attractions on our interactive map
                </p>
                <Button variant="outline" size="sm" className="mt-4 bg-white/20 border-white/30 text-white hover:bg-white/30">
                  View Map
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policies */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Important Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Check-in/Check-out</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Check-in: 3:00 PM - 11:00 PM</li>
                  <li>Check-out: By 11:00 AM</li>
                  <li>Early/late arrangements available</li>
                  <li>Valid ID required at check-in</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Cancellation Policy</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Free cancellation 48 hours prior</li>
                  <li>Late cancellations: One night charge</li>
                  <li>No-shows: Full booking charge</li>
                  <li>Special events may have different terms</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">House Rules</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>No smoking in rooms or common areas</li>
                  <li>Pets welcome with advance notice</li>
                  <li>Quiet hours: 10:00 PM - 7:00 AM</li>
                  <li>Complimentary WiFi throughout</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}