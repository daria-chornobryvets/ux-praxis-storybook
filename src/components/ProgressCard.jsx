import React from 'react';

const LOCK = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" style={{ verticalAlign: -2 }}>
    <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M8 11V8a4 4 0 018 0v3" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

function Test({ test }) {
  const base = { display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8 };
  if (test.state === 'passed') {
    return (
      <li style={{ ...base, background: 'var(--good-wash)', border: '1px solid var(--good)' }}>
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ flex: 'none' }}>
          <circle cx="12" cy="12" r="12" fill="var(--good)" />
          <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="var(--bg)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ font: '600 15px/1.3 var(--font-sans)' }}>{test.name}</div>
          <div style={{ marginTop: 2, font: '500 12px var(--font-mono)', color: 'var(--ink-muted)' }}>{test.date}</div>
        </div>
        <button type="button" aria-label={`Secondary: ${test.name}`} style={{ minHeight: 36, alignSelf: 'stretch', padding: '0 12px', flex: 'none', background: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', font: '500 13px/1 var(--font-sans)', cursor: 'pointer' }}>Button</button>
      </li>
    );
  }
  if (test.state === 'available') {
    return (
      <li style={{ ...base, justifyContent: 'space-between', background: 'var(--surface)', border: '1px solid var(--border-strong)' }}>
        <span style={{ font: '600 15px/1.3 var(--font-sans)' }}>{test.name}</span>
        <button type="button" style={{ minHeight: 36, padding: '0 12px', background: 'var(--accent)', color: 'var(--on-accent)', border: 0, borderRadius: 'var(--radius-sm)', font: '600 13px/1 var(--font-sans)', cursor: 'pointer' }}>Button</button>
      </li>
    );
  }
  return (
    <li style={{ ...base, justifyContent: 'space-between', background: 'var(--surface)', border: '1px solid var(--border-strong)' }}>
      <span style={{ font: '600 15px/1.3 var(--font-sans)' }}>{test.name}</span>
      <span style={{ font: '500 12px var(--font-mono)', color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>{LOCK} Locked state caption</span>
    </li>
  );
}

function Tab({ tab }) {
  const note = tab.percent >= 80 ? 'Helper text when the 80% threshold is reached' : `Helper text below the threshold. Still missing: ${80 - tab.percent}%`;
  const hint = tab.test.state !== 'passed';
  return (
    <section aria-label={tab.title} style={{ marginTop: 14, padding: 14, border: '1px solid var(--border)', borderRadius: 6, background: 'var(--bg)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <h3 style={{ margin: 0, font: '700 16px/1.3 var(--font-sans)' }}>{tab.title}</h3>
        <span style={{ font: '600 12px var(--font-mono)', padding: '4px 10px', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: 999 }}>{tab.badge}</span>
      </div>
      <div style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 14 }}>
          <span>Progress bar</span><b style={{ font: '600 14px var(--font-mono)' }}>{tab.percent}%</b>
        </div>
        <div role="img" aria-label={`Progress ${tab.percent}%, the threshold mark is at 80%`} style={{ position: 'relative', height: 10, marginTop: 6, background: 'var(--pill-off)', borderRadius: 5 }}>
          <span style={{ display: 'block', height: '100%', width: `${tab.percent}%`, background: 'var(--accent)', borderRadius: 5 }} />
          <i style={{ position: 'absolute', top: -4, bottom: -4, left: '80%', width: 2, background: 'var(--ink)', borderRadius: 1 }} />
        </div>
        <p style={{ margin: '6px 0 0', color: 'var(--ink-muted)', fontSize: 13 }}>{note}</p>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0', display: 'grid', gap: 10 }}>
        {tab.levels.map((l) => (
          <li key={l.name} style={{ display: 'grid', gridTemplateColumns: '96px minmax(0,1fr) auto', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 14 }}>{l.name}</span>
            <span aria-hidden="true" style={{ height: 8, background: 'var(--pill-off)', borderRadius: 4, overflow: 'hidden' }}>
              <span style={{ display: 'block', height: '100%', width: `${Math.round((l.done / l.total) * 100)}%`, background: 'var(--accent)' }} />
            </span>
            <span style={{ font: '500 12px var(--font-mono)', color: 'var(--ink-muted)', whiteSpace: 'nowrap', minWidth: 52, textAlign: 'right' }}>{l.done} / {l.total}</span>
          </li>
        ))}
      </ul>
      <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0', display: 'grid', gap: 8 }}><Test test={tab.test} /></ul>
      {hint && <p style={{ margin: '10px 0 0', color: 'var(--ink-muted)', fontSize: 13 }}>Helper text under the card</p>}
    </section>
  );
}

/** "My progress" card for one topic: nested cards per tab with a badge, overall progress, three levels and a test row. */
export function ProgressCard({ topic, tabs }) {
  return (
    <section aria-label={topic} style={{ padding: 16, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
      <h2 style={{ margin: 0, font: '600 17px/1.3 var(--font-sans)' }}>{topic}</h2>
      {tabs.map((t) => <Tab key={t.title} tab={t} />)}
    </section>
  );
}
