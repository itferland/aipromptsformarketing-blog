import { useEffect, useState } from 'react';

interface Props {
  text: string;
}

export default function TypingText({ text }: Props) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return <div>{displayedText}</div>;
}
