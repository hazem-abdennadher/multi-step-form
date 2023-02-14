//step is an object with title, description and form
export type Step = {
  title: string;
  description: string;
  form: React.ReactNode;
};
//MultiStepForm is an object with steps
export type FormSteps = {
  steps: Step[];
};
