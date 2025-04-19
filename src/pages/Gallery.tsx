
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
