import {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Step } from 'types/multiStepFormTypes';

export type MultiStepFormContextType = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  steps: Step[];
  isLastStep: boolean;
  isFormInvalid: boolean;
  isFormValid: boolean;
  isFormStepValid: (step: number) => boolean;
  isFormStepInvalid: (step: number) => boolean;
  setStepValidation: (step: number, valid: boolean) => void;
  setValidation: (validSteps: boolean[]) => void;
  setCurrentStepValidation: (valid: boolean) => void;
};
type MultiStepFormProviderProps = {
  children: React.ReactNode;
  steps: Step[];
};

export const MultiStepFormContext = createContext<MultiStepFormContextType>(
  null as any
) as React.Context<MultiStepFormContextType>;

export const MultiStepFormProvider: FC<MultiStepFormProviderProps> = ({
  children,
  steps,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [Validation, setValidation] = useState<boolean[]>(
    steps.map(() => false)
  );

  const nextStep = () => {
    if (currentStep < length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const setStepValidation = (step: number, valid: boolean) => {
    setValidation((prev) => {
      const newState = [...prev];
      newState[step] = true;
      return newState;
    });
  };

  const setCurrentStepValidation = (valid: boolean) => {
    setValidation((prev) => {
      const newState = [...prev];
      newState[currentStep] = valid;
      return newState;
    });
  };
  const length = useMemo(() => steps.length, [steps]);
  const isLastStep = useMemo(
    () => currentStep === length - 1,
    [currentStep, length]
  );
  // validation
  const isFormInvalid = useMemo(() => Validation.some((v) => !v), [Validation]);
  const isFormValid = useMemo(() => Validation.every((v) => v), [Validation]);
  const isFormStepInvalid = useCallback(
    (index: number) => !Validation[index],
    [Validation]
  );
  const isFormStepValid = useCallback(
    (index: number) => Validation[index],
    [Validation]
  );
  return (
    <MultiStepFormContext.Provider
      value={{
        currentStep,
        prevStep,
        nextStep,
        steps,
        isLastStep,
        isFormValid,
        isFormInvalid,
        isFormStepInvalid,
        setCurrentStepValidation,
        setStepValidation,

        isFormStepValid,
        setValidation,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

export const useMultiStepForm = () => {
  const context = useContext(MultiStepFormContext);
  if (context === undefined) {
    throw new Error(
      'useMultiStepForm must be used within a MultiStepFormProvider'
    );
  }
  return context;
};
