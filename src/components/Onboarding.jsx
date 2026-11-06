import React from 'react';
import { Mascot } from './Mascot';
import { Button } from './Button';

/** Step dots. `step` is 1-based. */
export function Dots({ step = 1, total = 3 }) {
  return (
    <div className="ux-dots" role="img" aria-label={`Step ${step} of ${total}`}>
      {Array.from({ length: total }, (_, i) => <i key={i} aria-current={i + 1 === step ? 'step' : undefined} />)}
    </div>
  );
}

/** One onboarding slide: character, heading, text, dots, primary action. */
export function Onboarding({ pose = 'cheering', title, text, step = 3, cta = 'Get started' }) {
  return (
    <div>
      <div className="ux-onb" style={{ paddingTop: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 8px' }}><Mascot pose={pose} width={200} /></div>
        <h2>{title}</h2>
        <p>{text}</p>
        <Dots step={step} />
      </div>
      <Button variant="primary">{cta}</Button>
    </div>
  );
}
