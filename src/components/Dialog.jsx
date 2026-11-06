import React from 'react';

/**
 * Modal dialog on a `scrim`. The scrim is absolutely positioned, so the parent
 * must be `position: relative` with a height (the stage below does that).
 */
export function Dialog({ title, children, actions, labelledBy = 'dlg-title', role = 'dialog' }) {
  return (
    <div className="ux-scrim">
      <div className="ux-dialog" role={role} aria-modal="true" aria-labelledby={labelledBy}>
        <h2 id={labelledBy}>{title}</h2>
        {children}
        <div className="ux-dialog__actions">{actions}</div>
      </div>
    </div>
  );
}

export const Stage = ({ h = 340, children }) => (
  <div style={{ position: 'relative', height: h, maxWidth: 390, overflow: 'hidden', borderRadius: 6, background: 'var(--bg)' }}>{children}</div>
);
