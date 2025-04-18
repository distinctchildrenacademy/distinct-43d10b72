
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-academy-purple" />,
      title: "Our Location",
      details: "Distinct Children Academy, Anua Obio Market Square, Opposite Godswill Akpabio International Stadium, Uyo, Akwa Ibom State, Nigeria",
    },
    {
      icon: <Phone className="h-5 w-5 text-academy-purple" />,
      title: "Phone Numbers",
      details: "+234 812 730 9741, +234 701 471 5448",
    },
    {
      icon: <Mail className="h-5 w-5 text-academy-purple" />,
      title: "Email Address",
      details: "distinctchildrenacademy@gmail.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-academy-purple" />,
      title: "Office Hours",
      details: "Monday-Friday: 8AM-4PM",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-academy-purple mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions about enrollment, our programs, or to schedule a tour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input 
                    id="first-name"
                    placeholder="Enter your first name" 
                    className="w-full" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input 
                    id="last-name"
                    placeholder="Enter your last name" 
                    className="w-full" 
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full" 
                />
              </div>
              
              <div className="space-y-2 mb-4">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="w-full" 
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="How can we help you?" 
                  className="w-full min-h-[120px]" 
                />
              </div>
              
              <Button className="w-full bg-academy-purple hover:bg-academy-purple-dark">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule a Tour</h3>
              <p className="text-gray-600 mb-6">
                We invite you to visit our campus and see our programs in action. 
                Schedule a personalized tour to experience the Distinct Children Academy difference.
              </p>
              <Button className="w-full bg-academy-purple hover:bg-academy-purple-dark">
                Book a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
