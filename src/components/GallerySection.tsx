
import { Image } from "lucide-react";

const GallerySection = () => {
  const images = [
    "/lovable-uploads/c8b5820b-83d8-4f7c-9a37-109d9cf9990d.png",
    "/lovable-uploads/dafaf846-de7e-4ef6-992a-059dfcbb140c.png",
    "/lovable-uploads/d288a10f-373c-43f4-98b8-850e23c2ad8f.png",
    "/lovable-uploads/f92743fb-4f8c-44a9-93f8-89464686fe23.png",
    "/lovable-uploads/58e57eac-5bca-4180-b484-c860257b104c.png",
    "/lovable-uploads/76a42347-0844-4d04-a3cd-157296a2843e.png",
    "/lovable-uploads/72af4288-7411-4579-884c-124d5e17199e.png",
    "/lovable-uploads/2678bb26-f732-4766-ad24-4a5198c1dc4d.png",
    "/lovable-uploads/847d742f-b7a2-4a15-9967-c670b0d48193.png",
    "/lovable-uploads/e6bc19e5-e6ac-4ce8-9d83-2cf2d4600e04.png",
    "/lovable-uploads/e5a0609c-a259-485d-a32b-32bee9164322.png",
    "/lovable-uploads/25a5e501-3458-4c53-b3a9-658dd9a99f66.png",
    "/lovable-uploads/86d52445-afc0-4aa6-b641-c7a6ccfd4931.png",
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
