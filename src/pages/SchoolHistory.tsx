import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SchoolHistory = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">School History</h1>
            <p className="text-xl text-gray-600">A Legacy of Excellence: The History of Distinct Children Academy</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Distinct Children Academy was founded on September 15, 2023, with a clear vision to provide a nurturing environment that fosters academic excellence, moral values, and character development. The academy's inaugural year marked the beginning of an exciting journey, shaped by the contributions of its pioneering team.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership and Governance</h2>
            <p className="text-gray-700 leading-relaxed">
              Under the visionary leadership of Professor Isidore Ekpe, the Academy's Proprietor and Supervisor, Distinct Children Academy continues to thrive. His wife, Mrs. Margaret Isidore Ekpe, serves as the Principal, offering invaluable support and guidance to ensure the institution's sustained growth and development.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Pioneer Team</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The academy's first set of about 7 students set a strong foundation, paving the way for future generations of learners. In the 2023/2024 academic session, Distinct Children Academy commenced academic activities with an initial intake of seven pupils.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mrs. Ekebo Philip Johnson and Mrs. Glory Ikechukwu, the preschool teachers, played a vital role in shaping the academy's early years program. Pastor Daniel Barau, the school's spiritual father, provided blessings and prayers, ensuring a successful launch.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Partnerships</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The academy's growth was bolstered by Assoc. Prof. Josiah Ekerette Ubong and Mr. Anthony Ubong, who effectively promoted the school within Anua Obio and its environs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Miss Enobong Ekpe, now an undergraduate at Anchor University, Lagos, was a key member of the teaching team during the academy's formative years.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Bright Future</h2>
            <p className="text-gray-700 leading-relaxed">
              Distinct Children Academy remains committed to academic excellence, moral values, and character development. With a solid foundation, the academy is well-positioned to make a lasting impact on its pupils, students, and the wider community.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchoolHistory; 