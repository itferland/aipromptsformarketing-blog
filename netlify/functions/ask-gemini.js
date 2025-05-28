// netlify/functions/ask-gemini.js
// Make sure this file is in project_root/netlify/functions/ask-gemini.js

const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed. Use POST.' }) };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    if (!prompt || typeof prompt !== 'string' || prompt.trim() === "") {
      return { statusCode: 400, body: JSON.stringify({ error: 'Prompt is required and must be a non-empty string.' }) };
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY_SERVER; // Set this in Netlify UI

    if (!GEMINI_API_KEY) {
      console.error("FATAL: GEMINI_API_KEY_SERVER not configured on Netlify.");
      return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error: API key missing.' }) };
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Or your preferred model

    console.log(`[Netlify Function] Received prompt: "${prompt}"`);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Log the raw response from Gemini for debugging if needed (optional)
    // console.log("[Netlify Function] Gemini API Response:", JSON.stringify(response, null, 2));

    const text = response.text();
    
    if (typeof text !== 'string') {
        console.error("[Netlify Function] Gemini API did not return a text string:", response);
        throw new Error("Gemini API response format error.");
    }

    console.log(`[Netlify Function] Sending back text: "${text.substring(0,100)}..."`);

    return {
      statusCode: 200,
      body: JSON.stringify({ text }),
      headers: {
        'Access-Control-Allow-Origin': '*', // Or your specific frontend domain for production
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    console.error("[Netlify Function] Error processing request:", error);
    let errorMessage = "Failed to get response from Gemini on server.";
    if (error.message) {
        errorMessage += ` Details: ${error.message}`;
    }
    if (error.response && error.response.promptFeedback) {
        errorMessage += ` Prompt Feedback: ${JSON.stringify(error.response.promptFeedback)}`;
    }

    return {
      statusCode: 500, // Or a more specific error code if identifiable
      body: JSON.stringify({ error: errorMessage }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
  }
};