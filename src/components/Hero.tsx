import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Distinct Children
            <br />
            Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Nurturing young minds, fostering excellence, and building future leaders through quality education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions/enroll"
              className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 text-lg"
            >
              Enroll Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition duration-300 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 