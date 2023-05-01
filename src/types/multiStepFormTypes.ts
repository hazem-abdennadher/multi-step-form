//step is an object with title, description and form
export type Step = {
  title: string;
  description: string;
  form: React.ReactNode;
};
//MultiStepForm is an object with steps
export type FormSteps = {
  steps: Step[];
  options?: OptionsProps;
};
export type StepperProps = {
  options?: OptionsProps;
}

export type OptionsProps = {
  btns?:{
    prevBtn?: React.ReactNode;
    nextBtn?: React.ReactNode;
    submitBtn?: React.ReactNode;
  }
  startStep?: number;
  onSubmit?: (data: any) => void;
  onPrev?: (data: any) => void;
  onNext?: (data: any) => void;
};
