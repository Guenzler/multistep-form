// src/component/steps/School.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../../FormProvider";
import './school.css';

export const School = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/teacher");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Angaben zur Schule</h1>
      <div className="inputFieldWrapper">
        <input {...register("school", {
          required: {
            value: true,
            message: "Bitte den Schulnamen eingeben"
          }
        }
        )} id="school" required />
        <label htmlFor="school" className="standard-label">Name der Schule*</label>
      </div>
      <div className="errorMsg">
        {errors.school && <span>{errors.school.message}</span>}
      </div>
      <div className="inputFieldWrapper">
        <input {...register("schulform", {
          required: {
            value: true,
            message: "Bitte die Schulform eingeben"
          }
        })} id="schulform" required />
        <label htmlFor="schulform" className="standard-label">Schulart*</label>
      </div>
      <div className="errorMsg">
        {errors.schulform && <span>{errors.schulform.message}</span>}
      </div>
      <button type="submit" className="buttonSubmit">Weiter</button>
    </form>
  );
};