import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Flame, Brain, Sparkles, Check, X } from "lucide-react";
import { Badge } from "./ui/badge";

export default function DemoSection() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  
  const answers = [
    { id: "A", text: "Shahada (Declaration of Faith)", correct: true },
    { id: "B", text: "Salah (Prayer)", correct: false },
    { id: "C", text: "Zakat (Charity)", correct: false },
    { id: "D", text: "Hajj (Pilgrimage)", correct: false }
  ];

  const handleAnswerSelect = (answerId: string) => {
    if (!isAnswerChecked) {
      setSelectedAnswer(answerId);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer) {
      setIsAnswerChecked(true);
    }
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gray-900 text-white hover:bg-gray-800">
            <Brain className="w-3 h-3 mr-1" />
            AI-Generated Demo
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience AI-Powered Learning</h2>
          <p className="text-xl text-gray-600">Try a sample lesson created by our AI to see how personalized and engaging religious education can be</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl border border-sacred-border shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden">
              {/* Demo Header */}
              <div className="bg-sacred-primary p-6 rounded-lg text-white mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Islam: The Five Pillars</h3>
                    <p className="text-gray-200">Learn about the foundational practices of Islam</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                      <span>5</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Flame className="w-5 h-5 text-orange-500" />
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
                    {answers.map((answer) => {
                      const isSelected = selectedAnswer === answer.id;
                      const isCorrect = answer.correct;
                      const isIncorrect = isSelected && !answer.correct && isAnswerChecked;
                      const shouldShowCorrect = isAnswerChecked && answer.correct;
                      
                      let buttonStyle = 'border-sacred-border hover:border-sacred-primary hover:bg-sacred-light';
                      let circleStyle = 'bg-gray-200 text-gray-700';
                      
                      if (isAnswerChecked) {
                        if (shouldShowCorrect) {
                          buttonStyle = 'border-green-500 bg-green-50';
                          circleStyle = 'bg-green-500 text-white';
                        } else if (isIncorrect) {
                          buttonStyle = 'border-red-500 bg-red-50';
                          circleStyle = 'bg-red-500 text-white';
                        } else if (!isSelected) {
                          buttonStyle = 'border-gray-200 bg-gray-50 opacity-60';
                          circleStyle = 'bg-gray-300 text-gray-500';
                        }
                      } else if (isSelected) {
                        buttonStyle = 'border-sacred-primary bg-sacred-light';
                        circleStyle = 'bg-sacred-primary text-white';
                      }
                      
                      return (
                        <motion.button
                          key={answer.id}
                          onClick={() => handleAnswerSelect(answer.id)}
                          disabled={isAnswerChecked}
                          className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-300 ${buttonStyle}`}
                          whileHover={!isAnswerChecked ? { scale: 1.02 } : {}}
                          whileTap={!isAnswerChecked ? { scale: 0.98 } : {}}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${circleStyle}`}>
                                {isAnswerChecked && shouldShowCorrect ? (
                                  <Check className="w-4 h-4" />
                                ) : isAnswerChecked && isIncorrect ? (
                                  <X className="w-4 h-4" />
                                ) : (
                                  answer.id
                                )}
                              </div>
                              <span className={isAnswerChecked && !isSelected && !shouldShowCorrect ? 'text-gray-500' : ''}>
                                {answer.text}
                              </span>
                            </div>
                            {isAnswerChecked && shouldShowCorrect && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-green-500 font-medium text-sm"
                              >
                                Correct!
                              </motion.div>
                            )}
                            {isAnswerChecked && isIncorrect && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-red-500 font-medium text-sm"
                              >
                                Incorrect
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="sacred-secondary hover:sacred-primary transition-colors">
                    Skip Question
                  </button>
                  {!isAnswerChecked ? (
                    <motion.button 
                      onClick={handleCheckAnswer}
                      disabled={!selectedAnswer}
                      className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAnswer 
                          ? 'bg-sacred-primary text-white hover:bg-gray-800' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      whileHover={selectedAnswer ? { scale: 1.02 } : {}}
                      whileTap={selectedAnswer ? { scale: 0.98 } : {}}
                    >
                      Check Answer
                    </motion.button>
                  ) : (
                    <motion.button 
                      className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Next Question
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="sacred-secondary mb-4">This is just a preview! Join our waitlist to experience the full Sacred Steps journey.</p>
              <motion.button 
                onClick={scrollToWaitlist}
                className="bg-sacred-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
