function Home() {
    return (
      <div className="bg-castle bg-cover bg-center min-h-screen flex flex-col items-center justify-end text-center p-6 relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
  
        <div className="relative z-10 mb-16">
          <h1 className="text-5xl font-harrypotter text-gold tracking-widest mb-8 animate-sparkle shadow-md">
            The Magnificent Harry Potter App
          </h1>
          <p className="text-xl text-white opacity-50 font-serif max-w-prose animate-fade-in">
            Dive into the magical world of Harry Potter, where you can explore the
            enchanting characters, their stories, and much more. Let the magic begin!
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;
  