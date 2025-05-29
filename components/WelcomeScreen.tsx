import TypingText from './TypingText';

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-green-400 font-mono text-2xl scanlines">
      <TypingText text="AI Solutions Consulting" />
    </div>
  );
}
