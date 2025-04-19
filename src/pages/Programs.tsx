
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Programs = () => {
  const programs = [
    {
      title: "Creche",
      ageRange: "Ages 1-2 years",
      description: "A nurturing environment for our youngest learners focused on early development and care."
    },
    {
      title: "Nursery",
      ageRange: "Ages 3-5 years",
      description: "Building foundational skills through play-based learning and structured activities."
    },
    {
      title: "Primary School",
      ageRange: "Ages 6-11 years",
      description: "Comprehensive education following the national curriculum with enhanced learning opportunities."
    },
    {
      title: "Secondary School",
      ageRange: "Ages 12-15 years",
      description: "Advanced academic programs preparing students for future success."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Academic Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div 
              key={program.title}
              className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h2>
              <p className="text-sm text-blue-600 mb-4">{program.ageRange}</p>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
