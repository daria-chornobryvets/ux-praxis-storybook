import React from 'react';
import { Button } from './Button';
import { LogoMark } from './Logo';

/** Top row of a screen. `variant`: back (back button + menu), logo (mark + wordmark + menu), close (close only). */
export function ScreenHeader({ variant = 'back', back = '‹ Topics' }) {
  if (variant === 'close') return <div className="ux-header ux-header--end"><Button variant="close" /></div>;
  return (
    <div className="ux-header">
      {variant === 'logo'
        ? <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><LogoMark size={28} /><span style={{ font: '700 14px/1 var(--font-display)', letterSpacing: '-.01em' }}>UX Praxis</span></div>
        : <Button variant="back">{back}</Button>}
      <Button variant="icon" />
    </div>
  );
}
