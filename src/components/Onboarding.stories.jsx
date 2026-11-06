import React from 'react';
import { Onboarding } from './Onboarding';

export default { title: 'Onboarding/Onboarding', component: Onboarding, argTypes: { pose: { control: 'radio', options: ['pointing', 'welcoming', 'cheering'] } }, decorators: [(S) => <div style={{ maxWidth: 358 }}><S /></div>] };

export const Step3 = { args: { pose: 'cheering', step: 3, title: 'Slide title', text: 'Slide text of two or three short sentences that explains one idea', cta: 'Button' } };
export const Step1 = { args: { pose: 'pointing', step: 1, title: 'Slide title', text: 'Slide text of two or three short sentences that explains one idea', cta: 'Button' } };
