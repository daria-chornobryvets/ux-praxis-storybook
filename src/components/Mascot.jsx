import React from 'react';

export const POSES = {
  happy: 'happy',
  flag: 'flag',
  determined: 'determined',
  curious: 'curious',
  pointing: 'pointing',
  welcoming: 'welcoming',
  cheering: 'cheering',
  waving: 'waving',
};

/** The UX Praxis character, a 3D render. Each pose has a dark-theme and a light-theme image; the one for the current theme is shown. Images keep their aspect ratio. */
export function Mascot({ pose = 'happy', width = 300 }) {
  const style = { width, maxWidth: '100%', height: 'auto' };
  return (
    <>
      <img className="ux-mascot ux-mascot--dark" src={`/illustrations/mascot-${pose}-dark.webp`} alt={POSES[pose]} style={style} />
      <img className="ux-mascot ux-mascot--light" src={`/illustrations/mascot-${pose}-light.webp`} alt={POSES[pose]} style={style} />
    </>
  );
}
