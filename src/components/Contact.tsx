// src/components/Contact.tsx
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-black border-t border-gray-700 text-center"
    >
      <h2
        className="font-mono text-3xl md:text-4xl text-cyan-400 font-bold mb-5 crt-text"
        style={{
          fontFamily: "'VT323', 'Fira Mono', monospace",
          textShadow: "0 0 8px #00fff7, 0 0 16px #00bcd4",
          letterSpacing: "2px",
        }}
      >
        Contact
      </h2>
      <p className="text-gray-200 mb-8 font-mono text-lg">
        DM me on LinkedIn or X!
      </p>
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.linkedin.com/in/eferland/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white font-mono text-lg shadow transition-all"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>
        <a
          href="https://x.com/aisolutionsconsulting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded bg-gray-900 hover:bg-gray-700 text-white font-mono text-lg shadow transition-all"
        >
          <FaTwitter size={22} />
          X (@aisolutionsconsulting)
        </a>
      </div>
      <p className="text-gray-400 font-mono text-xs">
        Or email:{" "}
        <a
          href="mailto:itferland@gmail.com"
          className="underline text-cyan-300"
        >
          itferland@gmail.com
        </a>
      </p>
    </section>
  );
}
