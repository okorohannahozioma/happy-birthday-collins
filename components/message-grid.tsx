'use client'

import { useEffect, useState } from 'react'

const birthdayMessages = [
  {
    id: 1,
    title: 'Keep Being Better ✨',
    desc: 'Never stop growing, learning, and outdoing yourself. You have so much potential inside you!',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 2,
    title: 'Have Ultimate Fun 🎮',
    desc: 'Enjoy every single moment of being a teenager. Laugh loud, play hard, and make unforgettable memories.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 3,
    title: 'Choose Happiness Always 😊',
    desc: 'Keep that beautiful smile on your face. Protect your joy and let it light up every room you walk into.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Try Everything You Want 🚀',
    desc: 'Be fearless! Try new things, join new activities, and don’t be afraid to make mistakes—that’s how you win.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Stay Focused & Driven 🎯',
    desc: 'Keep your eyes on your goals. Balance the fun with a sharp focus on what matters most to your future.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 6,
    title: 'Unstoppable Possibilities ⚡',
    desc: 'The world is completely yours right now. Trust yourself, work hard, and enjoy the amazing journey ahead!',
    color: 'from-fuchsia-500 to-pink-600',
  },
]

export function MessageGrid() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <section className="py-16 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Words of Wisdom for Chapter 13
          </h2>
          <p className="text-muted-foreground">Six rules to live by as you step into your best years.</p>
        </div>

        {/* 6-Card Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {birthdayMessages.map((msg, index) => (
            <div
              key={msg.id}
              className={`transform transition-all duration-700 p-1 rounded-2xl bg-gradient-to-br ${msg.color} shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-300`}
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="bg-background p-6 rounded-[14px] h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{msg.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{msg.desc}</p>
                </div>
                
                {/* Small decorative corner accent */}
                <div className="mt-4 flex justify-end">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${msg.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}