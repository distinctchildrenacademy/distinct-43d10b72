
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Ready to Begin Your Child's Educational Journey?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of learners and give your child the gift of quality education.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white">
            Enroll Now
          </Button>
          <Link to="/contact">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
