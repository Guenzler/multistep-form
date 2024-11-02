// src/component/steps/Pupil.jsx
import { useForm, Controller } from "react-hook-form";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../../FormProvider";
import "./pupil.css"

export const Pupil = () => {
    const { handleSubmit, control } = useForm();
    const { updateFormData } = useFormContext();

    /* useState pupil contains an array of pupils, initialized with one pupil.
         Users can add more pupils.                                    */
    const [pupil, setPupil] = useState([{ id: Date.now() }]);

    const navigate = useNavigate();
    const errorRef = useRef(null);

    const addPupil = () => {
        if (errorRef.current) {
            errorRef.current.innerText = "";
        }
        if (pupil.length >= 4) {
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
        if (pupil.length < 2) {
            if (errorRef.current) {
                errorRef.current.innerText = "Ein Team muss aus mindestens zwei Teammitgliedern bestehen.";
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
                                    rules={{
                                        required: "Dieses Feld ist erforderlich",
                                        pattern: {
                                            value: /^[A-Za-zäöüÄÖÜß\s]+$/, // Regex for letters and spaces (supports German characters)
                                            message: "Nur Buchstaben sind erlaubt"
                                        }
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <input {...field} id={`schueler${index}Nachname`} required />
                                            <div className="errorMsg">
                                                {fieldState.error && <span>{fieldState.error.message}</span>}
                                            </div>
                                        </>
                                    )}
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
                                    rules={{
                                        required: "Dieses Feld ist erforderlich",
                                        pattern: {
                                            value: /^[A-Za-zäöüÄÖÜß\s]+$/, // Regex for letters and spaces (supports German characters)
                                            message: "Nur Buchstaben sind erlaubt"
                                        }
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <input {...field} id={`schueler${index}Vorname`} required />
                                            <div className="errorMsg">
                                                {fieldState.error && <span>{fieldState.error.message}</span>}
                                            </div>
                                        </>
                                    )}
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
                            rules={{
                                required: "Bitte Email-Adresse angeben",
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Bitte eine gültige Email-Adresse eingeben"
                                }
                            }}
                            render={({ field, fieldState }) => (
                                <>
                                    <input {...field} id={`schueler${index}Email`} required />
                                    <div className="errorMsg">
                                        {fieldState.error && <span>{fieldState.error.message}</span>}
                                    </div>
                                </>
                            )}
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
            <button type="submit" className="buttonSubmit">Weiter</button>

        </form >
    );
};