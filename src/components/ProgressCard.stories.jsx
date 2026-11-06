import React from 'react';
import { ProgressCard } from './ProgressCard';

export default { title: 'Progress/ProgressCard', component: ProgressCard };

const key = (test, percent = 84, badge = 'Badge 3') => ({
  title: 'Tab 1 · 19', badge, percent,
  levels: [{ name: 'Level 1', done: 17, total: 19 }, { name: 'Level 2', done: 16, total: 19 }, { name: 'Level 3', done: 15, total: 19 }],
  test,
});
const understand = {
  title: 'Tab 2 · 22', badge: 'Badge 2', percent: 50,
  levels: [{ name: 'Level 1', done: 14, total: 22 }, { name: 'Level 2', done: 11, total: 22 }, { name: 'Level 3', done: 8, total: 22 }],
  test: { state: 'locked', name: 'Test card' },
};

export const TestPassed = { args: { topic: 'Topic', tabs: [key({ state: 'passed', name: 'Test card', date: 'Passed · date' }), understand] } };
export const TestAvailable = { args: { topic: 'Topic', tabs: [key({ state: 'available', name: 'Test card' })] } };
export const TestLocked = { args: { topic: 'Topic', tabs: [{ ...key({ state: 'locked', name: 'Test card' }, 74, 'Badge 2'), levels: [{ name: 'Level 1', done: 17, total: 19 }, { name: 'Level 2', done: 14, total: 19 }, { name: 'Level 3', done: 11, total: 19 }] }] } };
