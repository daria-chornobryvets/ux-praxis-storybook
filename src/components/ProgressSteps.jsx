import React from 'react';

/** results: array of 'ok' | 'bad' for finished steps; current is the current question number (from 1). */
export function ProgressSteps({ results = [], current = 1, total = 10, streak = 0, time = '00:00' }) {
  const label = `Step ${current} of ${total}`;
  return (
    <div>
      <div className="ux-steps__row">
        <div className="ux-steps__bar" role="img" aria-label={label}>
          {Array.from({ length: total }, (_, i) => {
            const r = results[i];
            const cls = r ? `ux-steps__pill--${r}` : i + 1 === current ? 'ux-steps__pill--current' : '';
            return <i key={i} className={`ux-steps__pill ${cls}`} />;
          })}
        </div>
        <button type="button" className="ux-steps__close" aria-label="Exit round">✕</button>
      </div>
      <p className="ux-steps__counter">
        <span>Question <b>{current}</b> / {total}</span>
        <span><span>Streak <b>{streak}</b></span><span>⏱ <b>{time}</b></span></span>
      </p>
    </div>
  );
}
