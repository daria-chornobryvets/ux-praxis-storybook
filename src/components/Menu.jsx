import React from 'react';

const SUN = (
  <g fill="currentColor" stroke="currentColor">
    <circle cx="12" cy="12" r="4.5" stroke="none" />
    <g strokeWidth="2" strokeLinecap="round"><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" /></g>
  </g>
);
const MOON = <path d="M20 14.6A8.2 8.2 0 0 1 9.4 4a8.4 8.4 0 1 0 10.6 10.6z" fill="currentColor" />;

/** Pill slider, 88x32 inside a 44px tap area. `right` = the thumb sits under the right half (EN / Dark). */
export function PillSwitch({ kind, right, label }) {
  const on = (active) => ({ fill: active ? 'var(--on-accent)' : 'var(--ink-muted)' });
  const col = (active) => ({ color: active ? 'var(--on-accent)' : 'var(--ink-muted)' });
  return (
    <button type="button" role="switch" aria-checked={right} aria-label={label} style={{ position: 'relative', width: 88, height: 44, padding: 0, background: 'none', border: 0, cursor: 'pointer' }}>
      <svg viewBox="0 0 88 32" width="88" height="32" aria-hidden="true" style={{ position: 'absolute', left: 0, top: 6 }}>
        <rect x=".5" y=".5" width="87" height="31" rx="15.5" style={{ fill: 'var(--surface)', stroke: 'var(--border-strong)' }} />
        <rect x={right ? 44 : 2} y="2" width="42" height="28" rx="14" style={{ fill: 'var(--accent)' }} />
        {kind === 'lang' ? (
          <>
            <text x="22" y="20.5" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontWeight="600" fontSize="12" letterSpacing=".06em" style={on(!right)}>UA</text>
            <text x="65" y="20.5" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontWeight="600" fontSize="12" letterSpacing=".06em" style={on(right)}>EN</text>
          </>
        ) : (
          <>
            <svg x="11" y="6" width="20" height="20" viewBox="0 0 24 24" style={col(!right)}>{SUN}</svg>
            <svg x="57" y="6" width="20" height="20" viewBox="0 0 24 24" style={col(right)}>{MOON}</svg>
          </>
        )}
      </svg>
    </button>
  );
}

function Row({ label, first, children }) {
  return (
    <div className={`ux-menu__row${first ? ' ux-menu__row--first' : ''}`}>
      <span>{label}</span>
      {children}
    </div>
  );
}

export function Menu({ lang = 'EN', theme = 'Dark' }) {
  return (
    <div className="ux-menu" role="menu">
      {['Menu item', 'Menu item', 'Menu item', 'Menu item', 'Menu item'].map((t, i) => (
        <button key={t + i} type="button" role="menuitem" className="ux-menu__item">{t}</button>
      ))}
      <Row label="Language" first>
        <PillSwitch kind="lang" right={lang === 'EN'} label={lang === 'EN' ? 'Language: English' : 'Language: Ukrainian'} />
      </Row>
      <Row label="Theme">
        <PillSwitch kind="theme" right={theme === 'Dark'} label={theme === 'Dark' ? 'Dark theme' : 'Light theme'} />
      </Row>
    </div>
  );
}
