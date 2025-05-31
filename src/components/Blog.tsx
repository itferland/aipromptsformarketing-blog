const posts = [
  {
    title: "AI Prompt Engineering Trends (2025)",
    date: "May 2025",
    summary: "What’s new in prompt design and how it’s changing marketing and automation.",
    link: "#",
    tag: "AI Prompts",
  },
  {
    title: "n8n for Growth Hacking: No-Code Automations",
    date: "April 2025",
    summary: "Real-world examples using n8n to save time and boost results.",
    link: "#",
    tag: "n8n Automation",
  },
  {
    title: "Building Your First LLM Workflow",
    date: "March 2025",
    summary: "How to go from zero to running an LLM-powered workflow for business or fun.",
    link: "#",
    tag: "LLM",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-black/90 border-t border-b border-gray-700">
      <h2
        className="font-mono text-4xl md:text-5xl text-fuchsia-400 font-bold mb-8 text-center"
        style={{
          fontFamily: "'VT323', 'Fira Mono', monospace",
          textShadow: "0 0 6px #f0f, 0 0 10px #fff",
          letterSpacing: "2px"
        }}
      >
        Blog
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <a
            href={post.link}
            key={post.title}
            className="block rounded-xl bg-gray-900/95 border border-gray-700 p-6 transition-transform hover:scale-105 hover:shadow-2xl"
            style={{
              fontFamily: "'Fira Mono', monospace",
              textDecoration: "none",
            }}
          >
            <span className="text-fuchsia-300 font-bold text-sm">{post.tag}</span>
            <h3 className="text-xl mt-2 mb-2 font-bold text-white">{post.title}</h3>
            <div className="text-gray-400 text-xs mb-2">{post.date}</div>
            <div className="text-gray-300 text-sm">{post.summary}</div>
          </a>
        ))}
      </div>
      <div className="text-center mt-8 text-gray-500 font-mono text-sm opacity-70">
        More articles coming soon...
      </div>
    </section>
  );
}
