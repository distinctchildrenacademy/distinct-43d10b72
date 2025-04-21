import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdmissionRequirements = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Admission Requirements & How to Apply
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements for Distinct Children Academy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Distinct Children Academy is dedicated to fostering a supportive and inclusive learning environment for students from Creche to Senior Secondary School (SS2). Below are the admission requirements for all prospective students.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Admission Requirements</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Age:</strong> Students must meet the minimum age requirement for their desired class:
                  <ul className="ml-8 mt-2 space-y-2">
                    <li>Creche: 1–2 years</li>
                    <li>Nursery: 3–5 years</li>
                    <li>Primary School: 6–11 years</li>
                    <li>Junior Secondary School (JSS1): 12 years</li>
                    <li>Senior Secondary School (SS1–SS2): 13–15 years</li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Birth Certificate:</strong> A certified true copy of the student's birth certificate is required.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Immunization Card:</strong> A copy of the student's immunization record is required.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Passport Photograph:</strong> One recent passport-sized photograph of the student is required.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Registration Fee:</strong> A non-refundable registration fee is required, based on the class:
                  <ul className="ml-8 mt-2 space-y-2">
                    <li>Creche: ₦10,000</li>
                    <li>Nursery: ₦15,000</li>
                    <li>Primary School: ₦20,000</li>
                    <li>Junior Secondary School (JSS1): ₦25,000</li>
                    <li>Senior Secondary School (SS1–SS2): ₦30,000</li>
                  </ul>
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Examination Requirements</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Creche and Nursery</h3>
                <p className="text-gray-700">No entrance examination is required.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary School</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Entrance examination: Written test in English and Mathematics</li>
                  <li>Examination dates: August 1–7 each year</li>
                  <li>Examination fee: ₦1,000</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Junior Secondary School (JSS1)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Entrance examination: Written test in English, Mathematics, and General Knowledge</li>
                  <li>Examination dates: August 1–7 each year</li>
                  <li>Examination fee: ₦3,000</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Senior Secondary School (SS1–SS2)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Entrance examination: Written test in English, Mathematics, and relevant subjects</li>
                  <li>Examination dates: August 1–7 each year</li>
                  <li>Examination fee: ₦5,000</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Examination Format</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Primary School:</strong> Multiple-choice questions in English and Mathematics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Junior Secondary School (JSS1):</strong> Multiple-choice questions in English, Mathematics, and General Knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Senior Secondary School (SS1–SS2):</strong> Multiple-choice and essay questions in English, Mathematics, and relevant subjects</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Requirements</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Parents/Guardians:</strong> A Guarantor's Letter and a copy of the parent/guardian's Identification Card are required.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Special Needs:</strong> Students with special needs must provide a Medical Report and relevant documentation.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fees</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Registration Fee:</strong> ₦10,000–₦30,000 (based on the class, non-refundable)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Tuition Fee:</strong> ₦30,000–₦50,000 per term (based on the class)</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 italic">
              Note: Registration fees are separate from tuition fees and are non-refundable.
              Note: All fees are subject to change.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h2>
            <p className="text-gray-700">Payments can be made via bank transfer or cheque.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-4">For further inquiries, please contact the Admissions Office:</p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Phone:</strong> +234 812 730 9741, +234 905 908 4076</p>
              <p><strong>Email:</strong> ekpe60@yahoo.com, distinctchildrenacademy@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionRequirements; 