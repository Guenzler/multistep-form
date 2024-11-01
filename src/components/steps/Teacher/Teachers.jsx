// src/component/steps/Teachers.jsx
import { useForm, Controller } from "react-hook-form";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../../FormProvider";
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
            <h1>Angaben zu Betreuern</h1>
            {teacher.map((teacher, index) => (
                <div key={teacher.id} className="singleTeacher">
                    <h3>Betreuer {index + 1}</h3>
                    <div className="twoInputs">
                        <div className="inputOneT">
                            <div className="inputFieldWrapper">
                                <Controller
                                    name={`betreuer${index}.name`}
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Dieses Feld ist erforderlich",
                                        pattern: {
                                            value: /^[A-Za-zäöüÄÖÜß\s]+$/, // Regex for letters and spaces (supports German characters)
                                            message: "Nur Buchstaben sind erlaubt"
                                        }
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <input {...field} id={`betreuer${index}Nachname`} required />
                                            <div className="errorMsg">
                                                {fieldState.error && <span>{fieldState.error.message}</span>}
                                            </div>
                                        </>
                                    )}
                                />
                                <label className="standard-label" htmlFor={`betreuer${index}Nachname`}>Nachname*</label>
                            </div>
                        </div>
                        <div className="inputTwoT">
                            <div className="inputFieldWrapper">
                                <Controller
                                    name={`betreuer${index}.vorname`}
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Dieses Feld ist erforderlich",
                                        pattern: {
                                            value: /^[A-Za-zäöüÄÖÜß\s]+$/, // Regex for letters and spaces (supports German characters)
                                            message: "Nur Buchstaben sind erlaubt"
                                        }
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <input {...field} id={`betreuer${index}Vorname`} required />
                                            <div className="errorMsg">
                                                {fieldState.error && <span>{fieldState.error.message}</span>}
                                            </div>
                                        </>
                                    )}
                                />
                                <label className="standard-label" htmlFor={`betreuer${index}Vorname`}>Vorname*</label>
                            </div>
                        </div>
                    </div>
                    <div className="inputFieldWrapper">
                        <Controller
                            name={`betreuer${index}.email`}
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "Bitte Email-Adresse angeben",
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Bitte eine gültige Email-Adresse eingeben"
                                }
                            }}
                            render={({ field, fieldState }) => (
                                <>
                                    <input {...field} id={`betreuer${index}Email`} required />
                                    <div className="errorMsg">
                                        {fieldState.error && <span>{fieldState.error.message}</span>}
                                    </div>
                                </>
                            )}
                        />
                        <label className="standard-label" htmlFor={`betreuer${index}Email`}>Email*</label>
                    </div>
                </div>
            ))}
            <p className="addTeacher">
                <button type="button" onClick={addTeacher}>
                    +
                </button>
                Betreuer hinzufügen
            </p>
            <button type="submit" className="buttonSubmit">Weiter</button>

        </form >
    );
};