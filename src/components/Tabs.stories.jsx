import React from 'react';
import { Tabs } from './Tabs';

export default { title: 'Navigation/Tabs', component: Tabs };

export const PillTabs = { args: { items: ['Tab 1 · 19', 'Tab 2 · 22'], active: 0 } };
export const Compact = { args: { items: ['Tab · 41', 'Tab · 19', 'Longer tab · 22'], active: 1, compact: true } };
