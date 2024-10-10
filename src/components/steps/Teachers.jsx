// src/component/steps/Teachers.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../FormProvider";

export const Teachers = () => {
    const { register, handleSubmit } = useForm();
    const { updateFormData } = useFormContext();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateFormData(data);
        navigate("/pupil");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li role="presentation">
                    <label htmlFor="betreuer-name" className="standard-label">Betreuer Nachname*</label>
                    <input {...register("betreuer")} id="betreuer" required />
                </li>
                <li role="presentation">
                    <label htmlFor="betreuer-vorname" className="standard-label">Vorname*</label>
                    <input {...register("kind-of-school")} id="kind-of-school" required />
                </li>
                <li role="presentation" className="standard-label">
                    <label htmlFor="betreuer-email">Email*</label>
                    <input {...register("betreuer-email")} id="betreuer-email" required />
                </li>
                <li role="presentation" className="standard-label">
                    <label htmlFor="betreuer-mobil">Mobilnr.*</label>
                    <input {...register("betreuer-mobil")} id="betreuer-mobil" required />
                </li>

                <button type="submit">Next</button>
            </ul>
        </form>
    );
};