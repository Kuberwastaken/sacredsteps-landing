import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DemoSection from "@/components/demo-section";
import WaitlistSection from "@/components/waitlist-section";
import FAQSection from "@/components/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <WaitlistSection />
      <FAQSection />

      {/* Comprehensive Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="public/assets/logo.png" 
                  alt="praygo Logo" 
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-semibold text-gray-900">praygo</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Duolingo for Religion - Making world faiths accessible to all.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.224.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001.017 0z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Learn Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Learn</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">All Religions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Christianity</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Islam</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Judaism</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Buddhism</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Hinduism</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Coming Soon</a></li>
              </ul>
            </div>

            {/* Community Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Community</h3>
              <ul className="space-y-3">
                <li><a href="#waitlist" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Join Waitlist</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Beta Program</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Feedback</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Events</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Our Mission</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2024 praygo. Building bridges through understanding.
              </p>
              <p className="text-xs text-gray-400 text-center md:text-right max-w-md">
                praygo is committed to presenting all religious content with accuracy, respect, and scholarly integrity.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
