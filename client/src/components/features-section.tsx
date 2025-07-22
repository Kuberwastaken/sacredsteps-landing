import { motion } from "framer-motion";
import { Heart, Flame, Trophy, Star, BookOpen, Plus, RotateCcw, BarChart3, Edit, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState, useEffect } from "react";

export default function FeaturesSection() {
  const [alexScore, setAlexScore] = useState(1250);
  const [yourScore, setYourScore] = useState(1100);
  const [heartCount, setHeartCount] = useState(5);

  // Auto-animate Alex surpassing in streak after component loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlexScore(1350);
      setYourScore(1150);
    }, 2000);

    // Reduce hearts over time
    const heartTimer = setInterval(() => {
      setHeartCount(prev => prev > 2 ? prev - 1 : 5);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(heartTimer);
    };
  }, []);

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
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Gamified Learning Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to<br />
            Master World Religions
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Earn Points & XP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-6 bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">Earn Points & XP</CardTitle>
                <p className="text-gray-600 text-sm">
                  Stay motivated by earning experience points for every lesson completed.
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-emerald-500 h-3 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <motion.div 
                    className="flex items-center justify-center text-emerald-600 font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-4 h-4 mr-2" />
                    +50 XP ✨
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Heart System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-6 bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">Heart System</CardTitle>
                <p className="text-gray-600 text-sm">
                  Manage your hearts. Mistakes cost a heart, but you can earn them back!
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: i < heartCount ? 1 : 0.7,
                        opacity: i < heartCount ? 1 : 0.3
                      }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Heart 
                        className={`w-8 h-8 transition-all duration-300 ${
                          i < heartCount ? 'text-red-500 fill-current' : 'text-gray-300'
                        }`} 
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Streak Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-6 bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">Streak Tracking</CardTitle>
                <p className="text-gray-600 text-sm">
                  Build a daily learning habit. Don't let the flame go out!
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, -5, 5, -5, 0],
                      scale: [1, 1.1, 1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <Flame className="w-12 h-12 text-orange-500 mr-3" />
                  </motion.div>
                  <motion.span 
                    className="text-4xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    15
                  </motion.span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Leaderboards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-6 bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">Leaderboards</CardTitle>
                <p className="text-gray-600 text-sm">
                  Compete with learners worldwide and climb to the top.
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center justify-between"
                    layout
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center">
                      <motion.div 
                        className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3"
                        animate={{ rotate: alexScore > 1300 ? [0, 360] : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        👑
                      </motion.div>
                      <span className="text-sm font-medium">Alex</span>
                    </div>
                    <motion.span 
                      className="text-emerald-600 font-medium"
                      animate={{ scale: alexScore > 1300 ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {alexScore} XP
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-between"
                    layout
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                        2
                      </div>
                      <span className="text-sm font-medium">You</span>
                    </div>
                    <motion.span 
                      className="text-emerald-600 font-medium"
                      animate={{ scale: yourScore > 1120 ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {yourScore} XP
                    </motion.span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Diverse Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-6 bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">Diverse Content</CardTitle>
                <p className="text-gray-600 text-sm">
                  Explore a rich library of faiths: Christianity, Islam, Judaism, Hinduism, and more.
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Plus, color: "text-orange-500" },
                    { icon: RotateCcw, color: "text-blue-500" },
                    { icon: Star, color: "text-purple-500" },
                    { icon: Flame, color: "text-orange-500" },
                    { icon: BarChart3, color: "text-green-500" },
                    { icon: BookOpen, color: "text-gray-600" }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        viewport={{ once: true }}
                      >
                        <IconComponent className={`w-8 h-8 ${item.color} mb-1`} />
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bite-sized Lessons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-6 bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">Bite-sized Lessons</CardTitle>
                <p className="text-gray-600 text-sm">
                  Master concepts through a structured flow of learning and practice.
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex justify-around items-center">
                  {[
                    { icon: BookOpen, iconColor: "text-emerald-600", label: "Learn" },
                    { icon: Edit, iconColor: "text-orange-600", label: "Practice" },
                    { icon: CheckCircle, iconColor: "text-purple-600", label: "Master" }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="flex flex-col items-center cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.4 }
                          }}
                        >
                          <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                        </motion.div>
                        <span className="text-xs text-gray-600">{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
