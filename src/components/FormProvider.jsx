// src/components/FormProvider.jsx
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {

  {/* formData will collect all the data provided by the user 
    across multiple steps 
    Accss to formData and setFormData is provided to nested 
    components through Reacts context hook*/ }

  const [formData, setFormData] = useState({});

  const updateFormData = (updatedData) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};