import React from "react";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#181c20] pt-10">
      <h1 className="crt-text text-4xl mb-6 text-center">
        About Eric Ferland &amp; <span className="text-[#fff0b6]">AI Solutions Consulting</span>
      </h1>

      {/* Introduction */}
      <section className="glow-card w-full max-w-2xl">
        <p className="mb-4">
          Hi there! I’m an AI automation specialist and SaaS MVP builder with a strong background in infrastructure,
          security, and intelligent agent design. I help turn complex ideas into streamlined, scalable software—especially
          in AI-powered automation, cloud-based SaaS platforms, and advanced communication tools.
        </p>
        <p>
          I help clients bring Minimum Viable Products (MVPs) to market quickly and efficiently, combining clean code with
          robust architecture and agile workflows. Whether you’re looking to prototype a new SaaS product, automate
          workflows using AI agents, or integrate voice systems, I bring a technical yet practical approach that balances
          innovation with reliability.
        </p>
      </section>

      {/* Core Strengths */}
      <section className="glow-card w-full max-w-2xl mt-8">
        <h2 className="crt-text text-2xl mb-3">Core Strengths</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>AI &amp; Agent Automation (LLMs, prompt engineering, task orchestration)</li>
          <li>SaaS MVP Development (backend, APIs, CI/CD pipelines)</li>
          <li>Conversational AI &amp; Voice Bots</li>
          <li>Scalable Cloud Architecture (GCP, serverless, and modern cloud stacks)</li>
          <li>Low-code/No-code tools for rapid prototyping</li>
          <li>Third-party API integration and automation tools</li>
          <li>Real-time and async communication systems</li>
        </ul>
      </section>

      {/* Approach */}
      <section className="glow-card w-full max-w-2xl mt-8">
        <p>
          My approach focuses on clean architecture and maintainable code, delivering solutions that make life easier for
          both developers and users. I value clear communication, thoughtful design, and delivering trustworthy results.
        </p>
      </section>

      {/* Call to Action */}
      <section className="glow-card w-full max-w-2xl mt-8 text-center">
        <p>Want to discuss your project or explore a partnership? <a href="/contact" className="crt-link">Contact me here.</a></p>
      </section>

      <div className="crt-scanlines" />
    </main>
  );
}
