// src/components/TeamInfo.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../../FormProvider";

export const TeamInfo = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/school");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Anmeldung</h1>
      <p>Wie heisst euer Team?</p>
          <div className="inputFieldWrapper">
            <input {...register("teamname")} id="teamname" required />
            <label htmlFor="teamname" className="standard-label">Teamname*</label>
          </div>
        <button type="submit">Weiter</button>
    </form>
  );
};