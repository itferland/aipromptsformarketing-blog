export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black/80 border-b border-gray-700">
      <h2
        className="font-mono text-4xl md:text-5xl text-cyan-300 font-bold mb-6 text-center"
        style={{
          fontFamily: "'VT323', 'Fira Mono', monospace",
          textShadow: "0 0 6px #0ff, 0 0 10px #fff",
          letterSpacing: "2px"
        }}
      >
        Contact Us
      </h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg mb-6 text-gray-200">
          Reach out for a consultation, demo, or just to talk shop!
        </p>
        <a
          href="mailto:itferland@gmail.com"
          className="inline-block px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-400 transition-colors font-mono text-xl text-white shadow-lg"
          style={{
            fontFamily: "'VT323', 'Fira Mono', monospace",
            letterSpacing: "2px",
            textShadow: "0 0 10px #0ff",
          }}
        >
          itferland@gmail.com
        </a>
        <div className="mt-8 text-gray-400 text-xs">Or DM me on LinkedIn/X!</div>
      </div>
    </section>
  );
}
