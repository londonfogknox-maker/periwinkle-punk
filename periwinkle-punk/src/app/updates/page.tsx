import { UPDATES } from "@/types/updates";

export default function UpdatesPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-20 space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-serif text-berry-brown dark:text-periwinkle">Updates & News</h1>
        <p className="text-lg opacity-70 font-serif max-w-xl mx-auto">
          The latest happenings, event announcements, and reflections from Cristina's desk.
        </p>
      </div>

      {/* Simplified Timeline View */}
      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-periwinkle/30 before:to-transparent">
        {UPDATES.map((update) => (
          <div key={update.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot on the timeline */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-periwinkle/30 bg-cream dark:bg-black text-berry-brown dark:text-periwinkle shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform duration-500 group-hover:scale-125">
              <div className="w-2 h-2 rounded-full bg-current"></div>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-2xl bg-periwinkle/5 border border-periwinkle/10 hover:border-berry-brown/30 dark:hover:border-periwinkle/30 transition-all duration-500 shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-3">
                <time className="text-xs uppercase tracking-widest font-medium opacity-50">
                  {update.date}
                </time>
                <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-periwinkle/20 text-berry-brown dark:text-periwinkle font-bold">
                  {update.category}
                </span>
              </div>
              <h2 className="text-2xl font-serif mb-4 group-hover:text-berry-brown dark:group-hover:text-periwinkle transition-colors leading-tight">
                {update.title}
              </h2>
              <p className="opacity-80 leading-relaxed font-serif">
                {update.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Spacer/Minimal Sign-off */}
      <div className="pt-20 text-center">
        <div className="h-px w-24 bg-periwinkle/30 mx-auto mb-8"></div>
        <p className="italic font-serif opacity-50 italic">More stories coming soon...</p>
      </div>
    </div>
  );
}
