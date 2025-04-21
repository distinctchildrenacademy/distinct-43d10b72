import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PowerSupply = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Power Supply Infrastructure
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Distinct Children Academy ensures a reliable power supply to support its academic, administrative, and extracurricular activities. Recognizing the challenges of inconsistent public power, the school has implemented a robust generator system to maintain seamless operations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Generator Supply System</h2>
            <p className="text-gray-700 mb-4">The system is designed for efficiency and reliability, with the following features:</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>High-Capacity Generators:</strong> Industrial-grade units capable of powering classrooms, laboratories, the library, and administrative offices.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Automated Transfer Switch:</strong> Seamlessly transitions between public power and generator supply to prevent disruptions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Regular Maintenance:</strong> Routine servicing ensures optimal performance, fuel efficiency, and system longevity.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of the Generator Supply System</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Uninterrupted Learning:</strong> Ensures continuous academic activities during power outages, maintaining lesson schedules.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Enhanced Productivity:</strong> Provides consistent electricity for teaching, research, and administrative tasks.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Improved Safety and Comfort:</strong> Powers essential systems like lighting, cooling, and security, creating a conducive learning environment.</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-6">
              By investing in this advanced power infrastructure, Distinct Children Academy underscores its commitment to delivering a supportive, efficient, and safe educational experience for its students and staff.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PowerSupply; 