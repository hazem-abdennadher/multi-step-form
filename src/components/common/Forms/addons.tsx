import { useFormReducer } from 'context/formContext';
import { useMultiStepForm } from 'context/multiStepFormContext';
import { useEffect, useMemo } from 'react';
import { AddonCard } from '../cards/addon';

const AddonsForm = () => {
  const { state, dispatch } = useFormReducer();
  const planDuration = useMemo(() => {
    return state.planDuration === 'yearly' ? 'yearly' : 'monthly';
  }, [state.planDuration]);

  const handleClick = (addon: string) => {
    dispatch({
      type: 'UPDATE_ADDONS',
      payload: {
        ...state,
        addons: state.addons.includes(addon)
          ? state.addons.filter((item) => item !== addon)
          : [...state.addons, addon],
      },
    });
  };
  const { setCurrentStepValidation } = useMultiStepForm();
  useEffect(() => {
    setCurrentStepValidation(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      <AddonCard
        title="Online service"
        description="Access to multiplayer games"
        price={planDuration === 'monthly' ? '+$1/mo' : '+$10/yr'}
        selected={state.addons.includes('onlineService')}
        onClick={() => handleClick('onlineService')}
      />
      <AddonCard
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={planDuration === 'monthly' ? '+$2/mo' : '+$20/yr'}
        selected={state.addons.includes('largerStorage')}
        onClick={() => handleClick('largerStorage')}
      />
      <AddonCard
        title="Customizable profile"
        description="Custom theme on your profile"
        price={planDuration === 'monthly' ? '+$2/mo' : '+$20/yr'}
        selected={state.addons.includes('customizableProfile')}
        onClick={() => handleClick('customizableProfile')}
      />
    </div>
  );
};

export default AddonsForm;
