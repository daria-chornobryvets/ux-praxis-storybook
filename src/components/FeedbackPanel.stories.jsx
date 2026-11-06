import React from 'react';
import { FeedbackPanel } from './FeedbackPanel';

export default { title: 'Lesson/FeedbackPanel', component: FeedbackPanel };

export const Wrong = {
  args: { correct: false, answer: 'Option', explanation: 'Explanation text of one or two sentences', formula: 'Formula = 300 ÷ 1 000 × 100 = 30%' },
};
export const Correct = { args: { correct: true, explanation: 'Explanation text of one or two sentences' } };
