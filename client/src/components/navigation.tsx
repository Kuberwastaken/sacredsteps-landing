import { Mountain } from "lucide-react";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Mountain className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold gradient-text">Sacred Steps</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="sacred-gray hover:text-emerald-500 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="sacred-gray hover:text-emerald-500 transition-colors"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="sacred-gray hover:text-emerald-500 transition-colors"
            >
              Join Waitlist
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="sacred-gray hover:text-emerald-500 transition-colors"
            >
              FAQ
            </button>
          </div>
          
          <button 
            onClick={() => scrollToSection('waitlist')}
            className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
