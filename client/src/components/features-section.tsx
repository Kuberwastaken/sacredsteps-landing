import { motion } from "framer-motion";
import { BookOpen, Trophy, Flame, Heart, Puzzle, Medal, Check, Brain, Sparkles, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const features = [
  {
    icon: Brain,
    title: "AI-Generated Content",
    description: "Every lesson, quiz, and explanation is crafted by advanced AI to ensure accuracy, cultural sensitivity, and engaging educational experiences.",
    color: "bg-gray-900",
    checkColor: "text-gray-600",
    badge: "AI-Powered",
    badgeVariant: "default" as const,
    items: ["Dynamic content creation", "Cultural accuracy", "Personalized explanations"]
  },
  {
    icon: Sparkles,
    title: "Adaptive Learning",
    description: "AI analyzes your progress and learning style to customize lesson difficulty, pacing, and content delivery for optimal understanding.",
    color: "bg-gray-800",
    checkColor: "text-gray-600",
    badge: "Smart AI",
    badgeVariant: "secondary" as const,
    items: ["Personalized pacing", "Adaptive difficulty", "Learning style analysis"]
  },
  {
    icon: BookOpen,
    title: "Interactive Lessons",
    description: "Bite-sized lessons with cultural context, key terms, and learning objectives designed for comprehensive understanding.",
    color: "bg-gray-700",
    checkColor: "text-gray-600",
    badge: "Core Feature",
    badgeVariant: "outline" as const,
    items: ["Cultural context", "Key terminology", "Clear objectives"]
  },
  {
    icon: Trophy,
    title: "XP & Achievements",
    description: "Earn experience points, unlock badges, and track your learning journey with comprehensive progress systems.",
    color: "bg-gray-600",
    checkColor: "text-gray-600",
    badge: "Gamification",
    badgeVariant: "outline" as const,
    items: ["XP rewards", "Achievement badges", "Progress tracking"]
  },
  {
    icon: Flame,
    title: "Daily Streaks",
    description: "Build consistent learning habits with daily streak tracking and special rewards for dedication.",
    color: "bg-gray-500",
    checkColor: "text-gray-600",
    badge: "Motivation",
    badgeVariant: "outline" as const,
    items: ["Daily motivation", "Streak rewards", "Habit building"]
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "AI provides immediate, detailed explanations for every answer, helping you understand concepts deeply and learn from mistakes.",
    color: "bg-gray-400",
    checkColor: "text-gray-600",
    badge: "AI Feedback",
    badgeVariant: "secondary" as const,
    items: ["Instant explanations", "Detailed feedback", "Learn from mistakes"]
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gray-900 text-white hover:bg-gray-800">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Learning Platform
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Religious Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the future of learning with AI-generated content that adapts to your pace and learning style</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="text-white text-lg w-6 h-6" />
                      </div>
                      <Badge variant={feature.badgeVariant} className="text-xs border-gray-300 text-gray-700">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <Check className={`${feature.checkColor} mr-3 w-4 h-4`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
