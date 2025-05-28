import React, { useState } from "react";
import { askGemini } from "../services/geminiService";
import { Button } from "./Button";
import { ArcadeText } from "./ArcadeText";

export const GeminiQuery = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const result = await askGemini(prompt);
      setResponse(result);
    } catch (err: any) {
      console.error("Gemini error:", err);
      setError("⚠️ Failed to get a response from Gemini.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-black text-green-400 rounded-lg max-w-xl mx-auto mt-6 border border-green-500 shadow-lg">
      <ArcadeText text="Ask Gemini AI" />
      <textarea
        className="w-full mt-4 p-2 rounded bg-gray-900 text-white border border-green-500"
        rows={4}
        placeholder="Ask me anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Thinking..." : "Submit"}
      </Button>

      {error && <p className="text-red-400 mt-2">{error}</p>}

      {response && (
        <div className="mt-4 p-3 rounded bg-gray-800 border border-green-600 whitespace-pre-wrap">
          <strong className="block text-green-300 mb-1">Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};
