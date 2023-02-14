import { useFormReducer } from 'context/formContext';
import { useMultiStepForm } from 'context/multiStepFormContext';
import { ChangeEvent, FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
type PersonalInfoFormType = {
  name: string;
  email: string;
  phone: string;
};

const PersonalInfoForm = ({}) => {
  const { setCurrentStepValidation } = useMultiStepForm();
  const { state, dispatch } = useFormReducer();
  const { name, email, phone } = state;
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<PersonalInfoFormType>({
    mode: 'onBlur',
    defaultValues: {
      name: name,
      email: email,
      phone: phone,
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: `UPDATE_${name.toUpperCase() as 'NAME' | 'EMAIL' | 'PHONE'}`,
      payload: { ...state, [name]: value },
    });
  };
  const onSubmit = (data: any) => console.log(data);
  useEffect(() => {
    setCurrentStepValidation(isValid);
  }, [isValid]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-4 w-full"
    >
      <div className="w-full flex flex-col items-start font-medium">
        <label
          className="capitalize text-sm text-primary-marineBlue "
          htmlFor="name"
        >
          Name
        </label>
        <div className="border rounded focus:border-primary-marineBlue   w-full">
          <input
            type="text"
            placeholder="e.g. Stephen King"
            required
            value={state.name}
            className=" transition-all duration-100 indent-1 focus:indent-2 p-2 w-full bg-transparent outline-none placeholder:text-neutral-coolGray"
            {...register('name', { required: true })}
            onChange={handleChange}
          />
        </div>
      </div>{' '}
      <div className="w-full flex flex-col items-start font-medium">
        <label
          className="capitalize text-sm text-primary-marineBlue "
          htmlFor="email"
        >
          Email Address
        </label>
        <div className="border rounded focus:border-primary-marineBlue   w-full">
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            required
            value={state.email}
            className=" transition-all duration-100 indent-1 focus:indent-2 p-2 w-full bg-transparent outline-none placeholder:text-neutral-coolGray"
            {...register('email', {
              required: true,
              validate: (value) =>
                yup.string().email().required().isValidSync(value),
            })}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-start font-medium">
        <label
          className="capitalize text-sm text-primary-marineBlue "
          htmlFor="phone"
        >
          Phone Number
        </label>

        <div className="border rounded focus:border-primary-marineBlue   w-full">
          <input
            className=" transition-all duration-100 indent-1 focus:indent-2 p-2 w-full bg-transparent outline-none placeholder:text-neutral-coolGray"
            type="tel"
            value={state.phone}
            placeholder="e.g. +1 234 567 890"
            {...register('phone', { required: true })}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
