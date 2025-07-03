// src/services/geminiService.ts
// This file should call your backend serverless function
// Ensure this matches the implementation from previous steps for Netlify deployment

export async function askGemini(prompt: string): Promise<string> {
  try {
    // The path to your Netlify function (or other serverless endpoint)
    // If using redirects in netlify.toml from /api/* to /.netlify/functions/*
    // you could use '/api/ask-gemini'
    const endpoint = '/.netlify/functions/ask-gemini'; 
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }), // Send the prompt in the request body
    });

    if (!response.ok) {
      let errorMsg = \SERVER_RESPONSE_ERROR: ${response.status}\;
      try {
        const errorData = await response.json();
        errorMsg = errorData.error || errorMsg; // Use server's error message if available
      } catch (e) {
        // Response might not be JSON, stick with status based error
        console.warn("Response from serverless function was not JSON.", response);
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    if (data.error) { // Check for functional error property from your function's response
      throw new Error(data.error);
    }
    if (typeof data.text !== 'string') {
      console.error("Unexpected response structure from serverless function:", data);
      throw new Error("Received invalid data structure from server.");
    }
    return data.text;
  } catch (error) {
    console.error("Error calling backend proxy in geminiService:", error);
    const message = error instanceof Error ? error.message : String(error);
    // Provide a more user-friendly error message
    return \// CRITICAL_SYSTEM_FAILURE // Transmission_Error: ${message}\;
  }
}