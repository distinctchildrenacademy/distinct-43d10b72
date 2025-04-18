
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonial = {
    quote: "Distinct Children Academy has been a wonderful experience for our child. The teachers are caring and the curriculum is engaging. We've seen tremendous growth in confidence and academic skills.",
    role: "Parent"
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-academy-pastel-purple bg-opacity-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-display">What Parents Say</h2>
          <div className="w-20 h-1 bg-academy-purple mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from families who have experienced the Distinct Children Academy difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 -left-6 w-20 h-20 text-academy-purple opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 relative z-10">
            <div className="mb-6">
              <p className="text-gray-700 text-lg md:text-xl italic">
                "{testimonial.quote}"
              </p>
            </div>
            
            <div>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
