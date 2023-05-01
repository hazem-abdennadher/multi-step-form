import Steps from "@components/common/Steps-description-list";
import StepForm from "@components/common/stepForm";
import { useMultiStepForm } from "context/multiStepFormContext";
import { FC } from "react";
import { StepperProps } from "types/multiStepFormTypes";

const Stepper: FC<StepperProps> = ({ options }) => {
  const {
    currentStep,
    nextStep,
    prevStep,
    steps,
    isLastStep,
    isFormStepValid,
    isFormStepInvalid,
  } = useMultiStepForm();
  console.log(isLastStep);
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
        {currentStep > 0 ? (
          options?.btns?.prevBtn ? (
            options?.btns?.prevBtn
          ) : (
            <button className="btn btn-secondary" onClick={prevStep}>
              Go Back
            </button>
          )
        ) : null}

        <div className="  ml-auto">
          {!isLastStep ? (
            options?.btns?.nextBtn ? (
              options?.btns?.nextBtn
            ) : (
              <button
                className={`btn btn-primary `}
                disabled={isFormStepInvalid(currentStep)}
                onClick={nextStep}
              >
                Next Step
              </button>
            )
          ) : null}
          {isLastStep ? (
            options?.btns?.submitBtn ? (
              options?.btns?.submitBtn
            ) : (
              <button
                className={`btn btn-primary `}
                disabled={isFormStepInvalid(currentStep)}
                onClick={nextStep}
              >
                Save
              </button>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
