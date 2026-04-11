import { notFound } from "next/navigation";
import Link from "next/link";
import { BOOKS } from "@/types/books";
import { ChevronLeft, ShoppingCart } from "lucide-react";

// This is how you handle dynamic params in Next.js 16/React 19
export default async function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <Link 
        href="/books" 
        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-berry-brown dark:hover:text-periwinkle transition-colors mb-12 group"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Library
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Book Cover Placeholder */}
        <div className={`aspect-[3/4] w-full max-w-md mx-auto rounded-3xl ${book.coverColor} border border-periwinkle/20 flex items-center justify-center text-periwinkle/30 italic text-3xl shadow-2xl`}>
          {book.title}
        </div>

        {/* Book Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-berry-brown dark:text-periwinkle font-medium">
              {book.genre}
            </p>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              {book.title}
            </h1>
          </div>

          <div className="space-y-6 text-lg leading-relaxed opacity-90 font-serif">
            <p className="italic font-medium">{book.description}</p>
            <p>{book.fullStory}</p>
          </div>

          <div className="pt-6">
            <button className="flex items-center gap-3 px-10 py-4 bg-berry-brown text-white dark:bg-periwinkle dark:text-black rounded-full hover:opacity-90 transition-all duration-300 shadow-lg font-medium cursor-pointer">
              <ShoppingCart size={20} />
              Purchase Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
