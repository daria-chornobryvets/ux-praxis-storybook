import React from 'react';

/** Pill tabs: two or three segments, one pressed. `compact`: segments share the width by their text and never wrap (three tabs of different lengths on a phone). */
export function Tabs({ items, active = 0, label = 'Tab', compact = false }) {
  return (
    <div className={`ux-tabs${compact ? ' ux-tabs--compact' : ''}`} role="radiogroup" aria-label={label}>
      {items.map((t, i) => <button key={t} type="button" aria-pressed={i === active}>{t}</button>)}
    </div>
  );
}
