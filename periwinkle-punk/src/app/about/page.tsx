import { Mail, MapPin, Coffee, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* Visual Column - Large Portrait Area */}
        <div className="space-y-12">
          <div className="relative aspect-[4/5] w-full rounded-3xl bg-periwinkle/10 border border-periwinkle/20 flex items-center justify-center text-periwinkle/30 italic text-2xl shadow-sm overflow-hidden group">
            <span className="group-hover:scale-110 transition-transform duration-700">Author Portrait</span>
            {/* Subtle decorative elements */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-berry-brown/20 rounded-tl-xl"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-berry-brown/20 rounded-br-xl"></div>
          </div>

          {/* Quick Info / Quaint Details */}
          {/* Update the Quick Info grid items */}
          <div className="grid grid-cols-2 gap-6 p-8 rounded-2xl bg-black/50 dark:bg-black/50 border border-periwinkle/20 shadow-sm">
            {[
              { Icon: MapPin, text: "Knoxville, TN" },
              { Icon: Coffee, text: "Mocha Latte Enthusiast" },
              { Icon: BookOpen, text: "Substack @theperiwinklepunk" },
              { Icon: Mail, text: "Email: theperiwinklepunk@gmail.com" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-berry-brown dark:text-periwinkle font-medium">
                <item.Icon size={18} />
                <span className="text-sm font-serif">{item.text}</span>
              </div>
            ))}
          </div>


        </div>

        {/* Narrative Column - Storytelling Text */}
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-berry-brown dark:text-periwinkle font-medium">
              The Story Behind the Stories
            </p>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              I'm Cristina Ochoa.
            </h1>
          </div>

          <div className="space-y-8 text-lg leading-relaxed font-serif opacity-90">
            <p className="text-2xl italic text-berry-brown dark:text-periwinkle font-medium leading-relaxed">
              "I believe every quiet corner of the world has a story waiting to be told, if only we're patient enough to listen."
            </p>
            
            <p>
              My journey as a writer began in the dusty aisles of my local library, where I discovered that words were not just ink on paper, but windows into other lives and landscapes. Today, I write from a sun-drenched studio in Portland, surrounded by stacks of old journals and a growing collection of pressed wildflowers.
            </p>

            <p>
              My work often explores the delicate intersection of human emotion and the natural world. Whether I'm writing historical fiction or contemporary essays, my goal is always the same: to create a "digital sanctuary" for my readers—a place that feels refreshing, quaint, and deeply resonant.
            </p>

            <p>
              When I'm not weaving narratives, you can find me wandering through the mossy trails of the Pacific Northwest, experimenting with film photography, or searching for the perfect cup of tea.
            </p>
          </div>

          {/* Signature or Closing */}
          <div className="pt-8 border-t border-periwinkle/20">
            <p className="font-serif italic text-xl text-berry-brown dark:text-periwinkle">
              Warmly,
            </p>
            <p className="text-3xl font-serif mt-2 tracking-tighter">
              Cristina Ochoa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
