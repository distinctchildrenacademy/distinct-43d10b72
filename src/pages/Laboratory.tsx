import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Laboratory = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            School Laboratory
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              The school's state-of-the-art laboratory is a cornerstone of hands-on learning, equipped with modern tools to facilitate experiments in physics, chemistry, and biology. It provides students with opportunities to engage in practical investigations, fostering critical thinking and scientific inquiry.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Equipment and Resources</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Microscopes:</strong> High-quality optical microscopes for observing cells, microorganisms, and tissue samples.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Thermometers and Sensors:</strong> Digital and analog thermometers for measuring temperature in experiments.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Measuring Instruments:</strong> Graduated cylinders, balances, and rulers for precise data collection.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Science Kits:</strong> Pre-assembled kits for conducting experiments in chemical reactions, electricity, and biology.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Computers and Software:</strong> Workstations with simulation software for virtual experiments and data analysis.</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-6">
              The laboratory is a popular space where students conduct research, perform experiments, and develop practical skills through engaging, inquiry-based activities.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Laboratory; 