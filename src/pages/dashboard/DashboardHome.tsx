import { Play, Clock, Award, TrendingUp, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardHome = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Demo User! 👋</h1>
          <p className="text-muted-foreground mt-1">You have completed 3 lessons this week. Keep it up!</p>
        </div>
        <Button className="bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25">
           View Learning Path
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Enrolled Courses</p>
              <h3 className="text-2xl font-bold">4</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Hours Learned</p>
              <h3 className="text-2xl font-bold">12.5</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
             <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg. Score</p>
              <h3 className="text-2xl font-bold">88%</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Certificates</p>
              <h3 className="text-2xl font-bold">1</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Continue Learning - Spans 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Continue Learning</h2>
            <Button variant="link" className="text-primary p-0">View All</Button>
          </div>

          <Card className="overflow-hidden border-primary/20 shadow-sm hover:shadow-md transition-all group cursor-pointer relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <CardContent className="p-0 flex flex-col sm:flex-row">
               <div className="w-full sm:w-48 h-32 sm:h-auto bg-muted relative shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                     <Play className="h-10 w-10 text-white fill-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  {/* Placeholder image would go here */}
               </div>
               <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                     <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        Technical Skills
                     </span>
                     <span className="text-xs text-muted-foreground">Module 3 • Lesson 2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">full Stack Web Development with React</h3>
                  <div className="space-y-2 mt-auto">
                     <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>45%</span>
                     </div>
                     <Progress value={45} className="h-2" />
                  </div>
               </div>
            </CardContent>
          </Card>

           <Card className="overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer relative">
             <div className="absolute top-0 left-0 w-1 h-full bg-muted-foreground/30" />
            <CardContent className="p-0 flex flex-col sm:flex-row">
               <div className="w-full sm:w-48 h-32 sm:h-auto bg-muted relative shrink-0">
                   <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                     <Play className="h-10 w-10 text-white fill-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
               </div>
               <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                     <span className="text-xs font-semibold px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                        Soft Skills
                     </span>
                     <span className="text-xs text-muted-foreground">Module 1 • Lesson 4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Effective Communication Mastery</h3>
                  <div className="space-y-2 mt-auto">
                     <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>12%</span>
                     </div>
                     <Progress value={12} className="h-2" />
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Widgets - Spans 1 col */}
        <div className="space-y-6">
           {/* Announcements */}
           <Card>
              <CardHeader>
                 <CardTitle className="text-lg">Announcements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="p-3 rounded-lg bg-secondary/50 border border-border/50">
                    <div className="flex items-center justify-between mb-1">
                       <span className="text-xs font-semibold text-primary">New Course</span>
                       <span className="text-[10px] text-muted-foreground">2 hrs ago</span>
                    </div>
                    <p className="text-sm font-medium">Advanced Python for Data Science is now live!</p>
                 </div>
                 <div className="p-3 rounded-lg bg-secondary/50 border border-border/50">
                    <div className="flex items-center justify-between mb-1">
                       <span className="text-xs font-semibold text-amber-600">Maintenance</span>
                       <span className="text-[10px] text-muted-foreground">1 day ago</span>
                    </div>
                    <p className="text-sm font-medium">Scheduled downtime on Sunday 2 AM - 4 AM.</p>
                 </div>
              </CardContent>
           </Card>

           {/* Upcoming Assessments */}
           <Card>
              <CardHeader>
                 <CardTitle className="text-lg">Upcoming Assessments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center justify-center w-10 h-10 rounded border bg-background text-xs font-bold shadow-sm">
                       <span>OCT</span>
                       <span className="text-primary">15</span>
                    </div>
                    <div>
                       <p className="font-semibold text-sm">React Basics Quiz</p>
                       <p className="text-xs text-muted-foreground">10:00 AM - 11:30 AM</p>
                       <Button size="sm" variant="outline" className="h-6 text-xs mt-1 w-full">View Details</Button>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
