import React from "react";
import ASCIIDrift from "./ASCIIDrift";
import FlowNodesBackground from "./FlowNodesBackground";
import FloatingMenu from "./FloatingMenu";

export default function MainApp({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden font-mono text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <ASCIIDrift />
        <div className="scanlines absolute inset-0 z-10" />
        <FlowNodesBackground />
      </div>
      {/* Main Content */}
      <main className="relative z-10 p-8">
        {children}
      </main>
      {/* Floating Menu */}
      <FloatingMenu />
    </div>
  );
}
