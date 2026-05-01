import { Mail, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream text-black border-t border-periwinkle/30 py-12 px-8 dark:bg-black dark:text-cream transition-colors duration-300">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex space-x-8">
          <a 
            href="https://www.substack.com/@theperiwinklepunk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-berry-brown dark:hover:text-periwinkle transition-colors"
            aria-label="Substack"
          >
            <BookOpen size={24} />
          </a>
          <a 
            href="theperiwinklepunk@gmail.com" 
            className="hover:text-berry-brown dark:hover:text-periwinkle transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-xs tracking-widest uppercase opacity-70 font-medium">
          &copy; 2026 Cristina Ochoa. All Rights Reserved.
        </p>
      </div>
    </footer>
   );
};

export default Footer;
