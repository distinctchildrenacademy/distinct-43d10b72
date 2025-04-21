import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SafetyChildProtection = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Safety and Child Protection
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Distinct Children Academy, the safety and well-being of our pupils and students are our utmost priorities. 
              We are dedicated to fostering a secure, nurturing environment that supports academic excellence, social growth, 
              and emotional development.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Safety Measures</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Access Control:</strong> The school premises are secured with access control systems, including locked gates, monitored doors, and CCTV surveillance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Emergency Response Plan:</strong> A comprehensive emergency response plan outlines procedures for fires, medical emergencies, and other potential crises.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>First Aid:</strong> A fully stocked first aid kit is available, and designated staff members are trained to provide basic first aid.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Fire Safety:</strong> Regular fire drills are conducted, and fire extinguishers are strategically placed throughout the premises.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Classroom Safety</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Teacher Supervision:</strong> Teachers maintain constant supervision of pupils and students during class hours.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Classroom Maintenance:</strong> The Head Teacher regularly inspects classrooms to ensure they are safe, clean, and well-maintained.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Materials and Equipment:</strong> Teaching materials and equipment are routinely checked to confirm they are safe and in good condition.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Playground Safety</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Playground Supervision:</strong> Teachers and playground monitors oversee pupils and students during recess and playtime.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Playground Maintenance:</strong> The playground is inspected regularly to ensure it remains safe and hazard-free.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Playground Equipment:</strong> All equipment is checked frequently to verify it is safe and in proper working order.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Health and Hygiene</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Hand Hygiene:</strong> Pupils and students are encouraged to practice regular handwashing, particularly after using the restroom.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Illness and Injury Reporting:</strong> Students must promptly report any illnesses or injuries to their teachers or school management.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Medical Care:</strong> Plans are in place to establish a basic medical care program for pupils and students in the near future.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cyber Safety</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Internet Filtering:</strong> The school employs internet filtering systems to block access to inappropriate websites and content.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Cyberbullying Policy:</strong> See detailed policy below.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Digital Citizenship:</strong> Pupils and students receive education on digital citizenship, covering online safety, etiquette, and responsible internet use.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Internet Use Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Distinct Children Academy is committed to providing safe and responsible internet access to enhance learning. 
              The following guidelines ensure appropriate use:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Access Restrictions:</strong> Internet access is limited to educational purposes under teacher supervision. Personal devices are not permitted for internet use during school hours.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Monitoring:</strong> All online activities are monitored to ensure compliance with school standards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Prohibited Activities:</strong> Accessing inappropriate content, engaging in unauthorized communication, or attempting to bypass filters is strictly prohibited.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Consequences:</strong> Violations may result in loss of internet privileges, parental notification, and further disciplinary action as deemed necessary.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cyberbullying Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Distinct Children Academy maintains a zero-tolerance stance on cyberbullying to ensure a respectful and safe environment. 
              The policy includes:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Definition:</strong> Cyberbullying includes any form of harassment, intimidation, or humiliation conducted via digital platforms, such as social media, messaging apps, or email.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Reporting:</strong> Students, parents, or staff must report incidents to a teacher or the school administration promptly. Anonymous reporting options are available.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Investigation:</strong> All reports are investigated thoroughly, with confidentiality maintained to the extent possible.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Consequences:</strong> Offenders may face disciplinary actions, including suspension, counseling, or parental involvement, depending on the severity.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Prevention:</strong> The school promotes awareness through workshops and lessons on respectful online behavior.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Transportation Safety</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Pick-up and Drop-off Procedures:</strong> Designated areas are established for safe pick-up and drop-off, with staff supervision to ensure order and security.</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 italic">
              This safety measures document will be reviewed and revised annually or as need be.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acknowledgement</h2>
            <p className="text-gray-700 leading-relaxed">
              By enrolling their children or wards at Distinct Children Academy, parents and guardians acknowledge that they have read, 
              understood, and agreed to abide by the safety measures and emergency procedures outlined in this document.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In case of an emergency, please contact the school administration at:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Tel:</strong> +234 812 730 9741, +234 701 471 5448</p>
              <p><strong>Email:</strong> ekpe60@yahoo.com, distinctchildrenacademy@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SafetyChildProtection; 