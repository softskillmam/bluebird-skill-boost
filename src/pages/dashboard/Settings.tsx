import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Bell, Lock, PaintBucket, Upload } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your public profile details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="h-24 w-24 border-2 border-primary/20">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-2xl">DU</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                   <Button variant="outline" size="sm" className="gap-2">
                     <Upload className="h-4 w-4" /> Change Avatar
                   </Button>
                   <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" defaultValue="Demo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="demo@bluebirds.com" />
              </div>

               <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Tell us about yourself" />
              </div>
            </CardContent>
            <CardFooter className="justify-end border-t p-4">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose what you want to be notified about.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                  <div className="space-y-0.5">
                     <Label className="text-base">Course Updates</Label>
                     <p className="text-sm text-muted-foreground">Receive emails about new content in your courses.</p>
                  </div>
                  <Switch defaultChecked />
               </div>
               <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                  <div className="space-y-0.5">
                     <Label className="text-base">Assessment Reminders</Label>
                     <p className="text-sm text-muted-foreground">Get notified when a deadline is approaching.</p>
                  </div>
                  <Switch defaultChecked />
               </div>
               <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                  <div className="space-y-0.5">
                     <Label className="text-base">Discussion Replies</Label>
                     <p className="text-sm text-muted-foreground">Notify me when someone replies to my post.</p>
                  </div>
                  <Switch />
               </div>
            </CardContent>
             <CardFooter className="justify-end border-t p-4">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="mt-6">
           <Card>
            <CardHeader>
              <CardTitle>Account Security</CardTitle>
              <CardDescription>Manage your password and account settings.</CardDescription>
            </CardHeader>
             <CardContent className="space-y-4">
                 <div className="space-y-2">
                  <Label htmlFor="current">Current Password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New Password</Label>
                  <Input id="new" type="password" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm Password</Label>
                  <Input id="confirm" type="password" />
                </div>
             </CardContent>
             <CardFooter className="justify-end border-t p-4">
              <Button variant="outline" className="mr-2">Cancel</Button>
              <Button>Update Password</Button>
            </CardFooter>
           </Card>

            <Card className="mt-6 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>Irreversible actions for your account.</CardDescription>
            </CardHeader>
             <CardContent>
                <p className="text-sm text-muted-foreground">Deleting your account will remove all your data, including course progress and certificates.</p>
             </CardContent>
             <CardFooter className="border-t p-4 bg-destructive/5">
              <Button variant="destructive">Delete Account</Button>
            </CardFooter>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
