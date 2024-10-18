// src/component/steps/Teachers.jsx
import { useForm, Controller } from "react-hook-form";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../FormProvider";

export const Teachers = () => {
    const { handleSubmit, control } = useForm();
    const { updateFormData } = useFormContext();
    const [teacher, setTeacher] = useState([{ id: Date.now() }]); // Startet mit einer Person
    const navigate = useNavigate();

    const addTeacher = () => {
        setTeacher([...teacher, { id: Date.now() }]); // Fügt eine weitere Person hinzu
    };

    const onSubmit = (data) => {
        console.log(data);
        updateFormData(data);
        navigate("/pupil"); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {teacher.map((teacher, index) => (
                <div key={teacher.id}>
                    <h3>Betreuer {index + 1}</h3>
                    <ul>
                        <li role="presentation">
                            <label className="standard-label">Betreuer Nachname*</label>
                            <Controller
                                name={`betreuer${index}.name`}
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} />}
                            />
                        </li>
                        <li role="presentation">
                            <label htmlFor="betreuer-vorname" className="standard-label">Vorname*</label>
                            <Controller
                                name={`betreuer${index}.vorname`}
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} />}
                            />
                        </li>
                    </ul>
                </div>
            ))}
            <button type="button" onClick={addTeacher}>
                Weiteren Betreuer hinzufügen
            </button>
            <button type="submit">Next</button>

        </form >
    );
};