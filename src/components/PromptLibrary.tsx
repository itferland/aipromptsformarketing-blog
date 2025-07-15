import React from "react";
const prompts = [
  {
    title: "Blog Post Idea Generator",
    prompt: "Generate 10 blog post titles and a short description for each, targeting [audience] on [topic]."
  },
  {
    title: "Social Media Caption Crafter",
    prompt: "Write 5 catchy social captions for [platform] promoting [offer or topic], each under 150 characters."
  },
  {
    title: "Email Subject Line Variations",
    prompt: "Create 7 different subject lines for a newsletter about [news or promo], targeting [audience]."
  },
  {
    title: "SEO Keyword Brainstorm",
    prompt: "Suggest 15 keywords and 5 blog ideas for a [business type] targeting [audience] interested in [theme]."
  },
];
export default function PromptLibrary() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#181c20] pt-10">
      <h1 className="crt-text text-3xl mb-4">AI Prompt Library</h1>
      <section className="w-full max-w-2xl">
        {prompts.map((p, i) => (
          <div key={i} className="glow-card mb-4">
            <div className="crt-text text-xl mb-2">{p.title}</div>
            <pre className="bg-[#191f1a] text-[#00ff88] rounded p-3 select-all">
              {p.prompt}
            </pre>
          </div>
        ))}
      </section>
      <div className="crt-scanlines" />
    </main>
  );
}
