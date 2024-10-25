// src/component/steps/School.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../../FormProvider";
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
      <h1>Angaben zur Schule</h1>
      <div className="inputFieldWrapper">
        <input {...register("school")} id="school" required />
        <label htmlFor="school" className="standard-label">Name der Schule*</label>
      </div>
      <div className="inputFieldWrapper">
        <input {...register("kind-of-school")} id="kind-of-school" required />
        <label htmlFor="kind-of-school" className="standard-label">Schulart*</label>
      </div>
      {/*  Leave out to simpliyfy testing
      <div className="twoInputs">
        <div className="inputOne">
          <div className="inputFieldWrapper">
            <input {...register("plz")} id="plz" required />
            <label htmlFor="plz">PLZ*</label>
          </div>
        </div>
        <div className="inputTwo">
          <div className="inputFieldWrapper">
            <input {...register("city")} id="city" required />
            <label htmlFor="city">Stadt*</label>
          </div>
        </div>
      </div>
      <div className="twoInputs">
        <div className="inputTwo">
          <div className="inputFieldWrapper">
            <input {...register("street")} id="street" required />
            <label htmlFor="street">Straße*</label>
          </div>
        </div>
        <div className="inputThree">
          <div className="inputFieldWrapper">
            <input {...register("street-nr")} id="street-nr" required />
            <label htmlFor="street-nr">Nr.*</label>
          </div>
        </div>
      </div>
      */}
      <button type="submit">Weiter</button>
    </form>
  );
};