import React from 'react';
import { Logo, LogoMark } from './Logo';

export default { title: 'Brand/Logo', component: Logo, argTypes: { size: { control: { type: 'number', min: 24, max: 64 } } } };

export const Header = { args: { size: 28 } };
export const ShareCardSize = { args: { size: 56 } };
export const MarkOnly = { render: () => <LogoMark size={56} /> };
