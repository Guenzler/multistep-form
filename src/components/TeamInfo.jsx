// src/componets/TeamInfo.js
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "./FormProvider";

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
      <ul>
        <li role="presentation">
          <label htmlFor="teamname" className="standard-label">Teamname*</label>
          <input {...register("teamname")} id="teamname" required />
        </li>
        <li role="presentation" className="standard-label">
          <label htmlFor="numberMembers">Anzahl Teamitglieder*</label>
          <input {...register("numberMembers")} id="numberMembers" required />
        </li>
        <button type="submit">Next</button>
      </ul>
    </form>
  );
};