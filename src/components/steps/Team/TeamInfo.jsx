// src/components/TeamInfo.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../../FormProvider";

export const TeamInfo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
        <input {...register("teamname", {
          required: {
            value: true,
            message: "Bitte einen Teamnamen eingeben"
          },
          minLength: {
            value: 3,
            message: "Der Teamname muss mindestens drei Buchstaben haben"
          }
        })} id="teamname" required />
        <label htmlFor="teamname" className="standard-label">Teamname*</label>
      </div>
      <div className="errorMsg">
      {errors.teamname && <span>{errors.teamname.message}</span>}
      </div>
      <button type="submit" className="buttonSubmit">Weiter</button>
    </form>
  );
};