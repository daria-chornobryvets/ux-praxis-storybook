import React from 'react';
import { Tag } from './Tag';

/** A metric in the library: name, family, optional "Key" tag, formula and one-line explanation. */
export function MetricCard({ name, family, isKey, formula, text }) {
  return (
    <div className="ux-metric">
      <div className="ux-metric__top">
        <span className="ux-metric__name">{name}</span>
        <span className="ux-metric__meta"><span>{family}</span>{isKey ? <Tag>Key</Tag> : null}</span>
      </div>
      <code>{formula}</code>
      <p>{text}</p>
    </div>
  );
}
