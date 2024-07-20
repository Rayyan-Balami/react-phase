import { INITIAL_STATE, reducer } from "../reducers/Form";
import { createContext, useReducer, useContext } from "react";

export const FormContext = createContext(INITIAL_STATE);

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}