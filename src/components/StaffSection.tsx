
import { Mail, PhoneCall } from "lucide-react";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const StaffSection = () => {
  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: "Dr. Elizabeth Parker",
      role: "Principal",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Dr. Parker has over 20 years of experience in education and holds a Ph.D. in Educational Leadership."
    },
    {
      id: 2,
      name: "Robert Wilson",
      role: "Early Childhood Program Director",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      bio: "With a background in child psychology, Mr. Wilson ensures our youngest learners receive developmentally appropriate education."
    },
    {
      id: 3,
      name: "Michelle Rodriguez",
      role: "Primary School Lead Teacher",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      bio: "Ms. Rodriguez specializes in innovative teaching methods that make learning engaging and effective for elementary students."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "STEM Coordinator",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      bio: "Mr. Thompson brings science and technology to life through hands-on experiments and interactive projects."
    }
  ];

  return (
    <section id="staff" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Staff</h2>
          <div className="w-20 h-1 bg-academy-purple mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of educators is committed to providing the highest quality education for your child.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-3">
                    <button aria-label="Email" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-academy-purple hover:bg-academy-purple hover:text-white transition-colors">
                      <Mail size={16} />
                    </button>
                    <button aria-label="Call" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-academy-purple hover:bg-academy-purple hover:text-white transition-colors">
                      <PhoneCall size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-academy-purple font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            "Our experienced faculty brings passion, expertise, and dedication to the classroom every day."
          </p>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
