export default function Approach() {
  return (
    <section id="approach" className="py-16 bg-black/95 border-b border-gray-700">
      <h2
        className="font-mono text-4xl md:text-5xl text-red-400 font-bold mb-6 text-center"
        style={{
          fontFamily: "'VT323', 'Fira Mono', monospace",
          textShadow: "0 0 10px #f00, 0 0 24px #fff",
          letterSpacing: "2px"
        }}
      >
        Our Approach
      </h2>
      <div className="max-w-2xl mx-auto text-center text-gray-200 text-lg font-mono">
        <p>
          We blend automation, AI, and practical systems thinking.  
          Our process: audit, design, rapid prototype, iterate—always hands-on and vendor-neutral.
        </p>
        <div className="mt-6">
          <span className="inline-block px-4 py-2 rounded-lg bg-red-500 text-white font-mono text-sm" style={{ textShadow: "0 0 8px #fff" }}>
            “No Bloat. No BS. Just Results.”
          </span>
        </div>
      </div>
    </section>
  );
}
