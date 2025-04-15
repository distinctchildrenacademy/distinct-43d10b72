
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

const NewsEventsSection = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Annual Science Fair Next Month",
      date: "May 15, 2025",
      excerpt: "Students will showcase their innovative science projects at our annual Science Fair. Parents and community members are invited to attend.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1472&auto=format&fit=crop",
      category: "Event"
    },
    {
      id: 2,
      title: "New Art Program Launching This Fall",
      date: "April 10, 2025",
      excerpt: "We're excited to announce our expanded arts curriculum featuring specialized instruction in painting, sculpture, and digital art.",
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=1374&auto=format&fit=crop",
      category: "News"
    },
    {
      id: 3,
      title: "Parent-Teacher Conferences Scheduled",
      date: "June 5, 2025",
      excerpt: "Bi-annual parent-teacher conferences will be held next month. Sign up online to reserve your preferred time slot.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop",
      category: "Event"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">News & Upcoming Events</h2>
          <div className="w-20 h-1 bg-academy-purple mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news and events happening at Distinct Children Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.category === "Event" 
                    ? "bg-academy-pastel-orange text-orange-700" 
                    : "bg-academy-pastel-blue text-blue-700"
                  }`}>
                    {item.category}
                  </span>
                </div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="inline-flex items-center text-academy-purple font-medium hover:underline">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="text-academy-purple border-academy-purple hover:bg-academy-pastel-purple">
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
