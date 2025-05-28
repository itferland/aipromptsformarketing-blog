import { GoogleGenerativeAI } from "@google/generative-ai";

// Read API key from environment variable
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("VITE_GEMINI_API_KEY is not set in the environment.");
}

const genAI = new GoogleGenerativeAI(apiKey);

/**
 * Sends a prompt to Gemini and returns the response text.
 * @param prompt The user's input prompt
 * @returns Gemini's response as a string
 */
export async function askGemini(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    return "❌ Failed to generate response from Gemini.";
  }
}
