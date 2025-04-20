import React from 'react';

const AcademicPrograms = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Academic Programs
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide a nurturing environment where children discover their potential through innovative learning and creative exploration.
          </p>
          <p className="text-xl font-semibold text-blue-600">
            Comprehensive education from Creche to Senior Secondary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Creche</h3>
            <p className="text-gray-600">A nurturing environment for our youngest learners.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Nursery</h3>
            <p className="text-gray-600">Building foundational skills through play and exploration.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Primary School</h3>
            <p className="text-gray-600">Developing core academic and social skills.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Secondary School</h3>
            <p className="text-gray-600">Preparing students for academic and life success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms; 