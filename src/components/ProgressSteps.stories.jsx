import React from 'react';
import { ProgressSteps } from './ProgressSteps';

export default { title: 'Lesson/ProgressSteps', component: ProgressSteps };

export const Start = { args: { current: 1, results: [], streak: 0, time: '00:00' } };
export const Step5 = { args: { current: 5, results: ['ok', 'ok', 'bad', 'ok'], streak: 1, time: '01:12' } };
