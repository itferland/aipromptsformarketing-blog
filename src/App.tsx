import ASCIIDrift from "./components/ASCIIDrift";
import FlowNodesBackground from "./components/FlowNodesBackground";
import FloatingMenu from "./components/FloatingMenu";
import SuccessStories from "./components/SuccessStories";
import News from "./components/News"; // This is the live Google News section
import Contact from "./components/Contact";
import Approach from "./components/Approach";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated backgrounds */}
      <ASCIIDrift />
      <FlowNodesBackground />
      {/* CRT Scanlines overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 crt-scanlines"></div>
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center px-2">
        {/* CRT Pixel Hero */}
        <h1
          className="crt-text text-5xl md:text-6xl mb-3 mt-8 text-center"
          style={{
            fontFamily: "'VT323', 'Fira Mono', monospace",
            color: "#00ff88",
            textShadow: "0 0 12px #00ff88, 0 0 36px #003300, 0 0 4px #00ff88",
            letterSpacing: "2px"
          }}
        >
          AI Solutions Consulting
        </h1>
        <p className="mb-10 text-lg md:text-2xl text-gray-200 max-w-2xl text-center font-mono">
          Unlock your brand's full potential with AI-powered automation and pixel-perfect engineering.
        </p>
        
        {/* Floating Menu */}
        <FloatingMenu />
        
        {/* Success Stories Section */}
        <section id="success-stories" className="w-full max-w-6xl mt-8 mb-16">
          <h2
            className="font-mono text-5xl md:text-6xl text-yellow-400 font-bold mb-10 text-center"
            style={{
              fontFamily: "'VT323', 'Fira Mono', monospace",
              textShadow: "0 0 8px #fff200, 0 0 16px #ffb800",
              letterSpacing: "2px"
            }}
          >
            Success Stories
          </h2>
          <SuccessStories />
        </section>
        
        {/* LIVE AI/Tech News Section */}
        <News />

        {/* Our Approach */}
        <Approach />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <footer className="mt-auto w-full py-4 text-center text-gray-400 font-mono text-xs">
          © {new Date().getFullYear()} AI Solutions Consulting. All rights reserved.<br />
          <span className="text-yellow-500">Retro Design Initiative</span>
        </footer>
      </main>
    </div>
  );
}
