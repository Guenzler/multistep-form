// src/steps/School.js
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "./FormProvider";

export const School = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/review");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <li role="presentation">
          <label htmlFor="school" className="standard-label">Name der Schule*</label>
          <input {...register("school")} id="school" required/>
        </li>
        <li role="presentation" className="standard-label">
          <label htmlFor="city">Stadt*</label>
          <input {...register("city")} id="city" required/>
        </li>
        <button type="submit">Next</button>
      </ul>
    </form>
  );
};