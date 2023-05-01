import { FC } from 'react';
import StepDescription from '../step-description';
type StepsTyep = {
  title: string;
  description: string;
};
type StepProps = {
  steps: StepsTyep[];
  activeStep: number;
};
const StepsDescriptionList: FC<StepProps> = ({ steps, activeStep }) => {
  return (
    <div
      className={`bg-steps-mobile-background-image sm:bg-steps-desktop-background-image bg-no-repeat bg-cover text-white w-full aspect-video flex  
        flex-row justify-center items-start sm:flex-col sm:items-start
      gap-4 px-4 py-4 pt-8
      mb-[-25%]
      `}
    >

      {steps.map((step, index) => (
        <StepDescription
        key={index}
        description={step.description}
        title={step.title}
        active={index + 1 === activeStep}
        stepNumber={index + 1}
        />
        ))}
     </div>
  );
};

export default StepsDescriptionList;
