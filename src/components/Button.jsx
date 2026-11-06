import React from 'react';
import { Icon } from './Icon';

export const MenuIcon = () => <Icon name="menu" size={20} />;

/**
 * One component, nine variants.
 * Full width: primary, secondary, danger. Compact: ghost, back, sm, sm-primary.
 * Icon-only: icon (menu), close. Text only: link.
 */
export function Button({ variant = 'primary', icon, children, ...rest }) {
  if (variant === 'icon') return <button type="button" className="ux-btn ux-btn--icon" aria-label="Menu" {...rest}><Icon name="menu" size={20} /></button>;
  if (variant === 'close') return <button type="button" className="ux-btn ux-btn--close" aria-label="Close" {...rest}><Icon name="close" size={22} /></button>;
  return (
    <button type="button" className={`ux-btn ux-btn--${variant}`} {...rest}>
      {icon ? <><Icon name={icon} size={18} />&nbsp; </> : null}{children}
    </button>
  );
}
