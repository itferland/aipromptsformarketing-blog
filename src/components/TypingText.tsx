// src/components/TypingText.tsx
import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
}

export default function TypingText({ text, speed = 30 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <pre className="terminal-output whitespace-pre-wrap">
      {displayedText}
      <span className="blinking-cursor">_</span>
    </pre>
  );
}
