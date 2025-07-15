import React from "react";
const tools = [
  { name: "Jasper AI", url: "https://jasper.ai/", desc: "Content generation, ad copy, blogs, and more." },
  { name: "Writesonic", url: "https://writesonic.com/", desc: "Long-form writing and SEO content automation." },
  { name: "Copy.ai", url: "https://copy.ai/", desc: "Sales copy, email, and marketing automation tools." },
  { name: "Zapier", url: "https://zapier.com/", desc: "Connect apps, automate workflows, including AI tools." },
  { name: "Make (Integromat)", url: "https://make.com/", desc: "Advanced visual automation builder for multi-step workflows." },
];
export default function Tools() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#181c20] pt-10">
      <h1 className="crt-text text-3xl mb-4">Recommended AI Tools & Resources</h1>
      <section className="w-full max-w-2xl">
        {tools.map((tool, i) => (
          <div key={i} className="glow-card mb-3">
            <a href={tool.url} className="crt-link text-xl" target="_blank" rel="noopener noreferrer">{tool.name}</a>
            <div className="text-sm mt-1 text-[#b4ffe3]">{tool.desc}</div>
          </div>
        ))}
      </section>
      <div className="crt-scanlines" />
    </main>
  );
}
