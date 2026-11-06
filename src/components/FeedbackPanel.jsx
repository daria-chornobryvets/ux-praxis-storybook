import React from 'react';

export function FeedbackPanel({ correct = false, answer, explanation, formula }) {
  return (
    <div className={`ux-fb ux-fb--${correct ? 'correct' : 'wrong'}`} aria-live="polite">
      <div className="ux-fb__title">{correct ? '✓ Correct' : '✕ Not quite'}</div>
      {!correct && answer && <p>Correct answer: <b>{answer}</b></p>}
      {explanation && <p>{explanation}</p>}
      {formula && (<><p className="ux-fb__label">Formula</p><code>{formula}</code></>)}
    </div>
  );
}
