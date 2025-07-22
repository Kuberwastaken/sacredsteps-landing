import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Flame, Brain, Sparkles, Check, X } from "lucide-react";
import { Badge } from "./ui/badge";

// Question bank with 20+ questions covering different religions
const questionBank = [
  // Islam
  {
    id: 1,
    religion: "Islam",
    question: "Which of the following is the first pillar of Islam?",
    answers: [
      { id: "A", text: "Shahada (Declaration of Faith)", correct: true },
      { id: "B", text: "Salah (Prayer)", correct: false },
      { id: "C", text: "Zakat (Charity)", correct: false },
      { id: "D", text: "Hajj (Pilgrimage)", correct: false }
    ]
  },
  {
    id: 2,
    religion: "Islam",
    question: "How many times a day do Muslims pray?",
    answers: [
      { id: "A", text: "Three times", correct: false },
      { id: "B", text: "Five times", correct: true },
      { id: "C", text: "Seven times", correct: false },
      { id: "D", text: "Once", correct: false }
    ]
  },
  {
    id: 3,
    religion: "Islam",
    question: "What is the holy book of Islam called?",
    answers: [
      { id: "A", text: "Torah", correct: false },
      { id: "B", text: "Bible", correct: false },
      { id: "C", text: "Quran", correct: true },
      { id: "D", text: "Vedas", correct: false }
    ]
  },
  // Christianity
  {
    id: 4,
    religion: "Christianity",
    question: "Who is considered the founder of Christianity?",
    answers: [
      { id: "A", text: "Moses", correct: false },
      { id: "B", text: "Jesus Christ", correct: true },
      { id: "C", text: "Paul the Apostle", correct: false },
      { id: "D", text: "Abraham", correct: false }
    ]
  },
  {
    id: 5,
    religion: "Christianity",
    question: "What is the Christian holy book called?",
    answers: [
      { id: "A", text: "Quran", correct: false },
      { id: "B", text: "Torah", correct: false },
      { id: "C", text: "Bible", correct: true },
      { id: "D", text: "Tripitaka", correct: false }
    ]
  },
  {
    id: 6,
    religion: "Christianity",
    question: "What does 'Trinity' refer to in Christianity?",
    answers: [
      { id: "A", text: "Three wise men", correct: false },
      { id: "B", text: "Father, Son, and Holy Spirit", correct: true },
      { id: "C", text: "Three crosses", correct: false },
      { id: "D", text: "Three gospels", correct: false }
    ]
  },
  // Buddhism
  {
    id: 7,
    religion: "Buddhism",
    question: "What are the Four Noble Truths primarily about?",
    answers: [
      { id: "A", text: "The nature of suffering", correct: true },
      { id: "B", text: "The four gods", correct: false },
      { id: "C", text: "The four seasons", correct: false },
      { id: "D", text: "The four directions", correct: false }
    ]
  },
  {
    id: 8,
    religion: "Buddhism",
    question: "Who founded Buddhism?",
    answers: [
      { id: "A", text: "Confucius", correct: false },
      { id: "B", text: "Siddhartha Gautama (Buddha)", correct: true },
      { id: "C", text: "Lao Tzu", correct: false },
      { id: "D", text: "Mahavira", correct: false }
    ]
  },
  {
    id: 9,
    religion: "Buddhism",
    question: "What is the Eightfold Path?",
    answers: [
      { id: "A", text: "Eight meditation techniques", correct: false },
      { id: "B", text: "The path to enlightenment", correct: true },
      { id: "C", text: "Eight sacred texts", correct: false },
      { id: "D", text: "Eight Buddhist temples", correct: false }
    ]
  },
  // Hinduism
  {
    id: 10,
    religion: "Hinduism",
    question: "What is the concept of 'Dharma' in Hinduism?",
    answers: [
      { id: "A", text: "Righteous living or duty", correct: true },
      { id: "B", text: "A type of meditation", correct: false },
      { id: "C", text: "A sacred river", correct: false },
      { id: "D", text: "A Hindu festival", correct: false }
    ]
  },
  {
    id: 11,
    religion: "Hinduism",
    question: "Which sacred text contains the Bhagavad Gita?",
    answers: [
      { id: "A", text: "Ramayana", correct: false },
      { id: "B", text: "Mahabharata", correct: true },
      { id: "C", text: "Vedas", correct: false },
      { id: "D", text: "Upanishads", correct: false }
    ]
  },
  {
    id: 12,
    religion: "Hinduism",
    question: "What does 'Om' represent in Hinduism?",
    answers: [
      { id: "A", text: "A prayer", correct: false },
      { id: "B", text: "The universal sound", correct: true },
      { id: "C", text: "A god's name", correct: false },
      { id: "D", text: "A temple", correct: false }
    ]
  },
  // Judaism
  {
    id: 13,
    religion: "Judaism",
    question: "What is the Jewish day of rest called?",
    answers: [
      { id: "A", text: "Sunday", correct: false },
      { id: "B", text: "Sabbath", correct: true },
      { id: "C", text: "Passover", correct: false },
      { id: "D", text: "Yom Kippur", correct: false }
    ]
  },
  {
    id: 14,
    religion: "Judaism",
    question: "What is the Torah?",
    answers: [
      { id: "A", text: "A Jewish prayer", correct: false },
      { id: "B", text: "The first five books of the Hebrew Bible", correct: true },
      { id: "C", text: "A Jewish holiday", correct: false },
      { id: "D", text: "A synagogue leader", correct: false }
    ]
  },
  {
    id: 15,
    religion: "Judaism",
    question: "What does 'Kosher' refer to?",
    answers: [
      { id: "A", text: "Jewish prayers", correct: false },
      { id: "B", text: "Dietary laws", correct: true },
      { id: "C", text: "Jewish holidays", correct: false },
      { id: "D", text: "Sacred clothing", correct: false }
    ]
  },
  // Sikhism
  {
    id: 16,
    religion: "Sikhism",
    question: "Who founded Sikhism?",
    answers: [
      { id: "A", text: "Guru Nanak", correct: true },
      { id: "B", text: "Guru Gobind Singh", correct: false },
      { id: "C", text: "Guru Arjan", correct: false },
      { id: "D", text: "Guru Tegh Bahadur", correct: false }
    ]
  },
  {
    id: 17,
    religion: "Sikhism",
    question: "What is the Sikh holy book called?",
    answers: [
      { id: "A", text: "Vedas", correct: false },
      { id: "B", text: "Guru Granth Sahib", correct: true },
      { id: "C", text: "Quran", correct: false },
      { id: "D", text: "Bible", correct: false }
    ]
  },
  {
    id: 18,
    religion: "Sikhism",
    question: "What are the Five Ks in Sikhism?",
    answers: [
      { id: "A", text: "Five prayers", correct: false },
      { id: "B", text: "Five physical symbols", correct: true },
      { id: "C", text: "Five gurus", correct: false },
      { id: "D", text: "Five temples", correct: false }
    ]
  },
  // Taoism/Daoism
  {
    id: 19,
    religion: "Taoism",
    question: "What does 'Tao' mean?",
    answers: [
      { id: "A", text: "The Way or Path", correct: true },
      { id: "B", text: "A temple", correct: false },
      { id: "C", text: "A prayer", correct: false },
      { id: "D", text: "A festival", correct: false }
    ]
  },
  {
    id: 20,
    religion: "Taoism",
    question: "Who is traditionally credited as the founder of Taoism?",
    answers: [
      { id: "A", text: "Confucius", correct: false },
      { id: "B", text: "Lao Tzu", correct: true },
      { id: "C", text: "Zhuangzi", correct: false },
      { id: "D", text: "Mencius", correct: false }
    ]
  },
  // Jainism
  {
    id: 21,
    religion: "Jainism",
    question: "What is the primary principle of Jainism?",
    answers: [
      { id: "A", text: "Ahimsa (non-violence)", correct: true },
      { id: "B", text: "Meditation", correct: false },
      { id: "C", text: "Pilgrimage", correct: false },
      { id: "D", text: "Fasting", correct: false }
    ]
  },
  {
    id: 22,
    religion: "Jainism",
    question: "How many Tirthankaras are there in Jainism?",
    answers: [
      { id: "A", text: "12", correct: false },
      { id: "B", text: "24", correct: true },
      { id: "C", text: "36", correct: false },
      { id: "D", text: "48", correct: false }
    ]
  },
  // Confucianism
  {
    id: 23,
    religion: "Confucianism",
    question: "What is the golden rule in Confucianism?",
    answers: [
      { id: "A", text: "Do unto others as you would have them do unto you", correct: true },
      { id: "B", text: "Seek enlightenment", correct: false },
      { id: "C", text: "Honor your ancestors", correct: false },
      { id: "D", text: "Study constantly", correct: false }
    ]
  },
  {
    id: 24,
    religion: "Confucianism",
    question: "What does 'Ren' mean in Confucian philosophy?",
    answers: [
      { id: "A", text: "Wisdom", correct: false },
      { id: "B", text: "Benevolence or humaneness", correct: true },
      { id: "C", text: "Courage", correct: false },
      { id: "D", text: "Justice", correct: false }
    ]
  }
];

