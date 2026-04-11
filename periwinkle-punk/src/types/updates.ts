export interface Update {
  id: string;
  date: string; // e.g., 'October 12, 2025'
  title: string;
  category: 'News' | 'Event' | 'Personal';
  content: string;
}

export const UPDATES: Update[] = [
  {
    id: "1",
    date: "March 15, 2026",
    title: "New Book Announcement: The Periwinkle Sky",
    category: "News",
    content: "I'm thrilled to finally share that my third novel, 'The Periwinkle Sky', is coming this summer! It's a story that has been living in my heart for years, and I can't wait for you to meet the characters.",
  },
  {
    id: "2",
    date: "February 20, 2026",
    title: "Upcoming Reading at The Quaint Bookshop",
    category: "Event",
    content: "Join me for an evening of stories and tea at The Quaint Bookshop in Portland. I'll be reading excerpts from 'Echoes of the Forest' and answering your questions about the writing process.",
  },
  {
    id: "3",
    date: "January 5, 2026",
    title: "Reflections on a Quiet Winter",
    category: "Personal",
    content: "This winter has been a time of deep rest and reflection. I've spent many mornings watching the frost on the trees, finding new rhythms in the silence that I hope will find their way into my next work.",
  },
];
