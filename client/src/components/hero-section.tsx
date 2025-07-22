import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            className="inline-flex items-center space-x-2 bg-sacred-light border border-sacred-border rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-sacred-accent rounded-full"></div>
            <span className="text-sm sacred-secondary">1,000+ learners have already joined</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold sacred-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Learn religions like <br />
            <span className="italic font-light">never before.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl sacred-secondary mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sacred Steps makes exploring world religions accessible through gamified, bite-sized lessons that respect and celebrate spiritual diversity.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address"
                className="px-4 py-3 rounded-l-lg border border-r-0 border-sacred-border focus:outline-none focus:ring-2 focus:ring-sacred-primary focus:border-transparent w-64"
              />
              <button 
                onClick={() => scrollToSection('waitlist')}
                className="bg-sacred-primary text-white px-6 py-3 rounded-r-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center"
              >
                Get Notified
              </button>
            </div>
          </motion.div>
          
          {/* App Preview */}
          <motion.div 
            className="relative mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-sacred-border p-6 md:p-8">
              {/* Sacred Steps App Preview */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-sacred-accent rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 sacred-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold sacred-primary">My Learning Journey</h3>
                    <p className="text-sm sacred-secondary">Track your progress across world religions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-sacred-accent rounded-full flex items-center justify-center text-xs font-bold sacred-primary">7</div>
                  <span className="text-sm sacred-secondary">Day streak</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column - Lessons */}
                <div className="space-y-4">
                  <div className="bg-sacred-light p-4 rounded-lg border border-sacred-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium sacred-primary">Buddhism Basics</span>
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <p className="text-xs sacred-secondary">Four Noble Truths • Eightfold Path</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-sacred-primary">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium sacred-primary">Islam Foundations</span>
                      <div className="w-6 h-6 bg-sacred-primary rounded-full flex items-center justify-center animate-pulse">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <p className="text-xs sacred-secondary">Five Pillars • Prayer & Pilgrimage</p>
                  </div>

                  <div className="bg-sacred-light p-4 rounded-lg border border-sacred-border opacity-60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium sacred-secondary">Christianity Origins</span>
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-500 text-xs">🔒</span>
                      </div>
                    </div>
                    <p className="text-xs sacred-secondary">Life of Jesus • Core Teachings</p>
                  </div>
                </div>

                {/* Right Column - Progress */}
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-sacred-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium sacred-primary">Weekly Challenge</span>
                      <span className="text-xs bg-sacred-accent text-sacred-primary px-2 py-1 rounded">3/5</span>
                    </div>
                    <p className="text-xs sacred-secondary mb-3">Complete lessons from 3 different religions</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sacred-primary h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-sacred-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium sacred-primary">XP Progress</span>
                      <span className="text-xs sacred-secondary">1,250 / 1,500 XP</span>
                    </div>
                    <p className="text-xs sacred-secondary mb-3">Level up to unlock advanced lessons</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sacred-accent h-2 rounded-full" style={{width: '83%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-sacred-accent/10 rounded-full"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-32 h-32 bg-gray-100 rounded-full"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-sacred-accent/5 rounded-full"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
    </section>
  );
}
