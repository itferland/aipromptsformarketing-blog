import React, { useEffect, useState } from "react";
type BlogPost = {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  url: string;
};
export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // CHANGE THIS to your Google Sheet CSV URL
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_EXAMPLE/pub?gid=0&single=true&output=csv";
    fetch(csvUrl)
      .then((res) => res.text())
      .then((csv) => {
        const lines = csv.split("\n");
        const [header, ...rows] = lines;
        const posts = rows
          .filter((row) => row.trim() && row.split(",").length >= 5)
          .map((row) => {
            const vals = row.split(",");
            return {
              title: vals[0],
              date: vals[1],
              author: vals[2],
              excerpt: vals[3],
              url: vals[4],
            } as BlogPost;
          });
        setPosts(posts);
        setLoading(false);
      });
  }, []);
  if (loading) return <div className="crt-text">Loading latest posts...</div>;
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#181c20] pt-10 relative">
      <h1 className="crt-text text-3xl mb-4">Blog – Latest AI Automation</h1>
      <section className="w-full max-w-2xl">
        {posts.map((post, idx) => (
          <div key={idx} className="glow-card mb-3">
            <a href={post.url} className="crt-link text-xl" target="_blank" rel="noopener noreferrer">{post.title}</a>
            <div className="text-sm mb-2 text-[#b4ffe3]">{post.date} • {post.author}</div>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </section>
      <div className="crt-scanlines" />
    </div>
  );
}
