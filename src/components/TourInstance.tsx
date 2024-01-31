import { useEffect } from 'react';
import { ShepherdOptionsWithType, useShepherdTour } from 'react-shepherd';
import MainPageSteps from '../utils/steps/MainPageSteps';
import 'shepherd.js/dist/css/shepherd.css';

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
  },
  useModalOverlay: true,
};

function TourInstance() {
  const tour = useShepherdTour({ tourOptions, steps: MainPageSteps });

  useEffect(() => {
    if (tour) tour.start();
  }, [tour]);

  return <></>;
}

export default function Tour() {
  return <TourInstance />;
}
