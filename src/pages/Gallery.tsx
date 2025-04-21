import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/lovable-uploads/c8b5820b-83d8-4f7c-9a37-109d9cf9990d.jpeg",
    "/lovable-uploads/f92743fb-4f8c-44a9-93f8-89464686fe23.png",
    "/lovable-uploads/e6bc19e5-e6ac-4ce8-9d83-2cf2d4600e04.png",
    "/lovable-uploads/e5a0609c-a259-485d-a32b-32bee9164322.png",
    "/lovable-uploads/d288a10f-373c-43f4-98b8-850e23c2ad8f.png",
    "/lovable-uploads/dafaf846-de7e-4ef6-992a-059dfcbb140c.png",
    "/lovable-uploads/86d52445-afc0-4aa6-b641-c7a6ccfd4931.png",
    "/lovable-uploads/76a42347-0844-4d04-a3cd-157296a2843e.png",
    "/lovable-uploads/847d742f-b7a2-4a15-9967-c670b0d48193.png",
    "/lovable-uploads/72af4288-7411-4579-884c-124d5e17199e.png",
    "/lovable-uploads/58e57eac-5bca-4180-b484-c860257b104c.png",
    "/lovable-uploads/2678bb26-f732-4766-ad24-4a5198c1dc4d.png",
    "/lovable-uploads/25a5e501-3458-4c53-b3a9-658dd9a99f66.png"
  ];

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Student Gallery</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our collection of memorable moments and achievements from Distinct Children Academy.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    onClick={() => handleImageClick(image, index)}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
                      onClick={() => setSelectedImage(null)}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
                      onClick={handlePrevious}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
                      onClick={handleNext}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    <img
                      src={selectedImage || image}
                      alt="Selected gallery image"
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
