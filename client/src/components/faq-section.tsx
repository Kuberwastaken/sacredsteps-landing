import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is Sacred Steps respectful to all religious traditions?",
    answer: "Absolutely. Sacred Steps is developed in collaboration with religious scholars and community leaders from each tradition we cover. Our content is reviewed for accuracy, respect, and cultural sensitivity. We present religions as they understand themselves, not through the lens of any particular tradition."
  },
  {
    question: "What religions are covered on the platform?",
    answer: "We currently cover 12+ major world religions including Christianity, Islam, Judaism, Hinduism, Buddhism, Sikhism, Jainism, Taoism, Shintoism, and various indigenous spiritual traditions. We're continuously adding more content based on user interest and scholarly partnerships."
  },
  {
    question: "When will Sacred Steps be available?",
    answer: "We're currently in closed beta testing and plan to launch publicly in Q2 2024. Waitlist members will get early access starting in March 2024, with full release following shortly after based on feedback and testing results."
  },
  {
    question: "Will there be a cost to use Sacred Steps?",
    answer: "Sacred Steps will offer both free and premium tiers. The free tier includes access to core lessons and basic features. Premium subscribers get advanced progress tracking, exclusive content, personalized learning paths, and early access to new religions and features. Waitlist members receive 6 months of premium features free."
  },
  {
    question: "Can educators use Sacred Steps in classrooms?",
    answer: "Yes! We're developing Sacred Steps for Schools with features specifically designed for educators, including classroom management tools, progress tracking for students, curriculum alignment, and assessment features. Educational pricing and bulk licensing will be available."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-sacred-light">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold sacred-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl sacred-secondary">Everything you need to know about Sacred Steps</p>
        </motion.div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl border border-sacred-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-sacred-light transition-colors duration-200 rounded-2xl"
              >
                <h3 className="text-lg font-semibold sacred-primary pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="sacred-secondary w-5 h-5" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 sacred-secondary">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
