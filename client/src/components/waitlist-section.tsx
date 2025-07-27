import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { CheckCircle, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  religionInterest: z.string().optional(),
  wantsUpdates: z.boolean().default(false),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

export default function WaitlistSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const { data: waitlistData } = useQuery({
    queryKey: ['/api/waitlist/count'],
  });

  const waitlistCount = waitlistData?.count || 5247;

  const form = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      religionInterest: "",
      wantsUpdates: false,
    },
  });

  const joinWaitlistMutation = useMutation({
    mutationFn: async (data: WaitlistForm) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/waitlist/count'] });
      toast({
        title: "Welcome to praygo!",
        description: "You've successfully joined our waitlist. We'll be in touch soon!",
      });
    },
    onError: (error: any) => {
      if (error.message.includes("409")) {
        toast({
          title: "Already registered",
          description: "This email is already on our waitlist!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (data: WaitlistForm) => {
    joinWaitlistMutation.mutate(data);
  };

  const benefits = [
    "Early access to all lessons and features",
    "Exclusive beta tester benefits",
    "Special founding member badge",
    "Free premium features for 6 months",
    "Direct input on feature development"
  ];

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-br from-emerald-50/50 to-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-4xl font-bold sacred-gray mb-4">Welcome to praygo!</h2>
            <p className="text-xl text-gray-600 mb-8">
              You're now #{waitlistCount + 1} on our waitlist. We'll send you updates as we approach launch!
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold sacred-gray mb-4">What happens next?</h3>
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <span className="text-gray-600">We'll email you with early access details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <span className="text-gray-600">Get your founding member badge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <span className="text-gray-600">Start your sacred learning journey!</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
                    <Badge className="mb-4 bg-gray-900 text-white hover:bg-gray-800">
            <Sparkles className="w-3 h-3 mr-1" />
            Join the AI Revolution
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Be Among the First to Experience AI-Powered Religious Education</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of learners waiting to explore world religions through our revolutionary AI-driven platform</p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl border border-sacred-border shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold sacred-primary mb-4">What You'll Get:</h3>
              <ul className="space-y-3 sacred-secondary">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-sacred-primary mr-3 w-5 h-5" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium sacred-primary mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...form.register("email")}
                    className="w-full px-4 py-3 border border-sacred-border rounded-xl focus:ring-2 focus:ring-sacred-primary focus:border-transparent transition-all duration-300"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="religion-interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Religions You're Most Interested In (Optional)
                  </Label>
                  <Select onValueChange={(value) => form.setValue("religionInterest", value)}>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300">
                      <SelectValue placeholder="Select your interests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="christianity">Christianity</SelectItem>
                      <SelectItem value="islam">Islam</SelectItem>
                      <SelectItem value="judaism">Judaism</SelectItem>
                      <SelectItem value="hinduism">Hinduism</SelectItem>
                      <SelectItem value="buddhism">Buddhism</SelectItem>
                      <SelectItem value="sikhism">Sikhism</SelectItem>
                      <SelectItem value="all">All of the above</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="updates"
                    checked={form.watch("wantsUpdates")}
                    onCheckedChange={(checked) => form.setValue("wantsUpdates", !!checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="updates" className="text-sm text-gray-600">
                    I'd like to receive updates about praygo development and launch notifications
                  </Label>
                </div>
                
                <Button
                  type="submit"
                  disabled={joinWaitlistMutation.isPending}
                  className="w-full bg-sacred-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
                >
                  {joinWaitlistMutation.isPending ? "Joining..." : "Join the Waitlist"}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">{waitlistCount.toLocaleString()}</span> people have already joined the waitlist
                </p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="flex -space-x-2">
                    {/* Placeholder for profile images */}
                    <div className="w-6 h-6 rounded-full border border-white bg-emerald-200"></div>
                    <div className="w-6 h-6 rounded-full border border-white bg-blue-200"></div>
                    <div className="w-6 h-6 rounded-full border border-white bg-purple-200"></div>
                  </div>
                  <span className="text-xs text-gray-400">+12 joined today</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
