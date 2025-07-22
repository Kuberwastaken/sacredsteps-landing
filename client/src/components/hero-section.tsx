import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Star, Trophy, Flame, Heart, CheckCircle, Crown, Sparkles, Brain } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Powered by AI • 1,000+ learners joined</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Learn religions like <br />
              <span className="italic font-light text-gray-600">
                never before.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sacred Steps is the world's first AI-powered religious education platform. Experience personalized, gamified lessons that adapt to your learning style while exploring world religions with respect and authenticity.
            </motion.p>

            {/* AI Features Badges */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <Badge variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                <Brain className="w-3 h-3 mr-1" />
                AI-Generated Content
              </Badge>
              <Badge variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                <Star className="w-3 h-3 mr-1" />
                Personalized Learning
              </Badge>
              <Badge variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                <Trophy className="w-3 h-3 mr-1" />
                Gamified Experience
              </Badge>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent w-64"
                />
                <Button 
                  onClick={() => scrollToSection('waitlist')}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-r-lg font-medium transition-all duration-200 flex items-center"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 sacred-secondary" />
                <span className="text-sm sacred-secondary">1,000+ waitlist</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 sacred-secondary" />
                <span className="text-sm sacred-secondary">6 religions</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Phone Frame */}
            <div className="relative mx-auto w-80 h-[640px]">
              {/* Phone Outline */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl">
                {/* Screen */}
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-sacred-primary text-white">
                    <span className="text-sm font-medium">9:41 AM</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-6 py-4 border-b border-sacred-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-sacred-accent rounded-full flex items-center justify-center">
                          <BookOpen className="w-5 h-5 sacred-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold sacred-primary">Sacred Steps</h3>
                          <p className="text-xs sacred-secondary">Level 12 • Buddhism</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Flame className="w-5 h-5 text-orange-500" />
                        <span className="font-bold text-orange-500">7</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm sacred-secondary">Daily Goal</span>
                      <span className="text-sm font-medium sacred-primary">3/5 lessons</span>
                    </div>
                    <div className="w-full bg-sacred-light rounded-full h-2">
                      <div className="bg-sacred-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>

                  {/* Current Lesson */}
                  <div className="px-6 py-4">
                    <div className="bg-gradient-to-r from-sacred-primary to-gray-800 text-white p-4 rounded-2xl">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">Buddhism: Four Noble Truths</h4>
                        <Crown className="w-5 h-5 text-sacred-accent" />
                      </div>
                      <p className="text-sm opacity-90 mb-3">Learn about suffering, its causes, and the path to enlightenment</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-sacred-accent" />
                          <span className="text-sm">+50 XP</span>
                        </div>
                        <button className="bg-white text-sacred-primary px-4 py-2 rounded-lg text-sm font-medium">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="px-6 py-2">
                    <h5 className="text-sm font-medium sacred-primary mb-3">Recent Achievements</h5>
                    <div className="flex space-x-3">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-sacred-accent rounded-full flex items-center justify-center mb-1">
                          <Trophy className="w-6 h-6 sacred-primary" />
                        </div>
                        <span className="text-xs sacred-secondary">First Lesson</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-1">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <span className="text-xs sacred-secondary">Week Streak</span>
                      </div>
                      <div className="flex flex-col items-center opacity-50">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                          <Star className="w-6 h-6 text-gray-400" />
                        </div>
                        <span className="text-xs text-gray-400">Scholar</span>
                      </div>
                    </div>
                  </div>

                  {/* Hearts/Lives */}
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sacred-secondary">Hearts</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Heart key={i} className={`w-5 h-5 ${i < 4 ? 'text-red-500 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-sacred-border p-4">
                    <div className="flex justify-around">
                      <div className="flex flex-col items-center">
                        <BookOpen className="w-6 h-6 sacred-primary" />
                        <span className="text-xs sacred-primary font-medium mt-1">Learn</span>
                      </div>
                      <div className="flex flex-col items-center opacity-60">
                        <Users className="w-6 h-6 sacred-secondary" />
                        <span className="text-xs sacred-secondary mt-1">Friends</span>
                      </div>
                      <div className="flex flex-col items-center opacity-60">
                        <Trophy className="w-6 h-6 sacred-secondary" />
                        <span className="text-xs sacred-secondary mt-1">Leaderboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-sacred-accent rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-6 h-6 sacred-primary" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-white border-4 border-sacred-primary rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <Trophy className="w-8 h-8 sacred-primary" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/3 -left-8 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shadow-lg"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Flame className="w-5 h-5 text-orange-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
