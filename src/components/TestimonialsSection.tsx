
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Distinct Children Academy has been a wonderful experience for our daughter. The teachers are caring and the curriculum is engaging. We've seen tremendous growth in her confidence and academic skills.",
      name: "Sarah Johnson",
      role: "Parent of Emma, Age 7",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      quote: "We couldn't be happier with our decision to enroll our son at Distinct Children Academy. The individualized attention and creative approach to learning has made such a positive impact on his development.",
      name: "Michael Peterson",
      role: "Parent of Lucas, Age 5",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "The nurturing environment at Distinct Children Academy has helped my shy daughter blossom socially while excelling academically. The staff truly cares about each child's unique needs.",
      name: "Jennifer Brooks",
      role: "Parent of Sophia, Age 6",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-academy-pastel-purple bg-opacity-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Parents Say</h2>
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
                "{testimonials[activeIndex].quote}"
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-academy-purple" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-academy-purple focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-academy-purple focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
