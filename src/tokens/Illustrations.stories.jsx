import React from 'react';
import { Mascot, POSES } from '../components/Mascot';

export default { title: 'Foundations/Illustrations', parameters: { wide: true } };

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
