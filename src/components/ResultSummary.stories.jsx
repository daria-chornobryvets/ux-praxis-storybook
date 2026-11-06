import React from 'react';
import { ResultSummary } from './ResultSummary';

export default { title: 'Results/ResultSummary', component: ResultSummary, decorators: [(S) => <div style={{ maxWidth: 358 }}><S /></div>] };

export const LessonComplete = {
  args: {
    level: 'Level',
    title: 'Result title',
    lead: 'Short lead sentence under the title',
    stats: [
      { kind: 'correct', label: 'Row 1', value: '4 / 10' },
      { kind: 'time', label: 'Row 2', value: '00:09' },
      { kind: 'mastered', label: 'Row 3', value: '7 / 41' },
      { kind: 'best', label: 'Row 4', value: '4 / 10' },
    ],
    topics: [
      { name: 'Group 1', done: 2, total: 4 },
      { name: 'Group 2', done: 0, total: 2, weak: true },
      { name: 'Group 3', done: 2, total: 3 },
    ],
  },
};
