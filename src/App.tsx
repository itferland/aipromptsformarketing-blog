// src/App.tsx
import { useState } from "react";
import TypingText from "./components/TypingText";
import "./index.css";

export default function App() {
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.currentTarget.elements.namedItem("prompt") as HTMLInputElement).value;

    // Simulated API response for demo
    setResponse("Thinking...\n\n" + "Here's what I found about that prompt:\n\n" + input.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl mb-4 terminal-title">AI Prompts Terminal</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <input
          name="prompt"
          type="text"
          className="terminal-input w-full p-2 mb-4 bg-black border border-green-400 text-green-400 focus:outline-none"
          placeholder="Enter your prompt..."
        />
      </form>

      {response && <TypingText text={response} />}
    </div>
  );
}
