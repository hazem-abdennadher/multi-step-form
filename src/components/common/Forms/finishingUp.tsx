import { useFormReducer } from 'context/formContext';
import { useMemo } from 'react';

const FinishingUp = () => {
  const { dispatch, state } = useFormReducer();

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="bg-blue-50 w-full p-4">
        <header className="flex flex-row justify-between items-center ">
          <div>
            <h2 className="text-primary-marineBlue font-bold">
              {state.plan} ({state.planDuration})
            </h2>
            <p className="underline text-neutral-coolGray">Change</p>
          </div>
          <span className="font-bold text-primary-marineBlue">$9/mo</span>
        </header>
        <hr className="bg-neutral-coolGray w-[90%]" />
        <div className=" flex flex-col gap-2">
          {state.addons.map((addon, index) => {
            return (
              <div
                className="flex flex-row items-center justify-between"
                key={addon}
              >
                <p className="text-neutral-coolGray">{addon}</p>
                <span className="text-primary-marineBlue">+$1/mo</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full p-2">
        <p className="text-neutral-coolGray">
          Total per {state.planDuration === 'monthly' ? 'month' : 'year'}
        </p>
        <span className="font-bold text-[1rem]  text-primary-purplishBlue">
          +$12/mo{' '}
        </span>
      </div>
    </div>
  );
};

export default FinishingUp;
