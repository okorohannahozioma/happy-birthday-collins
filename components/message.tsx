'use client'

export function Message() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-accent/10">
          {/* Decorative elements */}
          <div className="flex justify-center mb-8">
            <div className="text-5xl">✨</div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Thirteen looks good on you!
          </h2>

          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Today marks the beginning of an incredible chapter. You&apos;re stepping into the teenage years with so much potential, so many dreams ahead, and a whole world waiting to see what you&apos;ll do with it.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              This is your time to explore, to discover who you are, to take chances, and to become the person you&apos;re meant to be. Every moment, every experience, every challenge is shaping you into something amazing.
            </p>
          </div>

          {/* Birthday wishes from family */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 pt-8 border-t border-accent/20">
            <div className="text-center">
              <p className="text-2xl mb-2">🎂</p>
              <p className="font-semibold text-foreground mb-2">Make a Wish</p>
              <p className="text-sm text-muted-foreground">Close your eyes and think of something special</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-2">🎉</p>
              <p className="font-semibold text-foreground mb-2">Make it Count</p>
              <p className="text-sm text-muted-foreground">Every birthday is a chance to start fresh</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-2">❤️</p>
              <p className="font-semibold text-foreground mb-2">You Are Loved</p>
              <p className="text-sm text-muted-foreground">Surrounded by people who believe in you</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-2">🌟</p>
              <p className="font-semibold text-foreground mb-2">Shine Bright</p>
              <p className="text-sm text-muted-foreground">The world is ready for your light</p>
            </div>
          </div>

          {/* Main message */}
          <div className="text-center pt-8 border-t border-accent/20">
            <p className="text-xl md:text-2xl font-bold text-accent mb-3">
              Here&apos;s to 13 and beyond! 🎊
            </p>
            <p className="text-muted-foreground italic">
              "The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt
            </p>
          </div>

          {/* Edit this section */}
          <div className="mt-12 pt-8 border-t border-accent/20 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              I am so proud of you, Collins.
            </p>
            <div className="bg-accent/5 rounded-lg p-4 text-sm text-foreground inline-block">
              <p>Happy birthday, my boy!</p>
              <p className="text-xs text-muted-foreground mt-2">
              Happy birthday!
              </p>
            </div>
          </div>
        </div>

        {/* Floating confetti-like elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 20}px`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {'🎈🎉🎊🌟✨'[Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  )
}
