import React from 'react';
import { Badge, Tag, Label, Group, Pill } from './Tag';

export default { title: 'Content/Tag' };

const row = { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' };

export const Badges = { render: () => <div style={row}><Badge>Badge 1</Badge><Badge>Badge 2</Badge><Badge>Badge 3</Badge></div> };
export const Tags = { render: () => <div style={row}><Tag>Tag</Tag><Tag bad>Tag</Tag></div> };
export const LabelAndGroup = { render: () => <div style={{ display: 'grid', gap: 12 }}><Label>Label</Label><Group>Group</Group></div> };
export const Pills = { render: () => <div style={row}><Pill>Pill</Pill><Pill>Longer pill</Pill><Pill>Pill</Pill></div> };
