import { motion } from "framer-motion";
import { Play, Flame, Star, Heart, Check, Lock } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-100"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium sacred-gray">Now accepting early access</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold sacred-gray mb-6 leading-tight">
              Learn about{" "}
              <span className="gradient-text">world religions</span>{" "}
              like never before
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sacred Steps is the gamified learning platform that makes exploring religious traditions accessible, engaging, and rewarding for learners of all backgrounds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                onClick={() => scrollToSection('waitlist')}
                className="relative bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative">Join the Waitlist</span>
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('demo')}
                className="bg-white/80 backdrop-blur-sm sacred-gray px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="inline w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold sacred-gray">12+</div>
                <div className="text-sm text-gray-500">Religions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold sacred-gray">200+</div>
                <div className="text-sm text-gray-500">Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold sacred-gray">5,000+</div>
                <div className="text-sm text-gray-500">On Waitlist</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold sacred-gray">Today's Lesson</h3>
                  <p className="text-sm text-gray-500">Buddhism Basics</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-semibold">5</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div 
                    className="progress-bar h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="lesson-card p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Check className="text-white w-4 h-4" />
                    </div>
                    <span className="text-sm sacred-gray">The Four Noble Truths</span>
                  </div>
                </div>
                <div className="lesson-card p-4 rounded-xl border-2 border-blue-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                      <Play className="text-white w-4 h-4" />
                    </div>
                    <span className="text-sm sacred-gray font-medium">The Eightfold Path</span>
                  </div>
                </div>
                <div className="lesson-card p-4 rounded-xl opacity-60">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <Lock className="text-gray-500 w-4 h-4" />
                    </div>
                    <span className="text-sm text-gray-400">Meditation Practices</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Flame className="w-5 h-5 sacred-orange" />
                  <span className="text-sm font-semibold sacred-gray">7 day streak</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 sacred-orange" />
                  <span className="text-sm font-semibold sacred-gray">1,250 XP</span>
                </div>
              </div>
            </div>
            
            {/* Floating religious symbols */}
            <motion.div 
              className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-purple-600 text-xl">🕉</span>
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-orange-600 text-xl">✝</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
