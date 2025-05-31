import { useEffect, useState } from "react";

const RSS_FEED_URL = "https://news.google.com/rss/search?q=artificial+intelligence+OR+technology";

type Post = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

export default function News() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      RSS_FEED_URL
    )}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "ok") throw new Error(data.message || "Failed to load news");
        setPosts(data.items.slice(0, 8)); // Show the latest 8 headlines
      })
      .catch((err) => setError(err.message || "Failed to fetch news"));
  }, []);

  return (
    <section id="news" className="py-16 bg-black/90 border-t border-b border-gray-700">
      <h2
        className="font-mono text-4xl md:text-5xl text-cyan-400 font-bold mb-8 text-center"
        style={{
          fontFamily: "'VT323', 'Fira Mono', monospace",
          textShadow: "0 0 10px #0ff, 0 0 18px #00bcd4",
          letterSpacing: "2px"
        }}
      >
        Latest AI &amp; Tech News
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {error && (
          <div className="col-span-full text-red-500 text-center">{error}</div>
        )}
        {!error &&
          posts.map((post) => (
            <a
              href={post.link}
              key={post.link}
              className="block rounded-xl bg-gray-900/95 border border-gray-700 p-6 transition-transform hover:scale-105 hover:shadow-2xl"
              style={{
                fontFamily: "'Fira Mono', monospace",
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-gray-400 text-xs mb-2">
                {new Date(post.pubDate).toLocaleDateString()}
              </div>
              <h3 className="text-lg mt-2 mb-2 font-bold text-white">{post.title}</h3>
              <div
                className="text-gray-300 text-sm"
                dangerouslySetInnerHTML={{
                  __html:
                    post.description.length > 160
                      ? post.description.slice(0, 160) + "..."
                      : post.description,
                }}
              />
            </a>
          ))}
      </div>
      <div className="text-center mt-8 text-gray-500 font-mono text-sm opacity-70">
        {posts.length === 0 && !error ? "Loading news..." : "Powered by Google News"}
      </div>
    </section>
  );
}
