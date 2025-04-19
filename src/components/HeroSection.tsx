
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Future with Quality Education
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our academy and take the first step towards a brighter future. Our programs are designed to help you succeed.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>
              Enroll Now
            </Button>
            <Button variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
