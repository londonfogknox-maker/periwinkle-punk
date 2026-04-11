"use client";

import Link from "next/link";
import { ShoppingCart, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-periwinkle/30 sticky top-0 z-50 transition-colors duration-300 bg-cream dark:bg-black text-black dark:text-cream">
      <div className="flex-shrink-0">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-berry-brown dark:text-periwinkle">
          CO
        </Link>
      </div>

      <div className="flex-grow flex justify-center space-x-8 text-sm uppercase tracking-widest font-medium">
        <Link href="/" className="hover:text-berry-brown dark:hover:text-periwinkle transition-colors">Home</Link>
        <Link href="/books" className="hover:text-berry-brown dark:hover:text-periwinkle transition-colors">Books</Link>
        <Link href="/moodboard" className="hover:text-berry-brown dark:hover:text-periwinkle transition-colors">Moodboard</Link>
        <Link href="/updates" className="hover:text-berry-brown dark:hover:text-periwinkle transition-colors">Updates</Link>
        <Link href="/about" className="hover:text-berry-brown dark:hover:text-periwinkle transition-colors">About Me</Link>
      </div>

      <div className="flex items-center space-x-6">
        <button onClick={toggleTheme} className="p-2 hover:bg-periwinkle/20 rounded-full transition-colors cursor-pointer" aria-label="Toggle Dark Mode">
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <Link href="/checkout" className="p-2 hover:bg-periwinkle/20 rounded-full transition-colors" aria-label="Shopping Cart">
          <ShoppingCart size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
