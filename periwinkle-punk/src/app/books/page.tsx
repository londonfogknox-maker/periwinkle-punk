import Link from "next/link";
import { BOOKS } from "@/types/books";

export default function BooksPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-serif text-berry-brown dark:text-periwinkle">The Library</h1>
        <p className="text-lg opacity-70 font-serif max-w-xl mx-auto">
          A collection of stories and explorations by Cristina Ochoa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {BOOKS.map((book) => (
          <Link 
            key={book.id} 
            href={`/books/${book.slug}`}
            className="group block space-y-6"
          >
            <div className={`aspect-[3/4] rounded-2xl ${book.coverColor} border border-periwinkle/20 flex items-center justify-center transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl`}>
              <span className="text-periwinkle/40 italic font-serif text-2xl group-hover:scale-110 transition-transform duration-500">
                {book.title}
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-serif group-hover:text-berry-brown dark:group-hover:text-periwinkle transition-colors">
                {book.title}
              </h2>
              <p className="text-sm uppercase tracking-widest opacity-50">{book.genre}</p>
              <p className="line-clamp-2 opacity-80 leading-relaxed">{book.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
