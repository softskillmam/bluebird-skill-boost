import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertCircle, FileText } from "lucide-react";

const Assessments = () => {
  const assessments = [
    {
      id: 1,
      title: "React Fundamentals Quiz",
      course: "Full Stack Web Development",
      dueDate: "Oct 15, 2026",
      duration: "30 mins",
      status: "pending",
      questions: 20
    },
    {
      id: 2,
      title: "Communication Skills Assessment",
      course: "Effective Communication Mastery",
      dueDate: "Oct 10, 2026",
      duration: "45 mins",
      status: "completed",
      score: "85%",
      questions: 15
    },
    {
      id: 3,
      title: "Data Structures Mid-Term",
      course: "Technical Skills",
      dueDate: "Oct 20, 2026",
      duration: "60 mins",
      status: "upcoming",
      questions: 30
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "pending": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      case "upcoming": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4" />;
      case "pending": return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Assessments</h1>
        <p className="text-muted-foreground mt-1">Track your quizzes, tests, and assignments</p>
      </div>

      <div className="grid gap-4">
        {assessments.map((assessment) => (
          <Card key={assessment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary hidden sm:block">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{assessment.title}</h3>
                    <Badge variant="secondary" className={`capitalize flex items-center gap-1 ${getStatusColor(assessment.status)}`}>
                       {getStatusIcon(assessment.status)}
                       {assessment.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{assessment.course}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {assessment.duration}</span>
                    <span>•</span>
                    <span>{assessment.questions} Questions</span>
                    <span>•</span>
                    <span>Due: {assessment.dueDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
                {assessment.status === "completed" ? (
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Score</span>
                    <span className="text-2xl font-bold text-primary">{assessment.score}</span>
                  </div>
                ) : (
                  <Button className="w-full md:w-auto" variant={assessment.status === "pending" ? "default" : "outline"} disabled={assessment.status === "upcoming"}>
                    {assessment.status === "pending" ? "Start Assessment" : "Unlock Scheduled"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assessments;
