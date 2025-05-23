
import { Image } from "lucide-react";

const GallerySection = () => {
  const images = [
    "/lovable-uploads/a8ff29ba-4fe2-456d-a94b-7a04a49d24f0.png",
    "/lovable-uploads/fd7a0e81-32bc-471f-89d6-7f011e56a1b6.png",
    "/lovable-uploads/aab03ccf-0448-4336-91b8-bd2dbe10e023.png",
    "/lovable-uploads/96c824da-17f2-4a61-a27c-fa088379ac81.png"
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into life at Distinct Children Academy through our photo gallery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
