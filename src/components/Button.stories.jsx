import React from 'react';
import { Button } from './Button';

export default {
  title: 'Actions/Button',
  component: Button,
  argTypes: { variant: { control: 'select', options: ['primary', 'secondary', 'danger', 'ghost', 'back', 'sm', 'sm-primary', 'icon', 'close', 'link'] } },
};

export const Primary = { args: { variant: 'primary', children: 'Button' } };
export const Secondary = { args: { variant: 'secondary', children: 'Button' } };
export const SecondaryWithIcon = { args: { variant: 'secondary', icon: 'book', children: 'Button' } };
/** Outlined in `bad`, never filled. Only the destructive choice of a confirmation, next to a primary button. */
export const Danger = { args: { variant: 'danger', children: 'Button' } };
export const Ghost = { args: { variant: 'ghost', children: 'Button' } };
export const Back = { args: { variant: 'back', children: '‹ Button' } };
export const Small = { args: { variant: 'sm', children: 'Button' } };
export const SmallPrimary = { args: { variant: 'sm-primary', children: 'Button' } };
export const MenuButton = { args: { variant: 'icon' } };
export const Close = { args: { variant: 'close' } };
export const Link = { args: { variant: 'link', children: '17 / 19 link' } };

export const AllVariants = {
  render: () => (
    <div style={{ display: 'grid', gap: 10, maxWidth: 358 }}>
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary" icon="book">Button</Button>
      <Button variant="danger">Button</Button>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="ghost">Button</Button>
        <Button variant="back">‹ Button</Button>
        <Button variant="sm">Button</Button>
        <Button variant="sm-primary">Button</Button>
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <Button variant="icon" />
        <Button variant="close" />
        <Button variant="link">17 / 19 link</Button>
      </div>
    </div>
  ),
};
