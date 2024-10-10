// src/component/steps/School.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../FormProvider";

export const School = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/teacher");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <li role="presentation">
          <label htmlFor="school" className="standard-label">Name der Schule*</label>
          <input {...register("school")} id="school" required />
        </li>
        <li role="presentation">
          <label htmlFor="school" className="standard-label">Schulart*</label>
          <input {...register("kind-of-school")} id="kind-of-school" required />
        </li>
        <li role="presentation" className="standard-label">
          <label htmlFor="plz">Postleitzahl*</label>
          <input {...register("plz")} id="plz" required />
        </li>
        <li role="presentation" className="standard-label">
          <label htmlFor="city">Stadt*</label>
          <input {...register("city")} id="city" required />
        </li>
        <li role="presentation" className="standard-label">
          <label htmlFor="street">Straße*</label>
          <input {...register("street")} id="street" required />
        </li>
        <li role="presentation" className="standard-label">
          <label htmlFor="street-nr">Hausnummer*</label>
          <input {...register("street-nr")} id="street-nr" required />
        </li>
        <li role="presentation" className="standard-label">
          <label htmlFor="state">Bundesland*</label>
          <input {...register("state")} id="state" required />
        </li>

        <button type="submit">Next</button>
      </ul>
    </form>
  );
};