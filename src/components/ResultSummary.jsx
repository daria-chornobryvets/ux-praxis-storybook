import React from 'react';
import { Button } from './Button';
import { Tag } from './Tag';
import { StatusIcon } from './Icon';

/** Result of a round: level label, title, lead, four stat rows, actions and the "Label" bars. */
export function ResultSummary({ level, title, lead, stats, topics }) {
  return (
    <div>
      <div className="ux-result">
        <p className="ux-label" style={{ marginTop: 8 }}>{level}</p>
        <h1>{title}</h1>
        <p className="ux-result__lead">{lead}</p>
        <ul className="ux-stats">
          {stats.map((s) => (
            <li key={s.kind}><StatusIcon kind={s.kind} /><span>{s.label}</span><span>{s.value}</span></li>
          ))}
        </ul>
      </div>
      <div style={{ display: 'grid', gap: 10, marginTop: 8 }}>
        <Button variant="primary">Primary button</Button>
        <Button variant="secondary">Secondary button</Button>
      </div>
      <p className="ux-label" style={{ margin: '12px 0 0' }}>Label</p>
      <ul className="ux-topics">
        {topics.map((t) => (
          <li key={t.name}>
            <span style={{ fontWeight: 500 }}>{t.name}{t.weak ? <Tag bad>Tag</Tag> : null}</span>
            <span style={{ font: '500 13px var(--font-mono)' }}>{t.done} / {t.total}</span>
            <div className="ux-bar"><i style={{ width: `${Math.round((t.done / t.total) * 100)}%` }} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
