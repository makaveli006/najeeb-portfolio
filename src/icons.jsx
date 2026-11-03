// Line-art icons in the style of the reference site's country outlines.
const base = {
  width: 72,
  height: 72,
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const icons = {
  cctv: (
    <svg {...base}>
      <path d="M10 18l34 10-4 10-32-9z" />
      <path d="M44 28l6 2-3 8-7-2" />
      <path d="M22 33l-4 12H8M8 40v10" />
      <circle cx="16" cy="23" r="1.5" />
    </svg>
  ),
  access: (
    <svg {...base}>
      <rect x="18" y="8" width="28" height="48" rx="4" />
      <rect x="24" y="16" width="16" height="10" rx="1" />
      <circle cx="32" cy="40" r="7" />
      <path d="M29 40a3 3 0 0 1 6 0M32 37v-1" />
    </svg>
  ),
  intercom: (
    <svg {...base}>
      <rect x="16" y="6" width="32" height="52" rx="4" />
      <rect x="22" y="12" width="20" height="14" rx="1" />
      <path d="M24 34h2M31 34h2M38 34h2M24 40h2M31 40h2M38 40h2M24 46h2M31 46h2M38 46h2" />
    </svg>
  ),
  fire: (
    <svg {...base}>
      <path d="M32 6c2 10 14 14 14 30a14 14 0 0 1-28 0c0-8 4-12 6-16 1 5 4 8 6 8-2-8 0-16 2-22z" />
      <path d="M32 54a6 6 0 0 1-6-6c0-4 3-6 4-9 2 3 8 5 8 9a6 6 0 0 1-6 6z" />
    </svg>
  ),
  speaker: (
    <svg {...base}>
      <path d="M10 26h10l14-12v36L20 38H10z" />
      <path d="M42 24a10 10 0 0 1 0 16M47 18a18 18 0 0 1 0 28" />
    </svg>
  ),
  network: (
    <svg {...base}>
      <rect x="24" y="6" width="16" height="12" rx="2" />
      <rect x="6" y="46" width="16" height="12" rx="2" />
      <rect x="24" y="46" width="16" height="12" rx="2" />
      <rect x="42" y="46" width="16" height="12" rx="2" />
      <path d="M32 18v14M14 46V32h36v14M32 32v14" />
    </svg>
  ),
  electrical: (
    <svg {...base}>
      <path d="M36 6L16 36h14l-4 22 22-32H34z" />
    </svg>
  ),
  arrow: (
    <svg {...base}>
      <path d="M16 32h32M36 20l12 12-12 12" />
    </svg>
  ),
}

export function TopicIcon({ name }) {
  return icons[name] ?? null
}

const small = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const PhoneIcon = () => (
  <svg {...small}>
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" />
  </svg>
)

export const LinkedinIcon = () => (
  <svg {...small}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </svg>
)

export const MailIcon = () => (
  <svg {...small}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const PinIcon = () => (
  <svg width="30" height="36" viewBox="0 0 24 30" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
    <path d="M12 28s9-9.5 9-16a9 9 0 0 0-18 0c0 6.5 9 16 9 16z" />
    <circle cx="12" cy="12" r="3.5" />
  </svg>
)

// Dotted map with a system-topology overlay for the "Design safer spaces" section.
export function NetworkArt() {
  const dots = []
  for (let y = 0; y < 22; y++) {
    for (let x = 0; x < 36; x++) {
      const dx = (x - 17.5) / 17.5
      const dy = (y - 10.5) / 10.5
      if (dx * dx + dy * dy > 1) continue
      const on = Math.sin(x * 0.7) + Math.cos(y * 0.9) + Math.sin((x + y) * 0.35) > -0.4
      dots.push(
        <circle key={`${x}-${y}`} cx={x * 16 + 8} cy={y * 16 + 8} r={5.2} fill={on ? 'var(--yellow)' : '#e9e9e9'} />,
      )
    }
  }
  const nodes = [
    [120, 90], [250, 60], [420, 110], [520, 200], [380, 250], [200, 220], [300, 310], [460, 300],
  ]
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 5], [4, 6], [6, 7], [3, 7], [2, 4],
  ]
  return (
    <svg viewBox="0 0 576 352" className="network-art" role="img" aria-label="System layout map">
      {dots}
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#222" strokeWidth="1.5" strokeDasharray="4 5" />
      ))}
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="8" fill="#fff" stroke="#222" strokeWidth="2" />
      ))}
    </svg>
  )
}
