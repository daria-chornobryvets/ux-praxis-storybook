import React from 'react';

export const Badge = ({ children }) => <span className="ux-badge">{children}</span>;
export const Tag = ({ bad, children }) => <span className={`ux-tag${bad ? ' ux-tag--bad' : ''}`}>{children}</span>;
export const Label = ({ children, ...rest }) => <p className="ux-label" {...rest}>{children}</p>;
export const Group = ({ children }) => <p className="ux-group" style={{ margin: 0 }}>{children}</p>;
export const Pill = ({ children }) => <span className="ux-pill">{children}</span>;
