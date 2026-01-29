import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Play } from "lucide-react";

const MyCourses = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Full Stack Web Development with React",
      instructor: "Sarah Johnson",
      progress: 45,
      totalModules: 12,
      completedModules: 5,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=300&auto=format&fit=crop",
      category: "Technical Skills",
      lastAccessed: "2 days ago"
    },
    {
      id: 2,
      title: "Effective Communication Mastery",
      instructor: "David Chen",
      progress: 12,
      totalModules: 8,
      completedModules: 1,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300&auto=format&fit=crop",
      category: "Soft Skills",
      lastAccessed: "1 week ago"
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Emily Davis",
      progress: 0,
      totalModules: 15,
      completedModules: 0,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop",
      category: "Technical Skills",
      lastAccessed: "Never"
    },
    {
      id: 4,
      title: "Aptitude & Logical Reasoning",
      instructor: "Mark Wilson",
      progress: 8,
      totalModules: 20,
      completedModules: 2,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300&auto=format&fit=crop",
      category: "Aptitude",
      lastAccessed: "3 days ago"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
        <p className="text-muted-foreground mt-1">Continue where you left off</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
               <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                     <Play className="h-6 w-6 ml-1" />
                  </Button>
               </div>
               <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 bg-background/90 backdrop-blur text-xs font-semibold rounded text-foreground">
                    {course.category}
                  </span>
               </div>
            </div>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
              <CardDescription className="line-clamp-1">by {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2 flex-1">
               <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{course.progress}% Complete</span>
                    <span>{course.completedModules}/{course.totalModules} Modules</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
               </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 border-t bg-muted/20 mt-auto">
               <div className="w-full flex items-center justify-between pt-3">
                  <span className="text-xs text-muted-foreground">Last accessed: {course.lastAccessed}</span>
                  <Button size="sm" variant={course.progress > 0 ? "default" : "outline"}>
                     {course.progress > 0 ? "Continue" : "Start"}
                  </Button>
               </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
