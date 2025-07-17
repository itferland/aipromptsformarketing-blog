import { GoogleGenAI, Chat } from '@google/genai';
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { ChatBubbleIcon, SendIcon, XIcon } from './Icons';
import { apiKey } from './apiKey';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 p-2">
      <span className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
      <span className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
      <span className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></span>
  </div>
);

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Chatbot({ isOpen, setIsOpen }: ChatbotProps): React.ReactNode {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (apiKey) {
      const ai = new GoogleGenAI({ apiKey: apiKey });
      chatRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: 'You are a friendly and helpful AI consultant for "AI Solutions Consulting". Your goal is to answer questions about the company, its services (SaaS platform, consulting), and how it helps SMBs and enterprises. Keep your answers concise, professional, and encouraging. Do not invent information. If you dont know an answer, say you will connect them with a human expert.',
        },
      });
    }
  }, []);

  const handleSendMessage = async (messageText: string) => {
    if (isLoading || !messageText.trim()) return;

    setIsLoading(true);
    const userMessage: Message = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    if (!chatRef.current) {
        setMessages(prev => [...prev, { role: 'model', text: "I can't seem to connect to my brain right now. Please try again later."}]);
        setIsLoading(false);
        return;
    }

    // Add a placeholder for the streaming response
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      const result = await chatRef.current.sendMessageStream({ message: messageText });

      for await (const chunk of result) {
        const chunkText = chunk.text;
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text += chunkText;
            return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = "Sorry, I encountered an error. Please try again.";
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };
  
  const suggestedPrompts = [
    "What services do you offer?",
    "How do you help startups?",
    "Tell me about your consulting process.",
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-violet-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200 ease-in-out z-50"
        aria-label="Toggle Chat"
      >
        {isOpen ? <XIcon className="w-8 h-8" /> : <ChatBubbleIcon className="w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-[#0d0d0d] border border-slate-700 rounded-2xl shadow-2xl flex flex-col z-40 transition-opacity duration-300 ease-in-out opacity-100">
          <header className="p-4 border-b border-slate-700">
            <h3 className="font-bold text-white text-lg">AI Consultant</h3>
            <p className="text-sm text-slate-400">Powered by Gemini</p>
          </header>

          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.length === 0 && (
                <div className="text-slate-300">
                    <p className="p-3 bg-slate-800 rounded-lg">Hi there! How can I help you today?</p>
                    <div className="mt-4 space-y-2">
                        {suggestedPrompts.map((prompt) => (
                           <button key={prompt} onClick={() => handleSendMessage(prompt)} className="w-full text-left p-2 bg-slate-800/50 hover:bg-slate-800 rounded-lg text-sm transition-colors">
                               {prompt}
                           </button>
                        ))}
                    </div>
                </div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-sm rounded-xl px-4 py-2 ${msg.role === 'user' ? 'bg-teal-500/20 text-slate-200' : 'bg-slate-800 text-slate-300'}`}>
                  {msg.text ? <p className="whitespace-pre-wrap">{msg.text}</p> : <TypingIndicator />}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-700">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-teal-500 text-white rounded-lg p-2 disabled:bg-slate-600 disabled:opacity-50 hover:bg-teal-600 transition-colors"
                aria-label="Send Message"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}