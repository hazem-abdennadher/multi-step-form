import { FC } from 'react';

type StepProps = {
  title: string;
  description: string;
  active: boolean;
  stepNumber: number;
};
const StepDescription: FC<StepProps> = ({
  title,
  description,
  stepNumber,
  active,
}) => {
  return (
    <div className={`flex flex-row items-center gap-4`}>
      <div
        className={`${
          active && 'bg-primary-lightBlue text-black'
        } border-neutral-alabaster border flex items-center justify-center text-lg font-bold  rounded-full w-10 h-10 `}
      >
        {stepNumber}
      </div>
      <div className="hidden sm:block">
        <div className="step-title ">{title}</div>
        <div className="step-description">{description}</div>
      </div>
    </div>
  );
};

export default StepDescription;
