import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold text-white tracking-tighter">
          AFORE<span className="text-orange-500">.</span>
        </div>
        
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Afore Tamarakroh Bright. All rights reserved.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
