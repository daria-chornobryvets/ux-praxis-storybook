import React from 'react';
import { ScreenHeader } from './ScreenHeader';

export default { title: 'Navigation/ScreenHeader', component: ScreenHeader, decorators: [(S) => <div style={{ maxWidth: 358 }}><S /></div>] };

export const BackAndMenu = { args: { variant: 'back', back: '‹ Button' } };
export const LogoAndMenu = { args: { variant: 'logo' } };
export const CloseOnly = { args: { variant: 'close' } };
