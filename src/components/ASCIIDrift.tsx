import React, { useEffect, useRef } from "react";

const CHAR_SET = "░▒▓█@#%$*+=-:. ".split("");
const ROWS = 18;
const COLS = 56;
const FPS = 14;

export default function ASCIIDrift() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    let raf: number;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.font = "16px VT323, monospace";
    ctx.fillStyle = "#00ff88";
    ctx.globalAlpha = 0.13;

    function draw() {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          const char = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
          ctx.fillText(char, x * 20, y * 22 + 18);
        }
      }
      raf = window.setTimeout(draw, 1000 / FPS);
    }
    draw();
    return () => window.clearTimeout(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={COLS * 20}
      height={ROWS * 24}
      style={{
        position: "fixed",
        zIndex: 0,
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        opacity: 0.32,
      }}
      aria-hidden="true"
    />
  );
}
