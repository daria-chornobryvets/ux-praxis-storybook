import React from 'react';

/** Topic card on the home screen. `icon` is a path to an SVG in public/illustrations (topic-*.svg). `badge` is the level badge; `passed` adds the green "test passed" badge next to it. */
export function TopicCard({ icon, name, description, badge, passed }) {
  return (
    <button type="button" className="ux-card">
      <span className="ux-card__tile" aria-hidden="true"><img src={icon} alt="" /></span>
      <span className="ux-card__name">{name}</span>
      <span className="ux-card__desc">{description}</span>
      <span className="ux-card__badges">
        <span className="ux-badge">{badge}</span>
        {passed && (
          <span className="ux-badge ux-badge--good"><img src="/icons/status-correct.svg" alt="" width="16" height="16" />{passed}</span>
        )}
      </span>
    </button>
  );
}
