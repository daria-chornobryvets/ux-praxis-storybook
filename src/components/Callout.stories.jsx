import React from 'react';
import { Body, Callout } from './Callout';

export default { title: 'Content/Callout', component: Callout, decorators: [(S) => <div style={{ maxWidth: 358 }}><S /></div>] };

export const Note = { args: { children: 'Callout text. A short note of one or two sentences that explains something next to the content it belongs to.' } };
export const BodyText = { render: () => <Body>Body text. A paragraph of regular copy, set in ink on the page ground, long enough to wrap onto several lines on a 390 px screen.</Body> };
