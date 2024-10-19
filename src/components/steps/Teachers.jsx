// src/component/steps/Teachers.jsx
import { useForm, Controller } from "react-hook-form";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../FormProvider";
import "./teachers.css"

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
                <div key={teacher.id} className="singleTeacher">
                    <h3>Betreuer {index + 1}</h3>
                    <ul>
                        <li role="presentation">
                            <div className="twoInputs">
                                <div className="inputOneT">
                                    <label className="standard-label" htmlFor={`betreuer${index}Nachname`}>Nachname*</label>
                                    <Controller
                                        name={`betreuer${index}.name`}
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <input {...field} id={`betreuer${index}Nachname`} required />}
                                    />
                                </div>
                                <div className="inputTwoT">
                                    <label className="standard-label" htmlFor={`betreuer${index}Vorname`}>Vorname*</label>
                                    <Controller
                                        name={`betreuer${index}.vorname`}
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <input {...field} id={`betreuer${index}Vorname`} required />}
                                    />
                                </div>
                            </div>
                        </li>
                        <li role="presentation">
                            <label className="standard-label" htmlFor={`betreuer${index}Email`}>Email*</label>
                            <Controller
                                name={`betreuer${index}.email`}
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} id={`betreuer${index}Email`} required />}
                            />
                        </li>
                    </ul>
                </div>
            ))}
            <p className="addTeacher">
                <button type="button" onClick={addTeacher}>
                    +
                </button>
                Betreuer hinzufügen
            </p>
            <button type="submit">Weiter</button>

        </form >
    );
};