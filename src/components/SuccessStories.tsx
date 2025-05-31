// src/components/SuccessStories.tsx
import React from "react";

// Example stories (customize as needed)
const stories = [
  {
    title: "Project Chimera",
    description:
      "Revolutionized data processing pipelines for a Fortune 500 company, achieving a 300% increase in efficiency using our custom AI models and n8n automation.",
    tags: ["AI", "Automation", "Big Data", "n8n"],
  },
  {
    title: "Operation Neon",
    description:
      "Developed a predictive analytics platform for e-commerce, boosting sales by 40% through personalized customer experiences driven by machine learning.",
    tags: ["Machine Learning", "E-commerce", "Analytics"],
  },
  {
    title: "Quantum Leap Solutions",
    description:
      "Implemented advanced NLP solutions for customer support automation, reducing response times by 75% and improving customer satisfaction scores significantly.",
    tags: ["NLP", "Customer Support", "Chatbots"],
  },
  {
    title: "Cybernetic Dreams Inc.",
    description:
      "Pioneered a visual inspection system using computer vision for manufacturing, cutting defect rates by 90% and enhancing quality control.",
    tags: ["Computer Vision", "Manufacturing", "QA"],
  },
];

export default function SuccessStories() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {stories.map((story) => (
        <div
          key={story.title}
          className="rounded-xl bg-[#111827ee] border border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all"
        >
          <h3
            className="text-3xl font-bold mb-2 crt-text"
            style={{
              fontFamily: "'VT323', 'Fira Mono', monospace",
              color: "#19fff7",
              textShadow: "0 0 6px #19fff7, 0 0 10px #333, 0 0 3px #19fff7",
              letterSpacing: "2px",
            }}
          >
            {story.title}
          </h3>
          <p className="text-gray-200 mb-4 font-mono">{story.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="bg-fuchsia-700 text-white px-3 py-1 rounded font-mono text-xs"
              >
                {tag}
              </spa
