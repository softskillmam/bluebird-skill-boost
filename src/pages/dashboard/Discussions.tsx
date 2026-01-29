import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare, ThumbsUp, Plus } from "lucide-react";

const Discussions = () => {
  const threads = [
    {
      id: 1,
      author: "Alex Thompson",
      avatar: "https://i.pravatar.cc/150?u=alex",
      title: "Help understanding React useEffect dependency array",
      course: "Full Stack Web Development",
      preview: "I'm confused about when exactly the cleanup function runs in useEffect. Can someone explain with an example?",
      likes: 12,
      replies: 5,
      time: "2 hours ago",
      tags: ["React", "Hooks"]
    },
    {
      id: 2,
      author: "Maria Garcia",
      avatar: "https://i.pravatar.cc/150?u=maria",
      title: "Tips for public speaking anxiety?",
      course: "Effective Communication",
      preview: "I have my final presentation next week and I'm really nervous. Any quick tips to handle the jitters?",
      likes: 24,
      replies: 18,
      time: "5 hours ago",
      tags: ["Soft Skills", "Advice"]
    },
    {
      id: 3,
      author: "James Wilson",
      avatar: "https://i.pravatar.cc/150?u=james",
      title: "Resource sharing: Best Data Science Cheat Sheets",
      course: "Data Science Fundamentals",
      preview: "Found these amazing cheat sheets for Pandas and NumPy. Thought I'd share them here!",
      likes: 45,
      replies: 8,
      time: "1 day ago",
      tags: ["Resources", "Python"]
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Discussions</h1>
          <p className="text-muted-foreground mt-1">Connect with peers and instructors</p>
        </div>
        <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" /> New Discussion
        </Button>
      </div>

      <div className="flex items-center space-x-2">
         <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search discussions..." className="pl-9" />
         </div>
      </div>

      <div className="grid gap-4">
        {threads.map((thread) => (
          <Card key={thread.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={thread.avatar} />
                  <AvatarFallback>{thread.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                     <div>
                        <h3 className="font-semibold text-lg hover:text-primary transition-colors">{thread.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">Posted by {thread.author} • {thread.time}</p>
                     </div>
                     <div className="hidden sm:block">
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">{thread.course}</span>
                     </div>
                  </div>
                  
                  <p className="text-sm text-foreground/80 mb-4 line-clamp-2">{thread.preview}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                     <div className="flex flex-wrap gap-2">
                        {thread.tags.map(tag => (
                           <span key={tag} className="text-xs px-2 py-0.5 border rounded text-muted-foreground">#{tag}</span>
                        ))}
                     </div>
                     <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1 hover:text-foreground"><ThumbsUp className="h-4 w-4" /> {thread.likes}</span>
                        <span className="flex items-center gap-1 hover:text-foreground"><MessageSquare className="h-4 w-4" /> {thread.replies} Replies</span>
                     </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Discussions;
