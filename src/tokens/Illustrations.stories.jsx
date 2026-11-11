import React from 'react';
import { Mascot, POSES } from '../components/Mascot';

export default { title: 'Foundations/Illustrations', parameters: { wide: true } };

const ICONS = ['level-beginner', 'level-intermediate', 'level-advanced', 'test'];
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 16 };
const fig = { margin: 0, display: 'grid', gap: 8, justifyItems: 'center', textAlign: 'center' };
const cap = { font: '500 12px var(--font-mono)', color: 'var(--ink-muted)' };

/** The character, 3D render. One image per pose and theme (`mascot-<pose>-dark.webp`, `-light.webp`); switch the theme in the toolbar. */
export const Mascots = {
  render: () => (
    <div style={grid}>
      {Object.keys(POSES).map((pose) => (
        <figure key={pose} style={fig}>
          <Mascot pose={pose} width={200} />
          <figcaption style={cap}>mascot-{pose}</figcaption>
        </figure>
      ))}
    </div>
  ),
};

/** Level and test icons, always on a tile. */
export const Icons = {
  render: () => (
    <div style={grid}>
      {ICONS.map((name) => (
        <figure key={name} style={fig}>
          <span style={{ width: 56, height: 56, display: 'grid', placeItems: 'center', background: 'var(--tile)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)' }}>
            <img src={`/illustrations/${name}.svg`} alt={name} width={40} height={40} />
          </span>
          <figcaption style={cap}>{name}</figcaption>
        </figure>
      ))}
    </div>
  ),
};
