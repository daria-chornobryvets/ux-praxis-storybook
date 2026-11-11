import React from 'react';

export default { title: 'Foundations/Illustrations', parameters: { wide: true } };

const FILES = [
  ['mascot-happy', 150],
  ['mascot-flag', 150],
  ['mascot-determined', 150],
  ['mascot-curious', 150],
  ['mascot-pointing', 150],
  ['mascot-welcoming', 150],
  ['mascot-cheering', 150],
  ['mascot-waving', 150],
  ['level-beginner', 40],
  ['level-intermediate', 40],
  ['level-advanced', 40],
  ['test', 40],
];

export const All = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(170px,1fr))', gap: 16 }}>
      {FILES.map(([name, w]) => (
        <figure key={name} style={{ margin: 0, display: 'grid', gap: 8, justifyItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 150, height: 116, display: 'grid', placeItems: 'center' }}>
            {w === 40 ? (
              <span style={{ width: 56, height: 56, display: 'grid', placeItems: 'center', background: 'var(--tile)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)' }}>
                <img src={`/illustrations/${name}.svg`} alt={name} width={w} />
              </span>
            ) : (
              <img src={`/illustrations/${name}.webp`} alt={name} width={w} style={{ maxHeight: 116 }} />
            )}
          </div>
          <figcaption style={{ font: '500 12px var(--font-mono)', color: 'var(--ink-muted)' }}>{name}</figcaption>
        </figure>
      ))}
    </div>
  ),
};
