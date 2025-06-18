import React from "react";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#181c20] pt-10">
      <div className="crt-text text-4xl mb-4 text-center">
        AI Automation Made Practical — SaaS + Consulting That Actually Solves IT Problems
      </div>
      <p className="mb-6 text-center max-w-2xl">
        We help SMBs eliminate manual IT work, secure cloud identity, and modernize operations with lightweight SaaS tools and expert consulting — no enterprise complexity, no bloated software.
      </p>
      <section className="glow-card w-full max-w-2xl">
        <h2 className="crt-text text-2xl mb-3">Welcome!</h2>
        <p>
          <b>aisolutionsconsulting.net</b> empowers you to automate your marketing with intelligent AI prompts. Streamline your workflow, scale your business, and focus on creative strategy—while your site runs itself.
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li>Automation guides for content, email, and social</li>
          <li>Prompt libraries to use with any AI</li>
          <li>Tool reviews and real-world blueprints</li>
          <li>Blog that updates from a public Google Sheet</li>
        </ul>
      </section>
      <div className="crt-scanlines" />
    </main>
  );
}
