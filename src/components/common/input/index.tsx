import { FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form/dist/types';

interface IFormValues {
  name: string;
  email: string;
  phone: string;
}
type InputProps = {
  label: string;
  name: Path<IFormValues>;
  type: 'text' | 'email' | 'tel';
  placeholder?: string;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
};
const Input: FC<InputProps & React.HTMLProps<HTMLInputElement>> = (props) => {
  const { label, name, register, required } = props;
  return (
    <div className="w-full flex flex-col items-start font-medium">
      {label && (
        <label
          className="capitalize text-sm text-primary-marineBlue "
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="border rounded focus:border-primary-marineBlue   w-full">
        <input
          className=" transition-all duration-100 indent-1 focus:indent-2 p-2 w-full bg-transparent outline-none placeholder:text-neutral-coolGray"
          {...props}
          {...register(name, { required })}
        />
      </div>
    </div>
  );
};

export default Input;
