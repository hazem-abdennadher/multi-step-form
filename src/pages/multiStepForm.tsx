import Stepper from '@components/stepper';
import { MultiStepFormProvider, useMultiStepForm } from 'context/multiStepFormContext';
import { FC } from 'react';
import { FormSteps } from 'types/multiStepFormTypes';

const MultiStepFrom: FC<FormSteps> = ({ steps,options }) => {

  return (
    <MultiStepFormProvider steps={steps} >
      <Stepper  options={options} />
    </MultiStepFormProvider>
  );
};

export default MultiStepFrom;
