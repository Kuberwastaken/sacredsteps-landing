import { motion } from "framer-motion";
import { BookOpen, Trophy, Flame, Heart, Puzzle, Medal, Check } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Lessons",
    description: "Bite-sized lessons with cultural context, key terms, and learning objectives designed for comprehensive understanding.",
    color: "bg-emerald-500",
    checkColor: "text-emerald-500",
    items: ["Cultural context", "Key terminology", "Clear objectives"]
  },
  {
    icon: Trophy,
    title: "XP & Achievements",
    description: "Earn experience points, unlock badges, and track your learning journey with comprehensive progress systems.",
    color: "bg-blue-500",
    checkColor: "text-blue-500",
    items: ["XP rewards", "Achievement badges", "Progress tracking"]
  },
  {
    icon: Flame,
    title: "Daily Streaks",
    description: "Build consistent learning habits with daily streak tracking and special rewards for dedication.",
    color: "bg-orange-500",
    checkColor: "text-orange-500",
    items: ["Daily motivation", "Streak rewards", "Habit building"]
  },
  {
    icon: Heart,
    title: "Hearts & Lives",
    description: "Learn from mistakes with a forgiving hearts system that encourages thoughtful engagement.",
    color: "bg-red-500",
    checkColor: "text-red-500",
    items: ["Mistake recovery", "Thoughtful learning", "Progress protection"]
  },
  {
    icon: Puzzle,
    title: "Diverse Exercises",
    description: "Master concepts through multiple-choice, matching, fill-in-the-blank, and true/false questions.",
    color: "bg-purple-500",
    checkColor: "text-purple-500",
    items: ["Multiple formats", "Adaptive difficulty", "Comprehensive practice"]
  },
  {
    icon: Medal,
    title: "Social Learning",
    description: "Connect with other learners through friendly leaderboards and community challenges.",
    color: "bg-gradient-to-r from-emerald-500 to-blue-600",
    checkColor: "text-emerald-500",
    items: ["Friendly competition", "Community support", "Shared goals"]
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-emerald-50/50 to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold sacred-gray mb-4">Learn Through Play</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the power of gamified religious education with features designed to make learning engaging and memorable</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white text-lg w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold sacred-gray mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <Check className={`${feature.checkColor} mr-2 w-4 h-4`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
