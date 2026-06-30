/**
 * NetworkBackground
 *
 * Decorative, fully generative SVG backdrop: a loose network of nodes and
 * connecting lines that pulses and flows, suggesting a development pipeline.
 * Pure SVG + CSS keyframe animation - no raster images, no icon glyphs,
 * and no framer-motion SVG primitives (those don't reconcile reliably
 * across every render target this app runs in).
 */
const NODES = [
  { x: 6, y: 22 }, { x: 18, y: 62 }, { x: 30, y: 18 }, { x: 42, y: 50 },
  { x: 54, y: 14 }, { x: 64, y: 46 }, { x: 76, y: 20 }, { x: 86, y: 58 },
  { x: 94, y: 30 }, { x: 12, y: 84 }, { x: 36, y: 80 }, { x: 60, y: 86 },
  { x: 82, y: 82 }, { x: 22, y: 38 }, { x: 70, y: 68 },
];

const EDGES = [
  [0, 2], [2, 4], [4, 6], [6, 8], [1, 3], [3, 5], [5, 7],
  [0, 1], [1, 13], [13, 3], [3, 4], [5, 6], [7, 9],
  [9, 10], [10, 11], [11, 12], [12, 14], [14, 7], [10, 14],
];

const NetworkBackground = ({ opacity = 0.45 }) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      pointerEvents: "none",
      opacity,
    }}
  >
    <defs>
      <linearGradient id="networkLine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38b2ac" />
        <stop offset="100%" stopColor="#325fa1" />
      </linearGradient>
    </defs>

    {EDGES.map(([a, b], i) => {
      const from = NODES[a];
      const to = NODES[b];
      return (
        <line
          key={`edge-${i}`}
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="url(#networkLine)"
          strokeWidth="0.15"
          strokeDasharray="2 2"
          style={{
            animation: `networkLineFlow ${6 + (i % 5)}s linear infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      );
    })}

    {NODES.map((node, i) => (
      <circle
        key={`node-${i}`}
        cx={node.x}
        cy={node.y}
        r="0.6"
        fill="#4bb1b4"
        style={{
          transformOrigin: `${node.x}px ${node.y}px`,
          animation: `networkNodePulse ${3 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${i * 0.25}s`,
        }}
      />
    ))}
  </svg>
);

export default NetworkBackground;
