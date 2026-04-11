import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in duration-700">
      {/* A soft, pulsing icon that fits the whimsical theme */}
      <div className="relative">
        <div className="absolute inset-0 bg-periwinkle/30 blur-2xl rounded-full animate-pulse"></div>
        <Sparkles size={56} className="text-berry-brown dark:text-periwinkle animate-bounce relative z-10" />
      </div>
      
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-serif italic text-berry-brown dark:text-periwinkle">
          Gathering stories...
        </h2>
        <p className="text-xs uppercase tracking-[0.4em] opacity-40 font-bold">
          Refreshing the sanctuary
        </p>
      </div>
      
      <div className="w-64 h-1.5 bg-periwinkle/10 rounded-full overflow-hidden relative">
        <div className="absolute inset-0 bg-berry-brown dark:bg-periwinkle w-1/3 rounded-full animate-[shimmer_2s_infinite_linear]"></div>
      </div>
    </div>
  );
}
