import React from 'react';
import { MetricList } from './MetricList';

export default { title: 'Progress/MetricList', component: MetricList };

export const BeginnerKey = {
  args: {
    eyebrow: 'Eyebrow',
    title: 'List title · 17 / 19',
    missing: 2,
    groups: [
      { name: 'Group 1', items: [{ name: 'Item 1', state: 'done' }, { name: 'Item 2', state: 'done' }] },
      { name: 'Group 2', items: [{ name: 'Item 3', state: 'done' }, { name: 'Item 4', state: 2 }, { name: 'Item 5', state: 'done' }] },
      { name: 'Group 3', items: [{ name: 'Item 6', state: 1 }, { name: 'Item 7', state: 'done' }, { name: 'Item 8', state: 0 }] },
    ],
  },
};
