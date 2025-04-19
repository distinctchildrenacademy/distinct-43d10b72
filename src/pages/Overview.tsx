
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Overview = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Overview</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Distinct Children Academy is committed to providing exceptional education 
            that nurtures academic excellence, character development, and creative 
            exploration. Our dedicated team of educators works tirelessly to create 
            an engaging learning environment where every child can thrive and reach 
            their full potential.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Overview;
