import React from "react";
export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#181c20] pt-10">
      <h1 className="crt-text text-3xl mb-6">Contact & Connect</h1>
      <section className="glow-card w-full max-w-xl">
        <div className="crt-text mb-2 text-xl">Let's talk AI automation!</div>
        <div>
          <b>Email:</b> <a href="mailto:contact@aipromptsformarketing.net" className="crt-link">contact@aipromptsformarketing.net</a>
        </div>
        <div className="mt-3 flex flex-wrap gap-4">
          <a href="https://www.linkedin.com/in/eferland/" className="cta-button" target="_blank" rel="noopener noreferrer">
            DM on LinkedIn
          </a>
          <a href="https://x.com/aipromptsforyou" className="cta-button" target="_blank" rel="noopener noreferrer">
            Message on X (Twitter)
          </a>
        </div>
        <div className="mt-6">
          Want to showcase your automation? <br />Send your story and we might feature it!
        </div>
      </section>
      <div className="crt-scanlines" />
    </main>
  );
}
