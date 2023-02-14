import { useFormReducer } from 'context/formContext';
import ArcadeIcon from '@icons/icon-arcade.svg';
import AdvancedIcon from '@icons/icon-advanced.svg';
import ProIcon from '@icons/icon-pro.svg';
import { useEffect, useMemo } from 'react';
import { useMultiStepForm } from 'context/multiStepFormContext';
import { PlanCard } from '../cards/plan';
const PlansForm = () => {
  const { state, dispatch } = useFormReducer();
  const planDuration = useMemo(() => {
    return state.planDuration === 'yearly' ? 'yearly' : 'monthly';
  }, [state.planDuration]);
  const handleClick = () => {
    dispatch({
      type: 'UPDATE_PLAN_DURATION',
      payload: {
        ...state,
        planDuration: planDuration === 'monthly' ? 'yearly' : 'monthly',
      },
    });
  };
  const { setCurrentStepValidation } = useMultiStepForm();
  useEffect(() => {
    setCurrentStepValidation(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      <PlanCard
        title="Arcade"
        description={planDuration === 'monthly' ? '$9/mo' : '$90/yr'}
        promo={planDuration === 'yearly' ? '2 months Free' : undefined}
        icon={ArcadeIcon}
        selected={state.plan === 'arcade'}
        onClick={() =>
          dispatch({
            type: 'UPDATE_PLAN',
            payload: { ...state, plan: 'arcade' },
          })
        }
      />
      <PlanCard
        title="Advanced"
        description={planDuration === 'monthly' ? '$12/mo' : '$120/yr'}
        icon={AdvancedIcon}
        promo={planDuration === 'yearly' ? '2 months Free' : undefined}
        selected={state.plan === 'advanced'}
        onClick={() =>
          dispatch({
            type: 'UPDATE_PLAN',
            payload: { ...state, plan: 'advanced' },
          })
        }
      />
      <PlanCard
        title="Pro"
        description={planDuration === 'monthly' ? '$15/mo' : '$150/yr'}
        icon={ProIcon}
        promo={planDuration === 'yearly' ? '2 months Free' : undefined}
        selected={state.plan === 'pro'}
        onClick={() =>
          dispatch({
            type: 'UPDATE_PLAN',
            payload: { ...state, plan: 'pro' },
          })
        }
      />
      <div
        onClick={handleClick}
        className={` flex font-medium text-neutral-coolGray flex-row items-center justify-center gap-4 p-4 bg-blue-50`}
      >
        <span
          className={`${
            planDuration === 'monthly' && 'text-primary-marineBlue'
          }`}
        >
          Monthly
        </span>
        <div
          className={`rounded-full bg-primary-marineBlue w-10 h-5 p-1 flex flex-row items-center ${
            planDuration === 'yearly' ? 'justify-end' : 'justify-start'
          }`}
        >
          <span className="h-full aspect-square rounded-full bg-white"></span>
        </div>
        <span
          className={`${
            planDuration === 'yearly' && 'text-primary-marineBlue'
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default PlansForm;
