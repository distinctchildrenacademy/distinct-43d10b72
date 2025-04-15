
import { Check } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Child-centered learning approach",
    "Qualified and dedicated teachers",
    "Safe and nurturing environment",
    "Innovative curriculum",
    "Small class sizes for personalized attention",
    "Focus on holistic development"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our Academy</h2>
          <div className="w-20 h-1 bg-academy-purple mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why parents choose Distinct Children Academy for their child's educational journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-academy-pastel-yellow rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-academy-pastel-purple rounded-lg z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1577896852618-01bdf7d35b4c?q=80&w=1470&auto=format&fit=crop"
              alt="About Distinct Children Academy"
              className="rounded-lg shadow-lg w-full h-auto z-10 relative"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Empowering Children to Reach Their Full Potential
            </h3>
            <p className="text-gray-600">
              Established in 2008, Distinct Children Academy has been committed to 
              providing an exceptional educational experience that nurtures the intellectual, 
              social, emotional, and physical development of each child.
            </p>
            <p className="text-gray-600">
              Our educational philosophy is rooted in the belief that every child is unique 
              and deserves an environment that celebrates their individuality while challenging 
              them to grow and develop.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">What Sets Us Apart</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check className="h-5 w-5 text-academy-purple" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
