import AddonsForm from '@components/common/Forms/addons';
import FinishingUp from '@components/common/Forms/finishingUp';
import PersonalInfoForm from '@components/common/Forms/personalInfo';
import PlansForm from '@components/common/Forms/plans';
import { FormProvide } from 'context/formContext';
import MultiStepFrom from './pages/multiStepForm';

function App() {
  return (
    <main className="w-screen h-screen flex justify-center items-center font-Ubuntus text-sm bg-neutral-magnolia">
      <FormProvide>
        <MultiStepFrom
          steps={[
            {
              title: 'Personal info',
              description: 'Please provide your name, email and phone number :',
              form: <PersonalInfoForm />,
            },
            {
              title: 'Select your plan',
              description: 'You Have the option of monthly or yearly billing.',
              form: <PlansForm />,
            },
            {
              title: 'Pick add-ons',
              description: 'Add-ons help enhance your gaming experience.',
              form: <AddonsForm />,
            },
            {
              title: 'Finishing up',
              description:
                'Double-check everything looks OK before confirming.',
              form: <FinishingUp />,
            },
          ]}
        />
      </FormProvide>
    </main>
  );
}

export default App;
