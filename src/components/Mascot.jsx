import React from 'react';

export const POSES = {
  happy: 'happy',
  flag: 'flag',
  determined: 'determined',
  curious: 'curious',
  pointing: 'pointing',
  welcoming: 'welcoming',
  cheering: 'cheering',
};

/** The UX Praxis character. Colours are baked in, so it looks the same in both themes. */
export function Mascot({ pose = 'happy', width = 300 }) {
  return <img src={`/illustrations/mascot-${pose}.svg`} alt={POSES[pose]} width={width} style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />;
}
