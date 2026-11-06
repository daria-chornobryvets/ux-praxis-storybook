import React from 'react';

/** state: 'default' | 'correct' | 'wrong' | 'dim'. The state is always repeated in words. */
export function AnswerOption({ n, text, state = 'default' }) {
  const cls = state === 'default' ? '' : `ux-opt--${state}`;
  const note = state === 'correct' ? '✓ Correct answer' : state === 'wrong' ? '✕ Your choice' : null;
  return (
    <button type="button" className={`ux-opt ${cls}`} aria-disabled={state !== 'default' || undefined}>
      <span className="ux-opt__n" aria-hidden="true">{n}</span>
      <span>
        <span>{text}</span>
        {note && <span className="ux-opt__note">{note}</span>}
      </span>
    </button>
  );
}

export function AnswerList({ options, hint = 'Choose one answer' }) {
  return (
    <div className="ux-opts">
      {hint && <p className="ux-opts__hint">{hint}</p>}
      {options.map((o) => <AnswerOption key={o.n} {...o} />)}
    </div>
  );
}
