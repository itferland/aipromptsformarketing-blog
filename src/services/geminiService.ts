// src/services/geminiService.ts

export async function askGemini(prompt: string): Promise<string> {
  try {
    // The path to your Netlify function will be /.netlify/functions/ask-gemini
    const response = await fetch('/.netlify/functions/ask-gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }), // Send the prompt in the request body
    });

    if (!response.ok) {
      let errorMsg = `Server error: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMsg = errorData.error || errorMsg;
      } catch (e) {
        // Ignore if response is not JSON
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    if (data.error) { // Check for error property from your function's response
      throw new Error(data.error);
    }
    return data.text;
  } catch (error) {
    console.error("Error calling backend proxy:", error);
    // Provide a more user-friendly error message
    return `❌ Failed to get response: ${error instanceof Error ? error.message : String(error)}`;
  }
}