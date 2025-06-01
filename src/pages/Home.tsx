import React from "react";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#181c20] pt-10">
      <div className="crt-text text-4xl mb-6 text-center">
        Unlock AI Marketing Automation
      </div>
      <section className="glow-card w-full max-w-2xl">
        <h2 className="crt-text text-2xl mb-3">Welcome!</h2>
        <p>
          <b>aipromptsformarketing.net</b> empowers you to automate your marketing with intelligent AI prompts. Streamline your workflow, scale your business, and focus on creative strategy—while your site runs itself.
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
