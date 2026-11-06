import React from 'react';
import { Icon, StatusIcon, GLYPH_NAMES } from './Icon';

export default { title: 'Foundations/Icons' };

const cell = { display: 'grid', justifyItems: 'center', gap: 8, padding: 14, width: 96, border: '1px solid var(--border)', borderRadius: 10, background: 'var(--surface)', color: 'var(--ink)', font: '500 12px var(--font-mono)' };

export const UIGlyphs = {
  name: 'UI glyphs',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {GLYPH_NAMES.map((n) => (
        <div key={n} style={cell}><Icon name={n} size={24} /><span>{n}</span></div>
      ))}
    </div>
  ),
};

export const StatusIcons = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {['correct', 'time', 'mastered', 'best', 'wrong'].map((k) => (
        <div key={k} style={cell}><StatusIcon kind={k} /><span>status-{k}</span></div>
      ))}
    </div>
  ),
};
