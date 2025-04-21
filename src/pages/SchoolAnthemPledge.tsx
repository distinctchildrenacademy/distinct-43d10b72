import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SchoolAnthemPledge = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Distinct Children Academy School Anthem & Pledge
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">School Anthem</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Distinct Children Academy is the mighty captain school,<br />
                That leads the new generation to showcase their potential.<br />
                Oh God, come and guide our pupils and students right<br />
                With wisdom and understanding, to build new unicorn leaders with a difference.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">School Pledge</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                I pledge to this citadel of learning to be a good child and diligent,<br />
                To grow in God's power and to build our generation.<br />
                So help me God.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchoolAnthemPledge; 