export default function DemoSection() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questionBank[0]);
  const [questionProgress, setQuestionProgress] = useState(1);
  
  // Randomly select a question on component mount and when refreshing
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    setCurrentQuestion(questionBank[randomIndex]);
    setQuestionProgress(Math.floor(Math.random() * 5) + 1); // Random progress 1-5
  }, []);

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

  const handleNextQuestion = () => {
    // Reset state and pick a new random question
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    setCurrentQuestion(questionBank[randomIndex]);
    setQuestionProgress(Math.min(questionProgress + 1, 5));
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
                    <h3 className="text-2xl font-bold">{currentQuestion.religion}: Interactive Learning</h3>
                    <p className="text-gray-200">AI-generated questions tailored to your learning journey</p>
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
                    <span>{questionProgress} of 5 questions</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div 
                      className="progress-bar h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(questionProgress / 5) * 100}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <motion.h4 
                    key={currentQuestion.id}
                    className="text-xl font-semibold sacred-gray mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentQuestion.question}
                  </motion.h4>
                  
                  <div className="space-y-3">
                    {currentQuestion.answers.map((answer) => {
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
                      onClick={handleNextQuestion}
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
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-4 h-4 text-sacred-primary" />
                <p className="sacred-secondary">This is just a preview! Each question is dynamically generated by our AI system.</p>
                <Sparkles className="w-4 h-4 text-sacred-primary" />
              </div>
              <p className="sacred-secondary mb-4 text-sm">
                Join our waitlist to experience 1000+ AI-curated questions across all major world religions!
              </p>
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
