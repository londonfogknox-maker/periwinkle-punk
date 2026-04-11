"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, User, Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

export default function MoodboardPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to the Reader's Paradise. I'm your whimsical guide. Tell me, what kind of mood are you in today? I'll find the perfect book from Cristina's library for you.",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `That sounds lovely. Based on your mood for "${userMessage.text}", I recommend 'The Periwinkle Sky'. It has that exact whimsical and refreshing feel you're looking for.`,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 flex flex-col">
      {/* Header - Fixed height/shrink-0 to prevent layout shift */}
      <div className="text-center space-y-3 mb-10 shrink-0">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-periwinkle/10 border border-periwinkle/20 text-berry-brown dark:text-periwinkle text-xs font-bold uppercase tracking-widest">
          <Sparkles size={14} />
          <span>AI Reader's Paradise</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-berry-brown dark:text-periwinkle">The Moodboard</h1>
      </div>

      {/* 
          Main Chat Container 
          - min-h-[600px]: Ensures it's never too "squished"
          - max-h-[75vh]: Ensures it doesn't grow forever
          - flex-grow: Fills available space if the screen is large
      */}
      <div className="flex flex-col bg-white dark:bg-black/40 border border-periwinkle/20 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm relative min-h-[600px] max-h-[75vh] w-full mx-auto">
        
        {/* Messages Area - The Scrollable Zone */}
        <div 
          ref={scrollRef}
          className="flex-grow overflow-y-auto p-8 md:p-12 space-y-10 scroll-smooth"
        >
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-start gap-5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2 shadow-sm ${
                msg.sender === "ai" 
                  ? "bg-periwinkle/20 border-periwinkle/30 text-berry-brown dark:text-periwinkle" 
                  : "bg-berry-brown/10 border-berry-brown/20 text-berry-brown dark:text-periwinkle"
              }`}>
                {msg.sender === "ai" ? <Bot size={24} /> : <User size={24} />}
              </div>
              
              <div className={`max-w-[85%] md:max-w-[75%] p-6 rounded-3xl font-serif text-lg leading-relaxed shadow-sm ${
                msg.sender === "ai" 
                  ? "bg-cream dark:bg-zinc-900 border border-periwinkle/10 text-black dark:text-cream rounded-tl-none" 
                  : "bg-berry-brown text-white dark:bg-periwinkle dark:text-black rounded-tr-none shadow-md"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3 p-4 text-periwinkle animate-pulse">
              <div className="w-2.5 h-2.5 rounded-full bg-current"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-current delay-75"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-current delay-150"></div>
              <span className="text-sm font-serif italic ml-2">The guide is dreaming up a response...</span>
            </div>
          )}
        </div>

        {/* Input Area - Locked to the bottom */}
        <form 
          onSubmit={handleSend}
          className="p-8 bg-periwinkle/5 border-t border-periwinkle/10 backdrop-blur-md shrink-0"
        >
          <div className="relative flex items-center max-w-4xl mx-auto">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="How are you feeling today?"
              className="w-full pl-8 pr-20 py-5 rounded-full bg-white dark:bg-black border-2 border-periwinkle/20 focus:outline-none focus:border-berry-brown dark:focus:border-periwinkle transition-all shadow-inner text-lg font-serif"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-3 p-4 bg-berry-brown text-white dark:bg-periwinkle dark:text-black rounded-full hover:scale-110 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 cursor-pointer shadow-lg"
            >
              <Send size={24} />
            </button>
          </div>
          <p className="text-[10px] text-center mt-4 uppercase tracking-[0.3em] opacity-40 font-bold">
            A sanctuary for the whimsical mind
          </p>
        </form>
      </div>
    </div>
  );
}
