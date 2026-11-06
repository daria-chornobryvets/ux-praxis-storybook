import React from 'react';

const LOCK = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2.5" /><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
  </svg>
);

const card = { display: 'grid', gridTemplateColumns: '56px minmax(0,1fr)', gap: '2px 14px', alignItems: 'start', padding: 14, borderRadius: 'var(--radius-lg)' };
const tileStyle = { gridRow: '1 / 4', width: 56, height: 56, display: 'grid', placeItems: 'center', background: 'var(--tile)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)' };

export const LEVEL_ICONS = { Beginner: '/illustrations/level-beginner.svg', Intermediate: '/illustrations/level-intermediate.svg', Advanced: '/illustrations/level-advanced.svg' };

export function ProgressSummary({ badge, mastered, total, percent }) {
  const open = percent >= 80;
  return (
    <div style={{ padding: 14, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ padding: '4px 10px', border: '1px solid var(--accent)', borderRadius: 999, color: 'var(--accent)', font: '600 12px var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{badge}</span>
        <span style={{ font: '500 12px var(--font-mono)', color: 'var(--ink-muted)' }}>{mastered} / {total} at every level</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14, fontSize: 14 }}>
        <span>Progress bar</span><span style={{ font: '500 13px var(--font-mono)' }}>{percent}%</span>
      </div>
      <div role="img" aria-label={`Progress ${percent}%, the threshold mark is at 80%`} style={{ position: 'relative', height: 10, marginTop: 6, background: 'var(--pill-off)', borderRadius: 5 }}>
        <div style={{ height: '100%', width: `${percent}%`, background: 'var(--accent)', borderRadius: 5 }} />
        <i style={{ position: 'absolute', left: '80%', top: -4, bottom: -4, width: 2, background: 'var(--ink)', borderRadius: 1 }} />
      </div>
      <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.45, color: 'var(--ink-muted)' }}>
        {open ? 'Helper text when the 80% threshold is reached' : `Helper text below the threshold. Still missing: ${80 - percent}%`}
      </p>
    </div>
  );
}

export function LevelCard({ name, description, done, total, best }) {
  const pct = Math.round((done / total) * 100);
  return (
    <div style={{ ...card, background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <span aria-hidden="true" style={tileStyle}><img src={LEVEL_ICONS[name]} alt="" width="40" height="40" /></span>
      <span style={{ font: '600 17px/1.3 var(--font-sans)' }}>{LABELS[name] || name}</span>
      <span style={{ fontSize: 14, lineHeight: 1.45, color: 'var(--ink-muted)' }}>{description}</span>
      <span />
      <div style={{ gridColumn: '1 / -1', marginTop: 12, paddingTop: 6, borderTop: '1px solid var(--border)', display: 'grid', gap: 4 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <button type="button" style={{ minHeight: 36, padding: 0, background: 'none', border: 0, color: 'var(--accent)', font: '500 12px var(--font-mono)', textDecoration: 'underline', textUnderlineOffset: 3, cursor: 'pointer' }}>{done} / {total} items</button>
          <span style={{ font: '500 12px var(--font-mono)', color: 'var(--ink-muted)' }}>best {best} / 10</span>
        </div>
        <div role="img" aria-label={`${done} of ${total} items`} style={{ height: 6, background: 'var(--pill-off)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: 'var(--accent)' }} />
        </div>
      </div>
    </div>
  );
}

/** Locked: lock icon, muted. Available: test illustration, accent border and a button. */
export function TestCard({ available, percent, title = 'Card title', description = 'Short description of the card' }) {
  if (!available) {
    return (
      <div aria-disabled="true" style={{ ...card, background: 'var(--surface-dim)', border: '1px solid var(--border)', color: 'var(--ink-muted)' }}>
        <span aria-hidden="true" style={{ ...tileStyle, borderColor: 'var(--border-strong)', color: 'var(--ink-muted)' }}>{LOCK}</span>
        <span style={{ font: '600 17px/1.3 var(--font-sans)', color: 'var(--ink)' }}>{title}</span>
        <span style={{ fontSize: 14, lineHeight: 1.45 }}>{description}</span>
        <span style={{ font: '500 12px var(--font-mono)', marginTop: 4 }}>Locked state caption · {percent}% / 80%</span>
      </div>
    );
  }
  return (
    <div style={{ ...card, background: 'var(--surface)', border: '1px solid var(--accent)' }}>
      <span aria-hidden="true" style={tileStyle}><img src="/illustrations/test.svg" alt="" width="40" height="40" /></span>
      <span style={{ font: '600 17px/1.3 var(--font-sans)' }}>{title}</span>
      <span style={{ fontSize: 14, lineHeight: 1.45, color: 'var(--ink-muted)' }}>{description}</span>
      <span style={{ font: '500 12px var(--font-mono)', marginTop: 4, color: 'var(--accent)' }}>Available state caption · {percent}% / 80%</span>
      <button type="button" style={{ gridColumn: '1 / -1', marginTop: 12, minHeight: 44, border: 0, borderRadius: 'var(--radius-sm)', background: 'var(--accent)', color: 'var(--on-accent)', font: '600 15px var(--font-sans)', cursor: 'pointer' }}>Button</button>
    </div>
  );
}

const LABELS = { Beginner: 'Level 1', Intermediate: 'Level 2', Advanced: 'Level 3' };

const DESCRIPTIONS = {
  Beginner: 'Short description of the card',
  Intermediate: 'Short description of the card',
  Advanced: 'Short description of the card',
};

/** Topic screen body: summary, three level cards and the test card. */
export function TopicLevels({ badge, mastered, total = 19, percent, levels }) {
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <ProgressSummary badge={badge} mastered={mastered} total={total} percent={percent} />
      {levels.map((l) => <LevelCard key={l.name} description={DESCRIPTIONS[l.name]} total={total} {...l} />)}
      <TestCard available={percent >= 80} percent={percent} />
    </div>
  );
}
