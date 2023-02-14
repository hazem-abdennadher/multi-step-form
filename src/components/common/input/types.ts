import { ChangeEvent } from 'react';
import { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

export type InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  label: string;
  unverifiedEmail?: boolean;
  resend?: boolean;
  grayLabel?: boolean;
  inputType?: 'text' | 'email' | 'password' | 'tel' | 'number';
  placeholder: string;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  verifyEmail?: () => void;
  resendFn?: () => void;
  customOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
