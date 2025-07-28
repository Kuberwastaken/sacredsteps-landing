import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sparkles } from "lucide-react";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img 
                src="public/assets/logo.png" 
                alt="praygo Logo" 
                className="w-8 h-8 rounded-lg"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-gray-900">praygo</span>
              <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                <Sparkles className="w-2 h-2 mr-1" />
                AI
              </Badge>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              FAQ
            </button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('waitlist')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
}
