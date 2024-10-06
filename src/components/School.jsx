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
      <div>
        <label htmlFor="school">Name of School</label>
        <input {...register("school")} id="school" />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input {...register("city")} id="city" />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};