import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Mail, Lock, User, ArrowRight, Key, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import toast from "react-hot-toast";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const authSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().optional(),
});

type AuthFormData = z.infer<typeof authSchema>;

const GoogleIcon = () => (
  <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
  </svg>
);

const Auth = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const form = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    if (activeTab === "signin") {
        if (data.email === "demo@bluebirds.com" && data.password === "123456") {
            toast.success("Welcome back! Redirecting to dashboard...");
            setTimeout(() => navigate("/dashboard"), 1000);
            return;
        }
    }

    toast.success(activeTab === "signin" ? "Welcome back! Successfully authenticated." : "Account created successfully!");
    console.log("Form Data:", data);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopiedField(null), 2000);
  };

  const AuthForm = () => (
    <div className="space-y-6 py-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tighter">
          {activeTab === "signin" ? "Welcome to BlueBirdsSolutions LMS" : "Create Account"}
        </h2>
        <p className="text-muted-foreground text-sm">
          {activeTab === "signin"
            ? "Enter your credentials to access the Portal"
            : "Sign up to get started with your learning journey"}
        </p>
      </div>

      <div className="grid gap-4">
        <Button variant="outline" className="w-full py-6 text-base font-medium relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <GoogleIcon />
          Continue with Google
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <AnimatePresence mode="wait">
          {activeTab === "signup" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="pl-10 h-12 bg-secondary/30 border-primary/20 focus:border-primary transition-colors"
                  {...form.register("name")}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="pl-10 h-12 bg-secondary/30 border-primary/20 focus:border-primary transition-colors"
              {...form.register("email")}
            />
          </div>
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="pl-10 h-12 bg-secondary/30 border-primary/20 focus:border-primary transition-colors"
              {...form.register("password")}
            />
          </div>
          {form.formState.errors.password && (
            <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-primary/25" 
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : activeTab === "signin" ? (
            "Sign In"
          ) : (
            "Create Account"
          )}
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">
          {activeTab === "signin" ? "Don't have an account?" : "Already have an account?"}
        </span>
        <button
          className="ml-1 text-primary hover:underline font-medium"
          onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
        >
          {activeTab === "signin" ? "Sign up" : "Sign in"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center bg-background relative overflow-hidden p-4 gap-8">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-600/20 opacity-20 blur-[100px]"></div>

      <Card className="w-full max-w-md overflow-hidden border-primary/10 shadow-2xl backdrop-blur-xl bg-background/60 order-2 lg:order-1">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full p-6">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-secondary/50 p-1">
            <TabsTrigger value="signin" className="rounded-sm data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">Sign In</TabsTrigger>
            <TabsTrigger value="signup" className="rounded-sm data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">Sign Up</TabsTrigger>
          </TabsList>
          <AuthForm />
        </Tabs>
      </Card>

      {/* Demo Credentials Card */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-md lg:w-80 order-1 lg:order-2"
      >
        <Card className="p-6 bg-background/80 backdrop-blur-md border-primary/20 shadow-xl">
           <div className="flex items-center gap-3 mb-4 text-primary">
              <div className="p-2 rounded-full bg-primary/10">
                 <Key className="w-5 h-5" />
              </div>
              <h3 className="font-semibold">Demo Access</h3>
           </div>
           <p className="text-sm text-muted-foreground mb-4">Use these credentials to test the student portal:</p>
           <div className="space-y-3">
              <div className="p-3 bg-secondary/50 rounded-lg border border-border/50">
                 <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Email</p>
                 <div className="flex items-center justify-between">
                    <code className="text-sm font-mono text-foreground">demo@bluebirds.com</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 ml-2"
                      onClick={() => copyToClipboard("demo@bluebirds.com", "email")}
                    >
                      {copiedField === "email" ? (
                        <Check className="h-3.5 w-3.5 text-green-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </Button>
                 </div>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg border border-border/50">
                 <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Password</p>
                 <div className="flex items-center justify-between">
                    <code className="text-sm font-mono text-foreground">123456</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 ml-2"
                      onClick={() => copyToClipboard("123456", "password")}
                    >
                      {copiedField === "password" ? (
                        <Check className="h-3.5 w-3.5 text-green-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </Button>
                 </div>
              </div>
           </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Auth;
