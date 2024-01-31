import { ShepherdOptionsWithType } from 'react-shepherd';

const steps: Array<ShepherdOptionsWithType> = [
  {
    id: 'button-step',
    text: [`Se pueden agregar clases y customizarlo`],
    buttons: [
      {
        type: 'cancel',
        classes: 'shepherd-button-secondary',
        text: 'Exit',
      },
      {
        type: 'next',
        classes: 'btn-custom-class',
        text: 'Finish',
      },
    ],
  },
];

export default steps;
