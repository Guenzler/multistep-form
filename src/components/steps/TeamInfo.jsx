// src/components/TeamInfo.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../FormProvider";

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
      <p>Hier könnt ihr euer Team anmelden. Wir freuen uns auf eure Anmeldung!</p>
      <p>Bitte alle mit * gekennzeichneten Felder ausfüllen.</p>
      <ul>
        <li role="presentation">
          <label htmlFor="teamname" className="standard-label">Teamname*</label>
          <input {...register("teamname")} id="teamname" required />
        </li>
        <button type="submit">Weiter</button>
      </ul>
    </form>
  );
};