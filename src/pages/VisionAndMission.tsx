import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VisionAndMission = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h1>
            <p className="text-xl text-gray-600">Our guiding principles and commitment to excellence</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision</h2>
            <ul className="space-y-4 text-gray-700">
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
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At Distinct Children Academy, we are dedicated to fostering a nurturing and dynamic learning environment that empowers every student to achieve academic excellence and embrace innovation. We instill high moral values, discipline, and emotional intelligence, while cultivating creativity, critical thinking, and a commitment to community service and social responsibility. Through personalized education and holistic development, we prepare our students to become compassionate, capable, and responsible global citizens.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Excellence and Innovation</h3>
                <p className="text-gray-700">
                  We strive for the highest standards of academic achievement and encourage innovative thinking and approaches to learning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">High Moral Values and Discipline</h3>
                <p className="text-gray-700">
                  We instill strong moral values and self-discipline, guiding students to make ethical choices and take responsibility for their actions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emotional Intelligence and Empathy</h3>
                <p className="text-gray-700">
                  We nurture emotional awareness and empathy, helping students understand and manage their emotions and relate compassionately to others.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Creativity and Critical Thinking</h3>
                <p className="text-gray-700">
                  We foster creative expression and critical thinking skills, encouraging students to question, analyze, and solve problems innovatively.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Service and Social Responsibility</h3>
                <p className="text-gray-700">
                  We promote active engagement with the community and a sense of responsibility toward society and the environment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700 mb-8">
              "We are deeply committed to upholding the values of integrity, transparency, and accountability in all aspects of the academy's operations." — Professor Isidore Ekpe
            </blockquote>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-gray-700 mb-4">At Distinct Children Academy, we are committed to:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Providing a safe, supportive, and inclusive learning environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Employing qualified and dedicated teaching staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Utilizing modern teaching methodologies and resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Fostering strong partnerships with parents and the community</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Continuously improving our programs and services</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed">
              Through our mission, vision, and values, we aim to prepare our students not just for academic success, but for life as well-rounded, responsible, and compassionate individuals who will make positive contributions to society.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisionAndMission; 