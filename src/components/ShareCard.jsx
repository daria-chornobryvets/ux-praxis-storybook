import React from 'react';

const XS = Array.from({ length: 23 }, (_, i) => i * 48);
const YS = Array.from({ length: 29 }, (_, i) => i * 48);

/** The image sent when sharing a passed test: 1080x1350 (4:5), drawn with the current theme's colours. */
export function ShareCard({ test = 'Card title', date = '00.00.0000', badge = 'Badge 3', time = '0:00', mastered = 79 }) {
  const mono = (props) => ({ fontFamily: 'JetBrains Mono, monospace', ...props });
  return (
    <svg viewBox="0 0 1080 1350" width="360" height="450" role="img" aria-label={`Share card: ${test}, ${badge}`} style={{ display: 'block', maxWidth: '100%', height: 'auto' }}>
      <rect width="1080" height="1350" fill="var(--bg)" />
      <g stroke="var(--border)" strokeWidth="2" opacity="0.6">
        {XS.map((x) => <line key={`x${x}`} x1={x} y1="0" x2={x} y2="1350" />)}
        {YS.map((y) => <line key={`y${y}`} x1="0" y1={y} x2="1080" y2={y} />)}
      </g>
      <rect x="60" y="60" width="960" height="1230" rx="28" fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="3" />
      <g transform="translate(120 100) scale(0.875)">
        <rect width="64" height="64" rx="16" fill="var(--tile)" />
        <circle cx="20" cy="20" r="10.5" fill="var(--icon-blue)" />
        <rect x="33.5" y="9.5" width="21" height="21" rx="4" fill="var(--icon-yellow)" />
        <path d="M20 34L30.5 54H9.5Z" fill="var(--icon-red)" stroke="var(--icon-red)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M44 32.5L55.5 44L44 55.5L32.5 44Z" fill="var(--icon-green)" />
      </g>
      <text x="194" y="141" fontFamily="Unbounded, Onest, sans-serif" fontWeight="700" fontSize="34" fill="var(--ink)" letterSpacing="-0.34">UX Praxis</text>
      <text x="960" y="150" textAnchor="end" {...mono({ fontWeight: 500, fontSize: 30 })} fill="var(--ink-muted)">{date}</text>
      <text x="120" y="250" {...mono({ fontWeight: 600, fontSize: 32 })} fill="var(--ink-muted)">CAPTION</text>
      <text x="120" y="325" fontFamily="Onest, sans-serif" fontWeight="700" fontSize="60" fill="var(--ink)">{test}</text>
      <image href="/illustrations/mascot-happy.svg" x="110" y="390" width="860" height="620" />
      <text x="540" y="1120" textAnchor="middle" fontFamily="Onest, sans-serif" fontWeight="600" fontSize="44" fill="var(--ink)">{badge}</text>
      <text x="540" y="1178" textAnchor="middle" fontFamily="Onest, sans-serif" fontWeight="500" fontSize="34" fill="var(--ink-muted)">{time} · {mastered}%</text>
    </svg>
  );
}
