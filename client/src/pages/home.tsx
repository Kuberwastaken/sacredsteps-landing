import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DemoSection from "@/components/demo-section";
import WaitlistSection from "@/components/waitlist-section";
import FAQSection from "@/components/faq-section";
import { Mountain, Shield, Mail, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-purple-50">
      <Navigation />
      <HeroSection />
      
      {/* Religious Symbols Showcase */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sacred-gray mb-4">Explore All Major World Religions</h2>
            <p className="text-lg text-gray-600">Learn about diverse spiritual traditions with respect and authenticity</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Christianity", color: "from-red-400 to-red-600", icon: "✝" },
              { name: "Islam", color: "from-green-400 to-green-600", icon: "☪" },
              { name: "Judaism", color: "from-blue-400 to-blue-600", icon: "✡" },
              { name: "Hinduism", color: "from-orange-400 to-orange-600", icon: "🕉" },
              { name: "Buddhism", color: "from-purple-400 to-purple-600", icon: "☸" },
              { name: "Sikhism", color: "from-yellow-400 to-yellow-600", icon: "☬" },
            ].map((religion) => (
              <div key={religion.name} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${religion.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-xl">{religion.icon}</span>
                </div>
                <span className="text-sm font-medium sacred-gray">{religion.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />
      <DemoSection />
      <WaitlistSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sacred-gray mb-4">Why Learners Love Sacred Steps</h2>
            <p className="text-xl text-gray-600">Early testers share their experience with our gamified approach to religious education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Religious Studies Professor",
                content: "Sacred Steps makes complex religious concepts accessible to students of all backgrounds. The gamification doesn't trivialize the content—it enhances understanding through engagement.",
                gradient: "from-green-50 to-emerald-50"
              },
              {
                name: "Ahmed Hassan",
                role: "Interfaith Dialogue Coordinator",
                content: "Finally, a platform that teaches about religions with genuine respect and accuracy. My 15-year streak shows how addictive learning can be when it's done right!",
                gradient: "from-blue-50 to-sky-50"
              },
              {
                name: "Maria Rodriguez",
                role: "High School Teacher",
                content: "My students are actually excited about world religions class now. The progress tracking and achievements motivate them to learn deeper than any textbook ever could.",
                gradient: "from-purple-50 to-violet-50"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-8`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold sacred-gray">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.content}</p>
                <div className="flex sacred-orange">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-black/10"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Sacred Steps Journey?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Join thousands of learners discovering the beauty and wisdom of world religions through engaging, gamified education.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Join the Waitlist Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Share with Friends
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>No Spam Ever</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Always Free Tier</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sacred-gray text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Mountain className="text-white text-xl" />
                </div>
                <span className="text-2xl font-bold">Sacred Steps</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Making world religions accessible through engaging, gamified learning experiences that respect and celebrate spiritual diversity.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Educators</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sacred Steps. All rights reserved. Made with respect for all spiritual traditions.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
