import Link from "next/link";
import { Search, Home, ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 text-center space-y-12">
      {/* Visual Element: A "missing book" placeholder */}
      <div className="relative group">
        <div className="absolute inset-0 bg-periwinkle/20 blur-3xl rounded-full group-hover:bg-berry-brown/10 transition-colors duration-700"></div>
        <div className="relative w-48 h-64 border-2 border-dashed border-periwinkle/40 rounded-2xl flex flex-col items-center justify-center space-y-4 bg-cream/50 dark:bg-black/50 backdrop-blur-sm">
          <Search size={48} className="text-periwinkle/40 animate-pulse" />
          <span className="text-4xl font-serif font-bold text-periwinkle/20 italic">404</span>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-berry-brown dark:text-periwinkle">
          A Missing Chapter
        </h1>
        <p className="text-lg opacity-70 font-serif leading-relaxed">
          It seems you've wandered into a quiet corner of the library that hasn't been written yet. The story you're looking for might have moved or is still being drafted.
        </p>
      </div>

      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-6 pt-4">
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-berry-brown text-white dark:bg-periwinkle dark:text-black rounded-full hover:scale-105 transition-all shadow-lg font-medium group"
        >
          <Home size={18} />
          Return to Sanctuary
        </Link>
        
        <Link 
          href="/books" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-periwinkle/30 hover:border-berry-brown dark:hover:border-periwinkle rounded-full transition-all font-medium group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Browse the Library
        </Link>
      </div>

      {/* Subtle Footer for the 404 page */}
      <p className="text-xs uppercase tracking-[0.3em] opacity-30 font-bold pt-12">
        "Not all who wander are lost, but this page definitely is."
      </p>
    </div>
  );
}
