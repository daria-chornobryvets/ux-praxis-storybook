import React from 'react';
import { AnswerOption, AnswerList } from './AnswerOption';

export default { title: 'Lesson/AnswerOption', component: AnswerOption, argTypes: { state: { control: 'radio', options: ['default', 'correct', 'wrong', 'dim'] } } };

export const Default = { args: { n: 1, text: '80%', state: 'default' } };
export const Correct = { args: { n: 2, text: 'Option', state: 'correct' } };
export const Wrong = { args: { n: 3, text: 'Option', state: 'wrong' } };
export const Dimmed = { args: { n: 4, text: 'Option', state: 'dim' } };

export const BeforeAnswer = {
  render: () => <AnswerList options={[{ n: 1, text: '80%' }, { n: 2, text: '5%' }, { n: 3, text: '20%' }, { n: 4, text: '160' }]} />,
};
export const AfterWrongAnswer = {
  render: () => (
    <AnswerList hint={null} options={[
      { n: 1, text: 'Option', state: 'dim' }, { n: 2, text: 'Option', state: 'correct' },
      { n: 3, text: 'Option', state: 'wrong' }, { n: 4, text: 'Option', state: 'dim' },
    ]} />
  ),
};
