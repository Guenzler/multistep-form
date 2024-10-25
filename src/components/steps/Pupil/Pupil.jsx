// src/component/steps/Pupil.jsx
import { useForm, Controller } from "react-hook-form";
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../../FormProvider";
import "./pupil.css"

export const Pupil = () => {
    const { handleSubmit, control } = useForm();
    const { updateFormData } = useFormContext();
    const [pupil, setPupil] = useState([{ id: Date.now() }]); // Startet mit einer Person
    const navigate = useNavigate();
    const errorRef = useRef(null);

    const addPupil = () => {
        if (errorRef.current) {
            errorRef.current.innerText = "";
        }
        if (pupil.length >= 6) {
            if (errorRef.current) {
                errorRef.current.innerText = "Ein Team darf maximal sechs Teammitglieder haben";
            }
        } else {
            setPupil([...pupil, { id: Date.now() }]); // Fügt eine weitere Person hinzu
        }
    };

    const onSubmit = (data) => {
        if (errorRef.current) {
            errorRef.current.innerText = "";
        }
        console.log(data);
        if (pupil.length < 3) {
            if (errorRef.current) {
                errorRef.current.innerText = "Ein Team muss aus mindestens drei Teammitgliedern bestehen.";
            }
        } else {
            updateFormData(data);
            navigate("/review");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Angaben zu Teammitgliedern</h1>
            {pupil.map((pupil, index) => (
                <div key={pupil.id} className="singlePupil">
                    <h3>Teammitglied {index + 1}</h3>
                    <div className="twoInputs">
                        <div className="inputOneT">
                            <div className="inputFieldWrapper">
                                <Controller
                                    name={`schueler${index}.name`}
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} id={`schueler${index}Nachname`} required />}
                                />
                                <label className="standard-label" htmlFor={`schueler${index}Nachname`}>Nachname*</label>
                            </div>
                        </div>
                        <div className="inputTwoT">
                            <div className="inputFieldWrapper">
                                <Controller
                                    name={`schueler${index}.vorname`}
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} id={`schueler${index}Vorname`} required />}
                                />
                                <label className="standard-label" htmlFor={`schueler${index}Vorname`}>Vorname*</label>
                            </div>
                        </div>
                    </div>
                    <div className="inputFieldWrapper">

                        <Controller
                            name={`schueler${index}.email`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} id={`schueler${index}Email`} required />}
                        />
                        <label className="standard-label" htmlFor={`schueler${index}Email`}>Email*</label>
                    </div>
                </div>
            ))}
            <p className="addPupil">
                <button type="button" onClick={addPupil}>
                    +
                </button>
                Teammitglied hinzufügen
            </p>
            <p id="errorMsg" ref={errorRef}></p>
            <button type="submit">Weiter</button>

        </form >
    );
};