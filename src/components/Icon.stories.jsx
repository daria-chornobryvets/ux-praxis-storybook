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

const COLOUR_ICONS = [
  'topic-metrics', 'topic-nielsen-heuristics', 'topic-wcag', 'topic-laws-of-ux', 'topic-research-methods',
  'level-beginner', 'level-intermediate', 'level-advanced', 'test',
];

/** Flat coloured icons, 40 px on a 56 px tile (`--tile`). The same in both themes. */
export const ColouredIcons = {
  name: 'Coloured icons',
  parameters: { wide: true },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {COLOUR_ICONS.map((n, i) => (
        <div key={n} style={{ ...cell, width: 120 }}>
          <span style={{ width: 56, height: 56, display: 'grid', placeItems: 'center', background: 'var(--tile)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)' }}>
            <img src={`/illustrations/${n}.svg`} alt={`Icon ${i + 1}`} width={40} height={40} />
          </span>
          <span>Icon {i + 1}</span>
        </div>
      ))}
    </div>
  ),
};
