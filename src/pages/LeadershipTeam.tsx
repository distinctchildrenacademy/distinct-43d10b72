import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LeadershipTeam = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h1>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Proprietor</h2>
            <p className="text-gray-700 leading-relaxed">
              Prof. Isidore Ekpe (Professor of Business Administration, Postgraduate Diploma in Education)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Proprietress & Principal</h2>
            <p className="text-gray-700 leading-relaxed">
              Mrs. Margaret Isidore Ekpe (HND in Office Technology Management, Postgraduate Diploma in Education)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Administration</h2>
            <p className="text-gray-700 leading-relaxed">
              Vice Principal: Mr. Samuel Henry Udomah (BSc in Mechanical Engineering)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Teaching Staff</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Mrs. Margaret Isidore Ekpe (HND in Office Technology Management, Postgraduate Diploma in Education)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Mr. Samuel Henry Udomah (BSc in Mechanical Engineering)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Mrs. Ekebo Philip Johnson (BSc in Mass Communication)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Mrs. Elizabeth Victor Okono (NCE, BA in progress, Part-Time)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Mr. Isaac James Okon (BSc in Mass Communication)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Mrs. Becky Asian (BA in English, Diction Instructor, Part-Time)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Mrs. Glory Obasi (GCE O/L, Crèche Instructor)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LeadershipTeam; 