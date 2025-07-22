export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-sacred-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-sacred-accent rounded-lg flex items-center justify-center">
              <span className="text-sacred-primary font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold sacred-primary">Sacred Steps</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-sm sacred-secondary hover:sacred-primary transition-colors duration-200"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm sacred-secondary hover:sacred-primary transition-colors duration-200"
            >
              FAQ
            </button>
          </div>
          
          <button 
            onClick={() => scrollToSection('waitlist')}
            className="bg-sacred-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
