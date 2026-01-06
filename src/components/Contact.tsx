import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            {/* Success Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-background/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-10 transition-all duration-500",
                isSubmitted ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-[scale-in_0.5s_ease-out]">
                  <CheckCircle className="w-10 h-10 text-primary animate-[fade-in_0.3s_ease-out_0.2s_both]" />
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/30 animate-ping" />
              </div>
              <p className="mt-4 text-lg font-semibold text-foreground animate-[fade-in_0.3s_ease-out_0.4s_both]">
                Message Sent!
              </p>
              <p className="text-muted-foreground text-sm animate-[fade-in_0.3s_ease-out_0.5s_both]">
                We'll get back to you soon
              </p>
            </div>

            {/* Form Card */}
            <div className={cn(
              "bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300",
              isSubmitting && "scale-[0.98] opacity-80"
            )}>
              <div className="space-y-5">
                {/* Name Field */}
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-11 h-12 bg-background border-border focus:border-primary transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-11 h-12 bg-background border-border focus:border-primary transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="absolute left-3 top-4 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="pl-11 min-h-[120px] bg-background border-border focus:border-primary transition-all resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className={cn(
                    "flex items-center gap-2 transition-all duration-300",
                    isSubmitting ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                  )}>
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                  
                  {/* Loading Animation */}
                  <span className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-300",
                    isSubmitting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
