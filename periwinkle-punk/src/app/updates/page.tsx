import { UPDATES } from "@/types/updates";

export default function UpdatesPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-serif text-berry-brown dark:text-periwinkle">Updates & News</h1>
        <p className="text-lg opacity-70 font-serif max-w-xl mx-auto">
          The latest happenings and reflections from Cristina's desk.
        </p>
      </div>

      {/* Simplified List View: Image Left, Content Right */}
      <div className="space-y-20">
        {UPDATES.map((update) => (
          <div key={update.id} className="flex flex-col md:flex-row gap-10 items-center md:items-start group">
            
            {/* Image Placeholder on the Left */}
            <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl bg-periwinkle/10 border border-periwinkle/20 flex items-center justify-center text-periwinkle/40 font-serif italic text-sm shadow-sm shrink-0 overflow-hidden">
              <span className="group-hover:scale-110 transition-transform duration-500">Update Image</span>
            </div>

            {/* Content on the Right */}
            <div className="flex-grow space-y-4">
              <div className="flex items-center gap-4">
                <time className="text-xs uppercase tracking-widest font-bold text-berry-brown dark:text-periwinkle">
                  {update.date}
                </time>
                <span className="h-px w-8 bg-periwinkle/30"></span>
                <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
                  {update.category}
                </span>
              </div>
              
              <h2 className="text-3xl font-serif text-black dark:text-cream leading-tight">
                {update.title}
              </h2>
              
              <p className="text-lg opacity-80 leading-relaxed font-serif">
                {update.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sign-off */}
      <div className="pt-20 text-center border-t border-periwinkle/10">
        <p className="italic font-serif opacity-40">More stories are always being written...</p>
      </div>
    </div>
  );
}
