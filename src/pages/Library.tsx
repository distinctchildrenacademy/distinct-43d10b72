import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Library = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            School Library
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              The library serves as a vibrant hub for learning, offering a diverse collection of resources tailored to various subjects, interests, and academic levels. It is designed to support students, educators, and lifelong learners with materials that foster academic growth and curiosity.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mathematics Section</h2>
            <p className="text-gray-700 mb-4">
              The mathematics section is a cornerstone of the library, featuring an extensive and well-organized collection to support primary and secondary school students, as well as those preparing for competitive exams.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key resources include:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Core Mathematics:</strong> Textbooks, workbooks, and reference guides covering foundational topics like arithmetic, geometry, algebra, and statistics, aligned with national curricula for primary and secondary levels.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Mental Mathematics:</strong> Books, puzzles, and interactive games to sharpen mental math skills, including speed calculation exercises, logic problems, and brain teasers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Common Entrance Preparation:</strong> Comprehensive study guides, past question papers, and practice tests tailored for Common Entrance exams, with step-by-step solutions and exam strategies.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Evergreen Solutions</h2>
            <p className="text-gray-700 mb-4">The Evergreen Solutions section provides multi-subject study materials, offering integrated resources for academic success. This includes:</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Study guides and revision notes for subjects like English, Science, Social Studies, and Languages.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Practice workbooks with graded exercises to reinforce concepts across primary and secondary levels.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Digital resources (e.g., e-books or access to online platforms) for interactive learning and self-assessment.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Sections</h2>
            <p className="text-gray-700 mb-4">Beyond mathematics, the library offers a rich variety of resources to cater to diverse learning needs:</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>English Language and Literature:</strong> Phonics books, grammar guides, classic and contemporary novels, poetry anthologies, and reading comprehension workbooks for all age groups.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Science:</strong> Textbooks, experiment manuals, and illustrated guides on biology, chemistry, physics, and environmental science, suitable for primary and secondary students.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Social Studies and History:</strong> Atlases, historical timelines, biographies, and cultural studies books to explore geography, civics, and world history.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>General Knowledge and Reference:</strong> Encyclopedias, dictionaries, and trivia books to encourage curiosity and independent research.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Children's Corner:</strong> Picture books, early readers, and interactive storybooks to spark a love for reading in younger learners.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Digital Resources:</strong> Access to educational apps, audiobooks, and online databases for research and remote learning.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Features</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Interactive Learning Tools:</strong> Puzzles, flashcards, and educational board games to make learning engaging.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Quiet Study Areas:</strong> Dedicated spaces for focused study and group collaboration.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Librarian Support:</strong> Trained staff to assist with resource selection and research guidance.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pupils and Students: Frequent Library Users</h2>
            <p className="text-gray-700 mb-4">The library at Distinct Children Academy is a vibrant hub frequented by students who engage with its diverse resources to support their academic and personal growth. Notable regular users include:</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Mfoniso Effiong:</strong> A dedicated student who uses the library to prepare for mathematics exams, often diving into textbooks and practice materials.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Effiong Effiong:</strong> A focused pupil who enjoys exploring mental mathematics books, puzzles, and logic games.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Samuel Effiong Harrison:</strong> A curious learner who frequently borrows science and technology books to fuel his interest in innovation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Emmanuella Valour Sunday:</strong> An avid reader who immerses herself in storybooks and novels from the fiction section.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Emmanuel Bassey Edet:</strong> A committed student who relies on the library's Common Entrance resources, including study guides and past questions, to excel in exams.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Library; 