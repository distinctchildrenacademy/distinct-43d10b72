
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SchoolHistory = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">A Legacy of Excellence: The History of Distinct Children Academy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-6">
              Distinct Children Academy was founded on September 15, 2023, with a clear vision to provide a nurturing environment that fosters academic excellence, moral values, and character development. The academy's inaugural year marked the beginning of an exciting journey, shaped by the contributions of its pioneering team.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Leadership and Governance</h2>
            <p className="mb-6">
              Under the visionary leadership of Professor Isidore Ekpe, the Academy's Proprietor and Supervisor, Distinct Children Academy continues to thrive. His wife, Mrs. Margaret Isidore Ekpe, serves as the Principal, offering invaluable support and guidance to ensure the institution's sustained growth and development.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Pioneer Team</h2>
            <p className="mb-6">
              The academy's first set of about 7 students set a strong foundation, paving the way for future generations of learners. In the 2023/2024 academic session, Distinct Children Academy commenced academic activities with an initial intake of seven pupils. Mrs. Ekebo Philip Johnson and Mrs. Glory Ikechukwu, the preschool teachers, played a vital role in shaping the academy's early years program. Pastor Daniel Barau, the school's spiritual father, provided blessings and prayers, ensuring a successful launch.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Partnerships</h2>
            <p className="mb-6">
              The academy's growth was bolstered by Assoc. Prof. Josiah Ekerette Ubong and Mr. Anthony Ubong, who effectively promoted the school within Anua Obio and its environs. Miss Enobong Ekpe, now an undergraduate at Anchor University, Lagos, was a key member of the teaching team during the academy's formative years.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">A Bright Future</h2>
            <p>
              Distinct Children Academy remains committed to academic excellence, moral values, and character development. With a solid foundation, the academy is well-positioned to make a lasting impact on its pupils, students, and the wider community.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchoolHistory;
