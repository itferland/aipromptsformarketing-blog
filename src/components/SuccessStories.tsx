// src/components/SuccessStories.tsx

const stories = [
  {
    image: "/project-chimera.jpg", // Put these images in your public/ folder
    title: "Project Chimera",
    description:
      "Revolutionized data processing pipelines for a Fortune 500 company, achieving a 300% increase in efficiency using our custom AI models and n8n automation.",
    tags: ["AI", "Automation", "Big Data", "n8n"],
    link: "#", // Optional, real link if you have one
    titleColor: "text-cyan-400",
  },
  {
    image: "/operation-neon.jpg",
    title: "Operation Neon",
    description:
      "Developed a predictive analytics platform for e-commerce, boosting sales by 40% through personalized customer experiences driven by machine learning.",
    tags: ["Machine Learning", "E-commerce", "Analytics"],
    link: "#",
    titleColor: "text-cyan-300",
  },
  {
    image: "/quantum-leap.jpg",
    title: "Quantum Leap Solutions",
    description:
      "Implemented advanced NLP solutions for customer support automation, reducing response times by 75% and improving customer satisfaction scores significantly.",
    tags: ["NLP", "Customer Support", "Chatbots"],
    link: "#",
    titleColor: "text-cyan-200",
  },
  {
    image: "/cybernetic-dreams.jpg",
    title: "Cybernetic Dreams Inc.",
    description:
      "Pioneered a visual inspection system using computer vision for manufacturing, cutting defect rates by 90% and enhancing quality control.",
    tags: ["Computer Vision", "Manufacturing", "QA"],
    link: "#",
    titleColor: "text-cyan-300",
  },
];

export default function SuccessStories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {stories.map((story, i) => (
        <a
          href={story.link}
          target={story.link.startsWith("http") ? "_blank" : undefined}
          rel={story.link.startsWith("http") ? "noopener noreferrer" : undefined}
          key={story.title}
          className="block group"
          style={{ textDecoration: "none" }}
        >
          <div className="bg-gray-900/90 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col h-full">
            <img
              src={story.image}
              alt={story.title}
              className="h-40 w-full object-cover object-center border-b border-gray-700"
              style={{ filter: "contrast(1.1) brightness(0.92) blur(0.5px)" }}
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3
                className={`font-mono text-2xl md:text-3xl font-bold mb-2 tracking-wider ${story.titleColor}`}
                style={{
                  fontFamily: "'VT323', 'Fira Mono', monospace",
                  letterSpacing: "2px",
                  textShadow:
                    "0 0 6px #00ffffcc, 0 0 16px #003300, 0 0 2px #00ffcc",
                }}
              >
                {story.title}
              </h3>
              <p className="text-gray-200 font-mono mb-3 text-sm md:text-base">{story.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block font-mono text-xs md:text-sm px-3 py-1 rounded bg-fuchsia-700 text-white"
                    style={{
                      letterSpacing: "1px",
                      boxShadow: "0 0 6px #f0f, 0 0 2px #fff",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
