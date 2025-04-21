import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SchoolRules = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            School Rules and Regulations
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Distinct Children Academy, we are committed to fostering a safe, supportive, and inclusive learning environment that promotes academic excellence, social growth, and emotional development. The following rules and regulations are designed to ensure the well-being and safety of all members of our school community.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Rules</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Respect:</strong> Treat everyone with kindness, compassion, and respect.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Honesty:</strong> Be truthful in all interactions and dealings.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Responsibility:</strong> Take accountability for your actions and their consequences.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Safety:</strong> Adhere to all safety guidelines to protect yourself and others.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Classroom Rules</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Punctuality:</strong> Arrive on time for classes, prepared with necessary materials.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Attention:</strong> Listen attentively to the teacher and follow instructions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Participation:</strong> Engage actively in class discussions and activities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Care of Materials:</strong> Use school materials and equipment responsibly.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Playground Rules</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Supervision:</strong> Play only under the supervision of a teacher or playground monitor.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Safety:</strong> Follow safety guidelines to ensure the well-being of yourself and others.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Respect:</strong> Treat peers with kindness and respect during playtime.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Equipment Use:</strong> Use playground equipment safely and appropriately.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Rules</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Authorized Access:</strong> Use school technology (e.g., laptops) only with teacher permission.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Safety:</strong> Follow safety protocols when using technology equipment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Respect:</strong> Interact respectfully with others when using technology facilities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Appropriate Content:</strong> Access only approved websites and content.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Consequences for Misbehavior</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Verbal Warning:</strong> A verbal warning will be issued for minor infractions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Disciplinary Action:</strong> Repeated or serious infractions may result in disciplinary measures.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Parental Notification:</strong> Parents will be contacted for serious or repeated violations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Suspension:</strong> Severe or persistent infractions may lead to suspension.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Rewards for Good Behavior</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Verbal Praise:</strong> Positive behavior will be acknowledged with verbal praise.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Stickers:</strong> Stickers may be awarded to recognize good conduct.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Special Privileges:</strong> Outstanding behavior may earn special privileges.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Awards:</strong> Exceptional behavior may be honored with awards.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Parental Support</h2>
            <p className="text-gray-700 mb-4">We encourage parents to support our school rules and regulations by:</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Reinforcing:</strong> Encouraging positive behavior at home.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Communicating:</strong> Discussing any concerns with teachers or school administrators.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Participating:</strong> Engaging in school events and activities, such as PTA meetings.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acknowledgement</h2>
            <p className="text-gray-700">
              By enrolling their children at Distinct Children Academy, parents and guardians acknowledge that they have read, understood, and agree to abide by the school rules and regulations outlined in this document.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchoolRules; 