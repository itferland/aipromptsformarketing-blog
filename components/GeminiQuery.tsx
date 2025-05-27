
import React, { useState, useCallback } from 'react';
import { Button } from './Button';
import { ArcadeText } from './ArcadeText';
import { askGemini } from '../services/geminiService';

// Simple spinner component
const Spinner: React.FC = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);


export const GeminiQuery: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError("Please describe your marketing challenge or goal.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      // Adjust the prompt to be more specific for marketing if desired, or let user be specific
      const fullPrompt = `Analyze the following marketing challenge and provide actionable strategies, content ideas, or automation opportunities: "${prompt}"`;
      const result = await askGemini(fullPrompt);
      setResponse(result);
    } catch (err) {
      console.error("Gemini API error:", err);
      setError(err instanceof Error ? err.message : "An AI communication error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="bg-consultancy-bg-alt p-6 md:p-8 shadow-xl border-2 border-consultancy-accent rounded-lg max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="gemini-prompt" className="block mb-2">
            <ArcadeText as="span" className="text-sm text-consultancy-highlight">Describe Your Marketing Challenge or Goal:</ArcadeText>
          </label>
          <textarea
            id="gemini-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Generate Instagram post ideas for a local bakery, or suggest automation for lead follow-up..."
            rows={5}
            className="w-full p-3 bg-consultancy-bg border border-consultancy-border rounded-md text-consultancy-text focus:ring-2 focus:ring-consultancy-focus-ring focus:border-consultancy-focus-ring placeholder-consultancy-text-muted resize-vertical"
            disabled={isLoading}
            aria-required="true"
            aria-describedby={error ? "prompt-error" : undefined}
          />
        </div>
        <Button type="submit" variant="primary" size="lg" disabled={isLoading || !prompt.trim()}>
          {isLoading ? (
            <>
              <Spinner />
              Generating Ideas...
            </>
          ) : (
            "Get AI Insights"
          )}
        </Button>
      </form>

      {error && (
        <div id="prompt-error" role="alert" className="mt-6 p-4 bg-red-900/50 border border-consultancy-error rounded-md">
          <ArcadeText as="p" className="text-consultancy-error text-sm">{error}</ArcadeText>
        </div>
      )}

      {response && !error && (
        <div className="mt-8 p-6 bg-consultancy-bg border border-consultancy-border rounded-md">
          <ArcadeText as="h3" className="text-consultancy-positive text-lg mb-3">AI-Generated Strategies:</ArcadeText>
          <pre className="text-consultancy-text whitespace-pre-wrap text-sm leading-relaxed font-sans">{response}</pre>
        </div>
      )}
    </div>
  );
};
