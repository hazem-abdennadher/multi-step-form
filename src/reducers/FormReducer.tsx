export type ActionTypes =
  | 'UPDATE_NAME'
  | 'UPDATE_EMAIL'
  | 'UPDATE_PHONE'
  | 'UPDATE_PLAN'
  | 'UPDATE_PLAN_DURATION'
  | 'UPDATE_ADDONS';
export type ActionProps = {
  type: ActionTypes;
  payload: FormType;
};
export type FormType = {
  name: string;
  email: string;
  phone: string;
  plan: 'arcade' | 'pro' | 'advanced';
  planDuration: 'monthly' | 'yearly';
  addons: string[];
};

export const initialState: FormType = {
  email: '',
  name: '',
  phone: '',
  plan: 'arcade',
  planDuration: 'monthly',
  addons: [],
};
export const FormReducer = (
  state: FormType,
  actions: ActionProps
): FormType => {
  switch (actions.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: actions.payload.name,
      };

    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: actions.payload.email,
      };

    case 'UPDATE_PHONE':
      return {
        ...state,
        phone: actions.payload.phone,
      };
    case 'UPDATE_PLAN':
      return {
        ...state,
        plan: actions.payload.plan,
      };
    case 'UPDATE_PLAN_DURATION':
      return {
        ...state,
        planDuration: actions.payload.planDuration,
      };
    case 'UPDATE_ADDONS':
      return {
        ...state,
        addons: actions.payload.addons,
      };

    default:
      return state;
  }
};
