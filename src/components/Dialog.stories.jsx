import React from 'react';
import { Dialog, Stage } from './Dialog';
import { Button } from './Button';
import { Field } from './Field';

export default { title: 'Overlays/Dialog', component: Dialog };

export const Leave = {
  render: () => (
    <Stage h={290}>
      <Dialog title="Dialog title" role="alertdialog" actions={<><Button variant="primary">Primary</Button><Button variant="danger">Danger</Button></>}>
        <p>Dialog text with a short explanation of the choice</p>
      </Dialog>
    </Stage>
  ),
};

export const Export = {
  render: () => (
    <Stage h={430}>
      <Dialog title="Dialog with a field" labelledBy="ex" actions={<><Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button></>}>
        <p>Dialog text above a read-only field</p>
        <Field id="ec" label="Label" multiline readOnly defaultValue="eyJ2IjoxLCJtIjpbIm1ldHJpY3MtcmV0ZW50aW9uIiwibmllbHNlbi12aXNpYmlsaXR5Il0=" />
      </Dialog>
    </Stage>
  ),
};

export const ImportWithError = {
  render: () => (
    <Stage h={470}>
      <Dialog title="Dialog with an error" labelledBy="im" actions={<><Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button></>}>
        <p>Dialog text above an editable field</p>
        <Field id="ic" label="Label" multiline defaultValue="eyJ2IjoxLCJtIjpbIm1ldHJpY3Mt" status={{ kind: 'bad', text: '✕ Error message that says what is wrong and how to fix it' }} />
      </Dialog>
    </Stage>
  ),
};
