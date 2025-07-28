import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Star, Trophy, Flame, Heart, CheckCircle, Crown, Sparkles, Brain } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('learn');
  const [streakCount, setStreakCount] = useState(7);
  const [progress, setProgress] = useState(60);
  const [hearts, setHearts] = useState(4);
  const [completedLessons, setCompletedLessons] = useState(3);
  const [isLessonCompleted, setIsLessonCompleted] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContinueLesson = () => {
    if (!isLessonCompleted) {
      setIsLessonCompleted(true);
      setCompletedLessons(prev => Math.min(prev + 1, 5));
      setProgress(prev => Math.min(prev + 20, 100));
      setStreakCount(prev => prev + 1);
    }
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleHeartClick = () => {
    if (hearts < 5) {
      setHearts(prev => prev + 1);
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
              <span className="text-sm font-medium text-gray-700">With the Magic of AI</span>
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
              praygo is the world's first AI-powered religious education platform. Experience personalized, gamified lessons that adapt to your learning style while exploring world religions with respect and authenticity.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent w-64 h-12"
              />
              <Button 
                onClick={() => scrollToSection('waitlist')}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 rounded-lg font-medium transition-all duration-200 flex items-center h-12 border border-gray-900"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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
            <div className="relative mx-auto w-72 h-[600px]">
              {/* Phone Outline */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] shadow-2xl border-[3px] border-gray-700">
                {/* Screen */}
                <div className="absolute top-2 left-2 right-2 bottom-2 bg-white rounded-[2rem] overflow-hidden">
                  {/* Top Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-2 right-3 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                  </div>
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-1 pt-7 text-white absolute top-0 left-0 right-0 z-30">
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-6 py-4 pt-10 border-b border-sacred-border bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                          <img 
                            src="public/assets/logo.png" 
                            alt="praygo Logo" 
                            className="w-10 h-10"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold sacred-primary">praygo</h3>
                          <p className="text-xs sacred-secondary">Level 12 • Buddhism</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setStreakCount(prev => prev + 1)}>
                        <Flame className="w-5 h-5 text-orange-500" />
                        <motion.span 
                          key={streakCount}
                          className="font-bold text-orange-500"
                          initial={{ scale: 1 }}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.3 }}
                        >
                          {streakCount}
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm sacred-secondary">Daily Goal</span>
                      <span className="text-sm font-medium sacred-primary">{completedLessons}/5 lessons</span>
                    </div>
                    <div className="w-full bg-sacred-light rounded-full h-2 cursor-pointer" onClick={() => setProgress(prev => Math.min(prev + 10, 100))}>
                      <motion.div 
                        className="bg-sacred-accent h-2 rounded-full" 
                        initial={{ width: '60%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Current Lesson */}
                  <div className="px-6 py-4">
                    <div className="bg-gradient-to-r from-sacred-primary to-gray-800 text-white p-4 rounded-2xl">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold flex items-center">Buddhism: Four Noble Truths</h4>
                        <Crown className="w-5 h-5 text-yellow-400 -mt-0.5" />
                      </div>
                      <p className="text-sm opacity-90 mb-3">Learn about suffering, its causes, and the path to enlightenment</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">+50 XP</span>
                        </div>
                        <motion.button 
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            isLessonCompleted 
                              ? 'bg-green-500 text-white' 
                              : 'bg-white text-gray-800 hover:bg-gray-100 shadow-sm'
                          }`}
                          onClick={handleContinueLesson}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isLessonCompleted ? '✓ Completed' : 'Continue'}
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="px-6 py-3">
                    <h5 className="text-sm font-medium sacred-primary mb-2">Recent Achievements</h5>
                    <div className="flex space-x-4 justify-center">
                      <motion.div 
                        className="flex flex-col items-center cursor-pointer"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setStreakCount(prev => prev + 1)}
                      >
                        <div className="w-10 h-10 bg-sacred-accent rounded-full flex items-center justify-center mb-1">
                          <Trophy className="w-5 h-5 sacred-primary" />
                        </div>
                        <span className="text-xs sacred-secondary text-center">First Lesson</span>
                      </motion.div>
                      <motion.div 
                        className="flex flex-col items-center cursor-pointer"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setProgress(prev => Math.min(prev + 15, 100))}
                      >
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-1">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-xs sacred-secondary text-center">Week Streak</span>
                      </motion.div>
                      <motion.div 
                        className="flex flex-col items-center cursor-pointer"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          setCompletedLessons(5);
                          setProgress(100);
                        }}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-all duration-300 ${
                          completedLessons >= 5 ? 'bg-purple-100' : 'bg-gray-100'
                        }`}>
                          <Star className={`w-5 h-5 ${completedLessons >= 5 ? 'text-purple-600' : 'text-gray-400'}`} />
                        </div>
                        <span className={`text-xs text-center ${completedLessons >= 5 ? 'sacred-secondary' : 'text-gray-400'}`}>Scholar</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hearts/Lives */}
                  <div className="px-6 py-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sacred-secondary">Hearts</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            whileTap={{ scale: 0.8 }}
                            onClick={handleHeartClick}
                            className="cursor-pointer"
                          >
                            <Heart 
                              className={`w-4 h-4 transition-all duration-200 ${
                                i < hearts ? 'text-red-500 fill-current' : 'text-gray-300 hover:text-red-300'
                              }`} 
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-sacred-border py-1.5 px-2">
                    <div className="flex justify-around items-center">
                      <motion.div 
                        className={`flex flex-col items-center py-1 px-2 cursor-pointer ${
                          activeTab === 'learn' ? '' : 'opacity-60'
                        }`}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleTabClick('learn')}
                      >
                        <BookOpen className={`w-4 h-4 ${activeTab === 'learn' ? 'sacred-primary' : 'sacred-secondary'}`} />
                        <span className={`text-xs mt-0.5 ${
                          activeTab === 'learn' ? 'sacred-primary font-medium' : 'sacred-secondary'
                        }`}>Learn</span>
                      </motion.div>
                      <motion.div 
                        className={`flex flex-col items-center py-1 px-2 cursor-pointer ${
                          activeTab === 'friends' ? '' : 'opacity-60'
                        }`}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleTabClick('friends')}
                      >
                        <Users className={`w-4 h-4 ${activeTab === 'friends' ? 'sacred-primary' : 'sacred-secondary'}`} />
                        <span className={`text-xs mt-0.5 ${
                          activeTab === 'friends' ? 'sacred-primary font-medium' : 'sacred-secondary'
                        }`}>Friends</span>
                      </motion.div>
                      <motion.div 
                        className={`flex flex-col items-center py-1 px-2 cursor-pointer ${
                          activeTab === 'leaderboard' ? '' : 'opacity-60'
                        }`}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleTabClick('leaderboard')}
                      >
                        <Trophy className={`w-4 h-4 ${activeTab === 'leaderboard' ? 'sacred-primary' : 'sacred-secondary'}`} />
                        <span className={`text-xs mt-0.5 ${
                          activeTab === 'leaderboard' ? 'sacred-primary font-medium' : 'sacred-secondary'
                        }`}>Leaderboard</span>
                      </motion.div>
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
