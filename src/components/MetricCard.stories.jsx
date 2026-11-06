import React from 'react';
import { MetricCard } from './MetricCard';

export default { title: 'Content/MetricCard', component: MetricCard, decorators: [(S) => <div style={{ maxWidth: 358 }}><S /></div>] };

export const Key = { args: { name: 'Card title', family: 'Caption', isKey: true, formula: 'a ÷ b × 100', text: 'One-line description of the card' } };
export const NotKey = { args: { name: 'Card title', family: 'Caption', formula: 'a ÷ b', text: 'One-line description of the card' } };
