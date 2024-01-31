import { ShepherdOptionsWithType } from 'react-shepherd';

const steps: Array<ShepherdOptionsWithType> = [
  {
    id: 'welcome',
    text: [`<p>Hola! Este es una pequeña demo de como luce el stepherd</p>`],
    attachTo: { element: '.hero-welcome', on: 'bottom' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'cancel',
        classes: 'shepherd-button-secondary',
        text: 'Exit',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
  {
    id: 'check-options',
    text: [`<p>Puedes picar aqui para ver el texto</p>`],
    attachTo: { element: '.tour-step-2', on: 'bottom' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
  {
    id: 'check-options-2',
    text: [`<p>Puedes ponerlo a la izquierda`],
    attachTo: { element: '.tour-step-3', on: 'left' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
  {
    id: 'check-options-3',
    text: [`<p>Puedes ponerlo a la derecha`],
    attachTo: { element: '.tour-step-4', on: 'right' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
  {
    id: 'check-options-4',
    text: [`<p>Puedes ponerlo en la parte superior`],
    attachTo: { element: '.tour-step-5', on: 'top' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
];

export default steps;
