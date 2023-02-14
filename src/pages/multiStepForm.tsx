import Stepper from '@components/stepper';
import { MultiStepFormProvider } from 'context/multiStepFormContext';
import { FC } from 'react';
import { FormSteps } from 'types/multiStepFormTypes';

const MultiStepFrom: FC<FormSteps> = ({ steps }) => {
  return (
    <MultiStepFormProvider steps={steps}>
      <Stepper />
    </MultiStepFormProvider>
  );
};

export default MultiStepFrom;
