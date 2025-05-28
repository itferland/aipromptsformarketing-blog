// This file should now call your backend serverless function
// Ensure this matches the implementation from previous steps
export async function askGemini(prompt: string): Promise<string> {
  try {
    const response = await fetch('/.netlify/functions/ask-gemini', { // Or /api/ask-gemini if using redirects
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      let errorMsg = `Server error: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMsg = errorData.error || errorMsg;
      } catch (e) {
        // Response might not be JSON, stick with status
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
     if (data.error) {
      throw new Error(data.error);
    }
    return data.text;
  } catch (error) {
    console.error("Error calling backend proxy in geminiService:", error);
    return `❌ Transmission Error: ${error instanceof Error ? error.message : String(error)}`;
  }
}