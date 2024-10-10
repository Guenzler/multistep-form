// src/component/steps/Pupil.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../FormProvider";

export const Pupil = () => {
    const { register, handleSubmit } = useForm();
    const { updateFormData } = useFormContext();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateFormData(data);
        navigate("/review");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li role="presentation">
                    <label htmlFor="schueler-name" className="standard-label">Teilnehmer/in Nachname*</label>
                    <input {...register("schueler-name")} id="schueler-name" required />
                </li>
                <li role="presentation">
                    <label htmlFor="schueler-vorname" className="standard-label">Vorname*</label>
                    <input {...register("schueler-vorname")} id="schueler-vorname" required />
                </li>
                <li role="presentation" className="standard-label">
                    <label htmlFor="schueler-email">Email*</label>
                    <input {...register("schueler-email")} id="schueler-email" required />
                </li>
                <li role="presentation" className="standard-label">
                    <label htmlFor="jahrgang">Geburtsjahr*</label>
                    <input {...register("jahrgang")} id="jahrgang" required />
                </li>

                <button type="submit">Next</button>
            </ul>
        </form>
    );
};