import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const CourseLibrary = () => {
   const allCourses = [
      {
         id: 1,
         title: "Advanced React Patterns",
         instructor: "Sarah Johnson",
         rating: 4.8,
         students: 1240,
         image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=300&auto=format&fit=crop",
         category: "Technical Skills",
         level: "Advanced",
         price: "Free"
      },
      {
         id: 2,
         title: "Public Speaking 101",
         instructor: "Michael Brown",
         rating: 4.9,
         students: 850,
         image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=300&auto=format&fit=crop",
         category: "Soft Skills",
         level: "Beginner",
         price: "Free"
      },
      {
         id: 3,
         title: "UI/UX Design Principles",
         instructor: "Jessica Lee",
         rating: 4.7,
         students: 2100,
         image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=300&auto=format&fit=crop",
         category: "Technical Skills",
         level: "Intermediate",
         price: "Free"
      },
      {
         id: 4,
         title: "Corporate Etiquette",
         instructor: "David Chen",
         rating: 4.6,
         students: 560,
         image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300&auto=format&fit=crop",
         category: "Soft Skills",
         level: "Beginner",
         price: "Free"
      },
      {
         id: 5,
         title: "Python for Data Analysis",
         instructor: "Emily Davis",
         rating: 4.9,
         students: 3400,
         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop",
         category: "Technical Skills",
         level: "Beginner",
         price: "Free"
      },
      {
         id: 6,
         title: "Logical Reasoning for Placements",
         instructor: "Mark Wilson",
         rating: 4.5,
         students: 1500,
         image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300&auto=format&fit=crop",
         category: "Aptitude",
         level: "Intermediate",
         price: "Free"
      }
    ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
         <div>
            <h1 className="text-3xl font-bold tracking-tight">Course Library</h1>
            <p className="text-muted-foreground mt-1">Explore new skills and courses</p>
         </div>
         <div className="flex w-full md:w-auto items-center gap-2">
            <div className="relative flex-1 md:w-64">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
               <Input placeholder="Search library..." className="pl-9" />
            </div>
            <Button variant="outline" size="icon">
               <Filter className="h-4 w-4" />
            </Button>
         </div>
      </div>

      {/* Filter Chips - Horizontal Scroll */}
      <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none">
         {["All", "Technical Skills", "Soft Skills", "Aptitude", "Design", "Management"].map((cat, i) => (
            <Button key={cat} variant={i === 0 ? "default" : "secondary"} size="sm" className="whitespace-nowrap rounded-full px-4">
               {cat}
            </Button>
         ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="relative h-44 overflow-hidden">
               <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur">{course.category}</Badge>
               </div>
               <div className="absolute bottom-2 right-2">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur text-xs">{course.level}</Badge>
               </div>
            </div>
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-start mb-1">
                 <h3 className="font-bold line-clamp-1 flex-1 pr-2 group-hover:text-primary transition-colors">{course.title}</h3>
              </div>
              <CardDescription className="line-clamp-1">{course.instructor}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-1 flex-1">
               <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                     <span className="text-amber-500">★</span>
                     <span>{course.rating}</span>
                  </div>
                  <span>{course.students} students</span>
               </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 border-t bg-muted/20 mt-auto">
               <div className="w-full flex items-center justify-between pt-3">
                  <span className="font-bold text-green-600 dark:text-green-400">{course.price}</span>
                  <Button size="sm" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                     View Details
                  </Button>
               </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseLibrary;
