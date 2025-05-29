
import React, { useState, useEffect } from 'react';

const WELCOME_TEXT = "AI Solutions Consulting";

export default function WelcomeScreen() {
  const [displayedText, setDisplayedText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + WELCOME_TEXT[index]);
      index++;
      if (index === WELCOME_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-black text-green-400 flex items-center justify-center font-mono text-center text-xl sm:text-3xl px-4 relative overflow-hidden crt-scanlines crt-flicker">
      <div className="z-20">
        {displayedText}
        {!done && <span className="animate-pulse">|</span>}
      </div>
    </div>
  );
}
