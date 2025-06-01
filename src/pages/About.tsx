import React from "react";
export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#181c20] pt-10">
      <div className="crt-text text-4xl mb-6 text-center">
        About <span className="text-[#fff0b6]">AI Prompts for Marketing</span>
      </div>
      <section className="glow-card w-full max-w-2xl">
        <h2 className="crt-text text-2xl mb-3">Our Mission</h2>
        <p>
          We demystify AI marketing automation for business owners, marketers, and solopreneurs—empowering you to <b>unlock the full potential of artificial intelligence</b> through intelligent prompt engineering and automation frameworks.
        </p>
        <p className="mt-3">
          This site is both a resource hub and a showcase of AI-powered automation for marketing and content ops.
        </p>
      </section>
      <section className="glow-card w-full max-w-2xl mt-8">
        <h3 className="crt-text text-xl mb-2">How We Help</h3>
        <ul className="list-disc list-inside">
          <li>Actionable AI automation guides</li>
          <li>Prompt libraries for every use case</li>
          <li>Tool reviews and best practices</li>
          <li>Blueprints for real automation</li>
        </ul>
      </section>
      <div className="crt-scanlines" />
    </main>
  );
}
