import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-24 py-16 px-8 max-w-7xl mx-auto">
      {/* Hero Area */}
      <section className="text-center space-y-8 py-12">
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-berry-brown dark:text-periwinkle leading-tight">
          You're <span className="italic">home</span>, babe
        </h1>
        <p className="text-xl max-w-2xl mx-auto opacity-80 leading-relaxed font-serif">
          I'm an all America girl with a French twist and a get-shit-done mentality with a poet's sensibility.
        </p>
        <div className="pt-4">
          <Link 
            href="/books" 
            className="inline-block px-10 py-4 bg-periwinkle text-black rounded-full hover:bg-berry-brown hover:text-white transition-all duration-500 shadow-sm hover:shadow-lg font-medium"
          >
            Explore Books
          </Link>
        </div>
      </section>

      {/* Book Card Area */}
      <section className="space-y-16">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-serif text-berry-brown dark:text-periwinkle">Find Yourself in My World</h2>
          <div className="h-1 w-12 bg-periwinkle rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((book) => (
            <div key={book} className="group cursor-pointer flex flex-col items-center">
              <div className="aspect-[2/3] w-full bg-periwinkle/10 rounded-xl overflow-hidden border border-periwinkle/20 group-hover:border-berry-brown/50 transition-all duration-500 flex items-center justify-center text-periwinkle/40 font-serif italic text-xl shadow-sm group-hover:shadow-xl">
                <span className="group-hover:scale-110 transition-transform duration-500">Book Cover {book}</span>
              </div>
              <div className="mt-8 text-center space-y-2">
                <h3 className="text-xl font-serif group-hover:text-berry-brown dark:group-hover:text-periwinkle transition-colors">
                  The Story of Everything {book}
                </h3>
                <p className="text-sm uppercase tracking-widest opacity-50">Historical Fiction</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Preview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20 border-t border-periwinkle/20">
        <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-3xl bg-periwinkle/5 border border-periwinkle/10 flex items-center justify-center text-periwinkle/30 font-serif italic shadow-inner">
          <span className="text-2xl">I'm Cristina</span>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-serif text-berry-brown dark:text-periwinkle leading-tight">A Little About Me</h2>
          <p className="text-lg leading-relaxed opacity-80 font-serif">
            Being an Aries with a Pisces moon has created a coloful, yet challenging life. Balancing bold impulses with a desire to constantly get lost in fantasty is tricky business. I am living in my own world a lot of the time, and my biggest goal is to make the world as joyful as possible. 
          </p>
          <div className="pt-2">
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 border-b-2 border-berry-brown dark:border-periwinkle pb-1 font-medium hover:gap-4 transition-all duration-300 group"
            >
              Read my full story 
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
