import React from 'react';
import { useShepherdTour } from 'react-shepherd';
import ButtonSteps from '../utils/steps/ButtonSteps';

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
  },
  useModalOverlay: true,
};

const Buttons = () => {
  const tour = useShepherdTour({ tourOptions, steps: ButtonSteps });
  return (
    <div className='flex'>
      <button onClick={tour.start}>Click here</button>
    </div>
  );
};
export default Buttons;
