// src/component/steps/School.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../FormProvider";
import './school.css';

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
          <div className="twoInputs">
            <div className="inputOne">
              <label htmlFor="plz">Postleitzahl*</label>
              <input {...register("plz")} id="plz" required />
            </div>
            <div className="inputTwo">
              <label htmlFor="city">Stadt*</label>
              <input {...register("city")} id="city" required />
            </div>
          </div>
        </li>
        <li role="presentation" className="standard-label">
          <div className="twoInputs">
            <div className="inputTwo">
              <label htmlFor="street">Straße*</label>
              <input {...register("street")} id="street" required />
            </div>
            <div className="inputThree">
              <label htmlFor="street-nr">Hausnummer*</label>
              <input {...register("street-nr")} id="street-nr" required />
            </div>
          </div>
        </li>
        <button type="submit">Next</button>
      </ul>
    </form>
  );
};