import React from 'react';

/** UX Praxis logo: the four-shape mark on a tile plus the word. `size` is the mark size in px (28 in headers, 56 on the share card). */
export function LogoMark({ size = 28 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" style={{ flex: 'none', filter: 'drop-shadow(0 1px 2px rgba(19,27,38,0.18))' }}>
      <rect width="64" height="64" rx="16" fill="var(--tile)" />
      <circle cx="20" cy="20" r="10.5" fill="var(--icon-blue)" />
      <rect x="33.5" y="9.5" width="21" height="21" rx="4" fill="var(--icon-yellow)" />
      <path d="M20 34L30.5 54H9.5Z" fill="var(--icon-red)" stroke="var(--icon-red)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M44 32.5L55.5 44L44 55.5L32.5 44Z" fill="var(--icon-green)" />
    </svg>
  );
}

export function Logo({ size = 28 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <LogoMark size={size} />
      <span style={{ font: `700 ${size >= 56 ? 28 : 14}px/1 var(--font-display)`, letterSpacing: '-0.01em', color: 'var(--ink)' }}>UX Praxis</span>
    </div>
  );
}
