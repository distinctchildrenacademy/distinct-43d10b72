
import { BookOpen, PlayCircle, CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramsSection = () => {
  const programs = [
    {
      title: "After-School Programs",
      description: "Enriching after-school activities that extend learning beyond the classroom.",
      icon: <PlayCircle className="h-6 w-6 text-academy-purple" />,
      features: [
        "STEM activities",
        "Sports and games", 
        "Arts, Music, and Crafts",
        "Project-based learning"
      ]
    },
    {
      title: "Summer Camps",
      description: "Exciting summer programs that combine fun and education during school breaks.",
      icon: <CalendarDays className="h-6 w-6 text-academy-purple" />,
      features: [
        "Field trips",
        "Creative projects",
        "Outdoor adventures",
        "Special guest presentations"
      ]
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Development Programs</h2>
          <div className="w-20 h-1 bg-academy-purple mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse educational programs, designed to meet the needs of children at different developmental stages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  {program.icon}
                  <CardTitle className="ml-2 text-xl text-gray-800">{program.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">{program.description}</CardDescription>
              </CardHeader>
              {program.features.length > 0 && (
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-academy-purple"></div>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

