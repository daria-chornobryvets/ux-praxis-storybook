import React from 'react';
import { Field } from './Field';

export default { title: 'Forms/Field', component: Field, decorators: [(S) => <div style={{ maxWidth: 358 }}><S /></div>] };

export const Search = { args: { id: 'q', label: 'Label', type: 'search', placeholder: 'Placeholder' } };
export const CodeWithError = {
  args: { id: 'c', label: 'Label', multiline: true, defaultValue: 'eyJ2IjoxLCJtIjpbIm1ldHJpY3Mt', status: { kind: 'bad', text: '✕ Error message that says what is wrong and how to fix it' } },
};
export const CodeReadOnly = {
  args: { id: 'e', label: 'Label', multiline: true, readOnly: true, defaultValue: 'eyJ2IjoxLCJtIjpbIm1ldHJpY3MtcmV0ZW50aW9uIiwibmllbHNlbi12aXNpYmlsaXR5Il0=' },
};
