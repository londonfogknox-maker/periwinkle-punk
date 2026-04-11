export interface Book {
  id: string;
  title: string;
  slug: string; // Unique URL identifier (e.g., 'the-story-of-everything')
  genre: string;
  description: string;
  fullStory: string;
  coverColor: string; // Placeholder for our periwinkle/quaint theme
}

export const BOOKS: Book[] = [
  {
    id: "1",
    title: "The Story of Everything",
    slug: "the-story-of-everything",
    genre: "Historical Fiction",
    description: "A sweeping tale of human emotion and the natural world.",
    fullStory: "This is where the detailed description of the book would go. It explores the depths of human resilience across centuries...",
    coverColor: "bg-periwinkle/20",
  },
  {
    id: "2",
    title: "Echoes of the Forest",
    slug: "echoes-of-the-forest",
    genre: "Nature Writing",
    description: "A refreshing look at our connection to the wild.",
    fullStory: "In this collection of essays, Cristina explores the quiet whispers of the ancient woods and what they teach us about ourselves...",
    coverColor: "bg-green/20",
  },
  {
    id: "3",
    title: "The Periwinkle Sky",
    slug: "the-periwinkle-sky",
    genre: "Contemporary Fiction",
    description: "A quaint story about finding home in unexpected places.",
    fullStory: "When the sky turned periwinkle, everything changed. This novel follows a young woman's journey through a small coastal town...",
    coverColor: "bg-berry-brown/10",
  },
];
