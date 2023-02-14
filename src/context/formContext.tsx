import React, {
  createContext,
  FC,
  Reducer,
  useContext,
  useReducer,
} from 'react';
import {
  ActionProps,
  FormReducer,
  FormType,
  initialState,
} from 'reducers/FormReducer';

type FormContextReturnType = {
  state: FormType;
  dispatch: React.Dispatch<ActionProps>;
};
type FormProvideProps = {
  children: React.ReactNode;
};
export const FormContext = createContext<FormContextReturnType | null>(
  null as any
) as React.Context<FormContextReturnType>;

export const FormProvide: FC<FormProvideProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<FormType, ActionProps>>(
    FormReducer,
    initialState
  );
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormReducer = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvide');
  }
  return context;
};
