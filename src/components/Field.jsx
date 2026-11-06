import React from 'react';

/** Labelled input or code textarea. `status` is { kind: 'bad' | 'good', text }. */
export function Field({ label, id, multiline, status, ...rest }) {
  return (
    <div>
      <label className="ux-field-label" htmlFor={id}>{label}</label>
      {multiline
        ? <textarea id={id} className="ux-textarea" rows={4} spellCheck={false} {...rest} />
        : <input id={id} className="ux-input" {...rest} />}
      {status ? <p className={`ux-field-status ux-field-status--${status.kind}`} role="status">{status.text}</p> : null}
    </div>
  );
}
