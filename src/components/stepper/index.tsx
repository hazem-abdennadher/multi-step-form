import Steps from '@components/common/Steps-description-list';
import StepForm from '@components/common/stepForm';
import { useMultiStepForm } from 'context/multiStepFormContext';

const Stepper = () => {
  const {
    currentStep,
    nextStep,
    prevStep,
    steps,
    isLastStep,
    isFormStepValid,
    isFormStepInvalid,
  } = useMultiStepForm();
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col sm:flex-row rounded-lg">
        <Steps activeStep={currentStep + 1} steps={steps} />
        <StepForm
          title={steps[currentStep].title}
          description={steps[currentStep].description}
        >
          {steps[currentStep].form}
        </StepForm>
      </div>
      <div className="w-screen sm:w-full bg-white flex flex-row justify-between items-center gap-8 mt-auto p-2">
        {currentStep > 0 && (
          <button className="btn btn-secondary" onClick={prevStep}>
            Go Back
          </button>
        )}
        <button
          className={`btn btn-primary  ml-auto `}
          disabled={isFormStepInvalid(currentStep)}
          onClick={nextStep}
        >
          {isLastStep ? 'Save' : 'Next step'}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
