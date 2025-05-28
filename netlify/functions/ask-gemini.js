// netlify/functions/ask-gemini.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    if (!prompt) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Prompt is required.' }) };
    }

    // Access your API key securely from environment variables
    // This will be set in your Netlify dashboard, NOT in your code or .env file
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY_SERVER; // Use a distinct name

    if (!GEMINI_API_KEY) {
      console.error("API key not configured on server.");
      return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured on server.' }) };
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Or your preferred model

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ text }),
      // Basic CORS header - adjust if needed, Netlify might handle some of this
      headers: {
        'Access-Control-Allow-Origin': '*', // Or your specific frontend domain for better security
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    console.error("Error in ask-gemini function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to get response from Gemini on server." }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
  }
};