import React from 'react';
import { TopicLevels } from './TopicLevels';

export default { title: 'Progress/TopicLevels', component: TopicLevels };

export const TestLocked = {
  args: { badge: 'Badge 2', mastered: 9, percent: 74, levels: [{ name: 'Beginner', done: 17, best: 9 }, { name: 'Intermediate', done: 14, best: 6 }, { name: 'Advanced', done: 11, best: 5 }] },
};

export const TestAvailable = {
  args: { badge: 'Badge 3', mastered: 13, percent: 84, levels: [{ name: 'Beginner', done: 18, best: 9 }, { name: 'Intermediate', done: 16, best: 6 }, { name: 'Advanced', done: 14, best: 5 }] },
};
