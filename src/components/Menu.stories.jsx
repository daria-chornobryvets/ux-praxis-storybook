import React from 'react';
import { Menu } from './Menu';

export default { title: 'Navigation/Menu', component: Menu, argTypes: { lang: { control: 'radio', options: ['UA', 'EN'] } } };

// The "Theme" switch inside the menu follows the Storybook toolbar theme.
export const Open = {
  args: { lang: 'EN' },
  render: (args, context) => (
    <Menu {...args} theme={context.globals.theme === 'light' ? 'Light' : 'Dark'} />
  ),
};
