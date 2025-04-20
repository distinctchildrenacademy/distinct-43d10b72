import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProprietorProfile = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Proprietor's Profile</h1>
            <div className="text-xl text-gray-600">
              <p className="font-semibold">Professor Isidore Ekpe</p>
              <p>Founder, CEO, and Proprietor,</p>
              <p>Distinct Children Academy</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-gray-700 leading-relaxed">
              Professor Isidore Ekpe is a renowned educator and visionary leader who has dedicated his life to providing high-quality education to future generations, especially among the youth at the University level. As the Founder, CEO, and Proprietor of Distinct Children Academy, he has created a beacon of academic excellence in Anua Obio Uyo, Akwa Ibom State, and beyond.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Philosophy and Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Professor Ekpe's guiding philosophy is rooted in the conviction that every child deserves access to quality education that fosters intellectual, emotional, and moral growth. He believes that education should be a transformative experience that empowers students to become responsible, compassionate, and productive members of society.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Under his leadership, Distinct Children Academy is committed to providing a well-rounded education that combines academic rigor with high moral values and discipline. The academy's mission is to nurture curious, creative, and critical thinkers who are equipped to succeed in an ever-changing world.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision and Values</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Professor Ekpe's vision for Distinct Children Academy is to create a vibrant community of learners that is characterized by:
            </p>
            <ul className="space-y-3 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Academic excellence and innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>High moral values and discipline</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Emotional intelligence and empathy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Creativity and critical thinking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Community service and social responsibility</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              He is deeply committed to upholding the values of integrity, transparency, and accountability in all aspects of the academy's operations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership and Experience</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a seasoned educator and administrator, Professor Ekpe brings a wealth of experience and expertise to his role as Proprietor of Distinct Children Academy. His leadership style is characterized by:
            </p>
            <ul className="space-y-3 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>A passion for education and child development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>A commitment to excellence and continuous improvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>A collaborative and inclusive approach to decision-making</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>A strong emphasis on community engagement and social responsibility</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Under his guidance, Distinct Children Academy is poised to become a model for educational excellence and innovation in Nigeria.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProprietorProfile; 