import React from 'react';

/** List of level items for one level and tab. `state`: 'done' or a number 0-2 (correct answers out of 3). */
export function MetricList({ eyebrow, title, groups, missing }) {
  return (
    <div>
      <p style={{ margin: 0, font: '500 12px/1 var(--font-mono)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{eyebrow}</p>
      <h1 style={{ margin: '12px 0 14px', font: '700 24px/1.14 var(--font-display)', letterSpacing: '-0.02em' }}>{title}</h1>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
        {groups.flatMap((g) => [
          <li key={g.name} style={{ margin: '14px 0 2px', font: '600 12px var(--font-mono)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{g.name}</li>,
          ...g.items.map((it) => {
            const done = it.state === 'done';
            return (
              <li key={it.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 6, background: done ? 'var(--good-wash)' : 'var(--surface)', border: `1px solid ${done ? 'var(--good)' : 'var(--border)'}` }}>
                <span style={{ overflowWrap: 'anywhere', minWidth: 0 }}>{it.name}</span>
                <span style={{ font: '600 14px var(--font-mono)', color: done ? 'var(--good)' : 'var(--ink-muted)', whiteSpace: 'nowrap' }}>{done ? '✓' : `${it.state} / 3`}</span>
              </li>
            );
          }),
        ])}
      </ul>
      {missing > 0 && (
        <button type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 48, marginTop: 20, borderRadius: 'var(--radius-sm)', background: 'var(--accent)', border: '1px solid var(--accent)', color: 'var(--on-accent)', font: '600 15px/1 var(--font-sans)', cursor: 'pointer' }}>Practice the missing ({missing})</button>
      )}
    </div>
  );
}
