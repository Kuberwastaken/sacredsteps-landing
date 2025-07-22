import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Flame } from "lucide-react";

export default function DemoSection() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  const answers = [
    { id: "A", text: "Shahada (Declaration of Faith)", correct: true },
    { id: "B", text: "Salah (Prayer)", correct: false },
    { id: "C", text: "Zakat (Charity)", correct: false },
    { id: "D", text: "Hajj (Pilgrimage)", correct: false }
  ];

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold sacred-gray mb-4">Experience Sacred Steps</h2>
          <p className="text-xl text-gray-600">Try a sample lesson to see how our gamified approach makes learning about world religions engaging</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Demo Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Islam: The Five Pillars</h3>
                    <p className="text-blue-100">Learn about the foundational practices of Islam</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5" />
                      <span>5</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Flame className="w-5 h-5" />
                      <span>12</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Demo Content */}
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Lesson Progress</span>
                    <span>3 of 5 questions</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div 
                      className="progress-bar h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold sacred-gray mb-4">Which of the following is the first pillar of Islam?</h4>
                  
                  <div className="space-y-3">
                    {answers.map((answer) => (
                      <motion.button
                        key={answer.id}
                        onClick={() => handleAnswerSelect(answer.id)}
                        className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-300 ${
                          selectedAnswer === answer.id
                            ? 'border-emerald-500 bg-green-50'
                            : 'border-gray-200 hover:border-emerald-500 hover:bg-green-50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                            selectedAnswer === answer.id
                              ? 'bg-emerald-500 text-white'
                              : 'bg-gray-200 text-gray-700'
                          }`}>
                            {answer.id}
                          </div>
                          <span>{answer.text}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-gray-500 hover:sacred-gray transition-colors">
                    Skip Question
                  </button>
                  <motion.button 
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Check Answer
                  </motion.button>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-gray-600 mb-4">This is just a preview! Join our waitlist to experience the full Sacred Steps journey.</p>
              <motion.button 
                onClick={scrollToWaitlist}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist for Full Access
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
