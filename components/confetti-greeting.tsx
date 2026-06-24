'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export function ConfettiGreeting() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const triggerConfetti = async () => {
      const duration = 3.5 * 1000; 
      const animationEnd = Date.now() + duration;
      
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

        setTimeout(() => {
        setShowOverlay(false);
      }, 3500);
    };

    triggerConfetti();
  }, []);

  return (
    <>
      {showOverlay && (
        /* Added a solid background and increased zIndex so the main layout stays completely invisible */
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50 animate-overlay-fade-out">
          <div className="text-center relative z-50">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-greeting-bounce px-4">
              Happy Birthday, Collins!
            </h1>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes overlayFadeOut {
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            pointer-events: none;
          }
        }

        @keyframes greetingBounce {
          0% {
            transform: scale(0.8) translateY(-20px);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-overlay-fade-out {
          animation: overlayFadeOut 3.5s ease-out forwards;
        }

        .animate-greeting-bounce {
          animation: greetingBounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </>
  );
}