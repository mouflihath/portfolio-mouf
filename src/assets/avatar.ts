// Professional Developer Monogram & Tech Emblem for SADIKOU Mouflihath
// Custom SVG Developer Badge (Olive Military & Sand Gold Theme)

export const DEVELOPER_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B2412" />
      <stop offset="50%" stop-color="#2E3A20" />
      <stop offset="100%" stop-color="#4B5320" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2EBDC" />
      <stop offset="50%" stop-color="#A3B899" />
      <stop offset="100%" stop-color="#D4AF37" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4B5320" />
      <stop offset="100%" stop-color="#748757" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="400" height="400" rx="48" fill="url(#bgGrad)" />
  
  <!-- Subtle Grid Pattern -->
  <g opacity="0.15" stroke="#A3B899" stroke-width="1">
    <line x1="40" y1="0" x2="40" y2="400" />
    <line x1="80" y1="0" x2="80" y2="400" />
    <line x1="120" y1="0" x2="120" y2="400" />
    <line x1="160" y1="0" x2="160" y2="400" />
    <line x1="200" y1="0" x2="200" y2="400" />
    <line x1="240" y1="0" x2="240" y2="400" />
    <line x1="280" y1="0" x2="280" y2="400" />
    <line x1="320" y1="0" x2="320" y2="400" />
    <line x1="360" y1="0" x2="360" y2="400" />

    <line x1="0" y1="40" x2="400" y2="400" />
    <line x1="0" y1="80" x2="400" y2="80" />
    <line x1="0" y1="120" x2="400" y2="120" />
    <line x1="0" y1="160" x2="400" y2="160" />
    <line x1="0" y1="200" x2="400" y2="200" />
    <line x1="0" y1="240" x2="400" y2="240" />
    <line x1="0" y1="280" x2="400" y2="280" />
    <line x1="0" y1="320" x2="400" y2="320" />
    <line x1="0" y1="360" x2="400" y2="360" />
  </g>

  <!-- Hexagon Outer Shield -->
  <polygon points="200,45 340,125 340,275 200,355 60,275 60,125" fill="none" stroke="url(#goldGrad)" stroke-width="4" opacity="0.85" />
  <polygon points="200,60 325,133 325,267 200,340 75,267 75,133" fill="#1B2412" opacity="0.75" />

  <!-- Code Symbols Floating -->
  <text x="95" y="115" fill="#A3B899" font-family="monospace" font-size="20" font-weight="bold" opacity="0.6">&lt;/&gt;</text>
  <text x="275" y="115" fill="#A3B899" font-family="monospace" font-size="20" font-weight="bold" opacity="0.6">{ ; }</text>

  <!-- Central Monogram "SM" -->
  <text x="200" y="215" fill="url(#goldGrad)" font-family="system-ui, -apple-system, sans-serif" font-size="96" font-weight="900" text-anchor="middle" letter-spacing="4">SM</text>

  <!-- Subtitle Bar -->
  <rect x="100" y="245" width="200" height="24" rx="6" fill="#4B5320" stroke="#A3B899" stroke-width="1" />
  <text x="200" y="261" fill="#FFFFFF" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" letter-spacing="1.5">FULL-STACK &amp; MONÉTIQUE</text>

  <!-- Dot indicators -->
  <circle cx="200" cy="305" r="5" fill="#10B981" />
  <text x="200" y="325" fill="#A3B899" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">LARAVEL • REACT • MYSQL</text>
</svg>
`)}`;
