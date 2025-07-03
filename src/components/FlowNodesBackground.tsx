import { useRef, useEffect } from "react";

const NODE_COUNT = 13;
const WIDTH = 1920;
const HEIGHT = 1080;
const REWIRE_INTERVAL = 3000; // ms

type Node = {
  x: number;
  y: number;
  dx: number;
  dy: number;
};

type Connection = [number, number]; // node indexes

function randomNode(): Node {
  return {
    x: Math.random() * WIDTH,
    y: Math.random() * HEIGHT,
    dx: (Math.random() - 0.5) * 0.7,
    dy: (Math.random() - 0.5) * 0.7,
  };
}

function randomConnections(nodeCount: number): Connection[] {
  const conns: Connection[] = [];
  for (let i = 0; i < nodeCount; i++) {
    const targets = new Set<number>();
    // Each node connects to 2–3 others
    const numLinks = 2 + Math.floor(Math.random() * 2);
    while (targets.size < numLinks) {
      const target = Math.floor(Math.random() * nodeCount);
      if (target !== i) targets.add(target);
    }
    for (const t of targets) conns.push([i, t]);
  }
  return conns;
}

export default function FlowNodesBackground() {
  const svgRef = useRef<SVGSVGElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);

  useEffect(() => {
    if (!nodesRef.current.length) {
      nodesRef.current = Array.from({ length: NODE_COUNT }, randomNode);
    }
    // Initial connections
    connectionsRef.current = randomConnections(NODE_COUNT);

    let lastRewire = Date.now();

    let anim: number;
    function animate() {
      // Move nodes, bounce off edges
      for (const n of nodesRef.current) {
        n.x += n.dx;
        n.y += n.dy;
        if (n.x < 0 || n.x > WIDTH) n.dx *= -1;
        if (n.y < 0 || n.y > HEIGHT) n.dy *= -1;
      }
      // Occasionally reshuffle connections
      if (Date.now() - lastRewire > REWIRE_INTERVAL) {
        connectionsRef.current = randomConnections(NODE_COUNT);
        lastRewire = Date.now();
      }
      // Update SVG
      const svg = svgRef.current;
      if (svg) {
        // Nodes
        nodesRef.current.forEach((n, i) => {
          const rect = svg.querySelector(\#node-${i}\) as SVGRectElement;
          if (rect) {
            rect.setAttribute("x", n.x.toString());
            rect.setAttribute("y", n.y.toString());
          }
        });
        // Lines
        connectionsRef.current.forEach(([a, b], idx) => {
          const n1 = nodesRef.current[a];
          const n2 = nodesRef.current[b];
          const line = svg.querySelector(\#line-${idx}\) as SVGLineElement;
          if (line) {
            line.setAttribute("x1", (n1.x + 24).toString());
            line.setAttribute("y1", (n1.y + 12).toString());
            line.setAttribute("x2", (n2.x + 24).toString());
            line.setAttribute("y2", (n2.y + 12).toString());
          }
        });
      }
      anim = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(anim);
  }, []);

  // Precompute max possible connections for keying lines
  const MAX_LINES = NODE_COUNT * 3;

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0"
      width={WIDTH}
      height={HEIGHT}
      style={{
        width: "100vw",
        height: "100vh",
        filter: "blur(0.5px)",
        opacity: 0.46,
      }}
      aria-hidden="true"
    >
      {/* Draw lines (connections) */}
      {Array.from({ length: MAX_LINES }).map((_, idx) => (
        <line
          id={\line-${idx}\}
          key={\line-${idx}\}
          stroke="#03ffe1"
          strokeWidth="2.2"
          opacity="0.55"
          strokeDasharray="8 8"
        />
      ))}
      {/* Draw nodes (rounded rectangles) */}
      {Array.from({ length: NODE_COUNT }).map((_, i) => (
        <rect
          id={\node-${i}\}
          key={\node-${i}\}
          x="0"
          y="0"
          width="48"
          height="24"
          rx="7"
          fill="#171f2b"
          stroke="#00ff88"
          strokeWidth="2"
          opacity="0.94"
          style={{
            filter:
              "drop-shadow(0 0 12px #00ff8866) drop-shadow(0 0 1px #00ff88)",
          }}
        />
      ))}
    </svg>
  );
}
