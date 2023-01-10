import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  BaseSyntheticEvent,
} from "react";

interface useCustomFormActions {
  handleChange: (e: BaseSyntheticEvent) => void;
}

const useCustomFormContext = createContext({} as useCustomFormActions);

interface UseCustomFormProviderProps<T> {
  children: React.ReactNode;
  initialValues: T;
}

export function UseCustomFormProvider<T>({
  children,
  initialValues,
}: UseCustomFormProviderProps<T>) {
  const [formValues, setFormValues] = useState<T>({ ...initialValues });
  console.log(formValues);

  const handleChange = (e: BaseSyntheticEvent) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <useCustomFormContext.Provider value={{ handleChange }}>
      {children}
    </useCustomFormContext.Provider>
  );
}

export const useHandleChange = () => {
  const context = useContext(useCustomFormContext);

  if (!context) {
    throw new Error();
  }

  return context.handleChange;
};
