import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_MODEL_TEXT } from '../constants';

// Safely access process.env.API_KEY
let apiKeyFromEnv: string | undefined = undefined;
if (typeof process !== 'undefined' && typeof process.env !== 'undefined') {
  apiKeyFromEnv = process.env.API_KEY;
}

const API_KEY = apiKeyFromEnv;

if (!API_KEY) {
  console.warn(
    "Gemini API key (process.env.API_KEY) is not set or accessible in the current environment. API calls will fail. Ensure the API_KEY environment variable is configured and made available to your application (e.g., through a build process that replaces process.env.API_KEY)."
  );
}

// Initialize GoogleGenAI with the API_KEY, which can be undefined if not found.
// The GoogleGenAI SDK can handle an undefined apiKey.
const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function askGemini(prompt: string): Promise<string> {
  if (!API_KEY) {
    // This message is shown to the user in the UI via setError in GeminiQuery.tsx
    return Promise.reject(new Error("API Key for Gemini is not configured or accessible. Please ensure the API_KEY environment variable is set and available to the application."));
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: prompt,
      // config: {} // Add any specific generation config here if needed
    });
    
    const text = response.text;
    
    // The .text property should directly provide the string.
    // Check if text is not a string (e.g. undefined or null if API returned unexpected content)
    if (typeof text !== 'string') {
        console.error("Invalid or empty response text from Gemini API:", response);
        throw new Error("Received empty or invalid text response from Gemini API.");
    }
    return text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API request failed: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with Gemini API.");
  }
}

// Example for image generation (not used in current UI, but for completeness)
// import { GenerateImageResponse } from "@google/genai"; // This type might not be directly exported, refer to SDK docs for exact image response types
// export async function generateImageWithGemini(prompt: string): Promise<string> {
//   if (!API_KEY) {
//     return Promise.reject(new Error("API Key for Gemini is not configured."));
//   }
//   try {
//     const response = await ai.models.generateImages({ // The actual type for 'response' should be checked from SDK docs
//         model: 'imagen-3.0-generate-002', 
//         prompt: prompt,
//         config: {numberOfImages: 1, outputMimeType: 'image/jpeg'},
//     });

//     if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image?.imageBytes) {
//       const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
//       return `data:image/jpeg;base64,${base64ImageBytes}`;
//     } else {
//       throw new Error("No image generated or image data missing.");
//     }
//   } catch (error) {
//     console.error("Error generating image with Gemini:", error);
//     if (error instanceof Error) {
//         throw new Error(`Gemini image generation failed: ${error.message}`);
//     }
//     throw new Error("An unknown error occurred during image generation.");
//   })
// }
