import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const InstructionalAids = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Instructional Learning Aids
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Visual Aids</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nursery (3–5):</h3>
                <p>Picture charts (alphabet, numbers, shapes), flashcards (animals, colors), posters (nursery rhymes), story sequencing cards.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary 1–2 (6–8):</h3>
                <p>Alphabet/number/shape charts, word family charts, number lines, hundreds charts, science posters (plants, animals).</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary 3–5 (8–11):</h3>
                <p>Multiplication/division/fraction/decimal charts, geometry charts (2D/3D shapes), science diagrams (life cycles, ecosystems, human body), historical timelines, advanced/global maps.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Audio-Visual Aids</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nursery (3–5):</h3>
                <p>Nursery rhyme CDs, educational videos (shapes, colors), story time DVDs.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary 1–2 (6–8):</h3>
                <p>Educational videos (phonics, math, science), audio CDs (stories, songs), interactive whiteboards (letter tracing, counting games).</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary 3–5 (8–11):</h3>
                <p>Educational videos (multiplication, habitats, history documentaries), audio resources (audiobooks, podcasts), interactive whiteboards (graphing, virtual labs).</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Tactile and Real-Life Aids</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nursery (3–5):</h3>
                <p>Playdough, sensory bins, shape sorters, puzzles, real fruits/vegetables, everyday objects (cups, blocks), nature materials (leaves, rocks).</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary 1–2 (6–8):</h3>
                <p>Math manipulatives (counting blocks, pattern blocks), alphabet/letter tiles, shape sorters, puzzles, real objects (fruits, maps), basic science tools (magnifying glasses).</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary 3–5 (8–11):</h3>
                <p>Math manipulatives (base-ten blocks, fraction bars, algebra tiles), science equipment (microscopes, thermometers, circuit kits), puzzles (logic, crosswords), building kits (LEGO, robotics), real objects (plants, fossils), maps/globes, guest speakers, field trips.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Technology and Other Aids</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nursery (3–5):</h3>
                <p>Educational apps (shapes, colors), tablets with games, storybooks, rhyme charts, musical instruments (tambourines, maracas), Montessori aids (number rods, letter tracing).</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary 1–2 (6–8):</h3>
                <p>Educational apps (math, reading), online resources (kid-friendly websites), storybooks, flashcards (vocabulary, numbers), worksheets (math, writing).</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary 3–5 (8–11):</h3>
                <p>Educational apps (algebra, coding), online resources (virtual labs, history archives), virtual simulations, chapter books/novels, flashcards (vocabulary, math facts), worksheets (science, essay writing), subject-specific aids (math tools, grammar prompts).</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstructionalAids; 