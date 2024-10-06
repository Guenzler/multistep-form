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
      <div>
        <label htmlFor="teamname">Name</label>
        <input {...register("teamname")} id="teamname" required />
      </div>
      <div>
        <label htmlFor="numberMembers">Anzahl Teamitglieder</label>
        <input {...register("numberMembers")} id="numberMembers" required />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};