'use client'
import Image from "next/image";
import profilePic from 'public/images/profilePic.png'
import userIcon from 'public/icons/User.svg'
import FormField from "../components/FormField/FormField";
import FormSection from "../components/FormSection/FormSection";
import Button from "../components/Button/Button";
import Calendar from "../components/Calendar/Calendar";
import {useEffect, useState} from "react";

export default function Home() {
    const [formValid, setFormValid] = useState(false)
    const [isOverlayVisible, setIsOverlayVisible] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        language: "Deutsch",
        consultingSetting: "Online",
        topic: "Gesundheit am Arbeitsplatz",
        date: null,
    });

    /*
        Should add form validation using regular expressions in real app
     */
    const handleFieldChange = (fieldName, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: value,
        }));
    };

    useEffect(() => {
        setFormValid(Object.values(formData).every((value) => value !== null && value !== ""))
    }, [formData])

    /*
        Should handle errors here
     */
    const handleSubmit = (event) => {
        setIsOverlayVisible(true)
    };

    const resetForm = () => {
        setFormData((prevForm) => ({
            ...prevForm,
            name: "",
            email: "",
            phone: "",
            language: "Deutsch",
            consultingSetting: "Online",
            topic: "Gesundheit am Arbeitsplatz",
        }));
        setIsOverlayVisible(false)
    }

    const formatDate = (dateObject) => {
        console.log(dateObject)

        return `${dateObject.month} ${dateObject.date} at ${dateObject.time}`;
    };

    const renderValue = (value) => {
        if (typeof value === "object") {
            return <p>{formatDate(value)}</p>;
        } else {
            return <p>{value}</p>;
        }
    };


    return (
        <>
            <main className={`px-4 lg:py-20 py-10 max-w-6xl mx-auto min-h-screen md:grid md:grid-cols-3 md:gap-20 ${isOverlayVisible && "max-h-screen overflow-y-hidden"}`}>
                <div className="md:col-span-1">
                    <h1 className={"text-accent text-4xl leading-relaxed font-medium mb-5"}>
                        Ihre Berater*in:<br/>
                        Alexander Weber
                    </h1>
                    <Image src={profilePic} alt={"Image of your advisor Alexander Weber"} className={"rounded-lg w-full"}/>
                </div>
                <form className="md:col-span-2 mt-8 lg:mt-0">
                    <FormSection title={"Ihre Daten:"} icon={"User"}>
                        <FormField label={"name"} title={"Name"} placeholder={"Max Mustermann"} type={"text"} value={formData.name}
                                   onChange={(value) => handleFieldChange("name", value)}/>
                        <FormField label={"email"} title={"E-Mail-Adresse"} placeholder={"maxmustermann@gmail.com"} type={"mail"}
                                   value={formData.email}
                                   onChange={(value) => handleFieldChange("email", value)}/>
                        <FormField label={"phone"} title={"Telefonnummer (obligatorisch, wenn Sie die Sitzung per Telefon gewählt haben)"}
                                   placeholder={"+12 3456789"} type={"phone"} value={formData.phone}
                                   onChange={(value) => handleFieldChange("phone", value)}/>
                    </FormSection>

                    <FormSection title={"Beratungsdetails"} icon={"Consulting"}>
                        <div className={"grid grid-cols-2 lg:grid-cols-3 gap-5"}>
                            <FormField label={"language"} title={"Sprache:*"} type={"select"} options={["Deutsch", "Englisch"]}
                                       defaultValue={"Deutsch"} value={formData.language}
                                       onChange={(value) => handleFieldChange("language", value)}
                                       customClassName={"col-span-1"}/>
                            <FormField label={"consultingSetting"} title={"Beratungssetting:*"} type={"select"} options={["Online", "Vor Ort"]}
                                       defaultValue={"Online"} value={formData.consultingSetting}
                                       onChange={(value) => handleFieldChange("consultingSetting", value)}
                                       customClassName={"col-span-1"}/>
                            <FormField label={"topic"} title={"Thema:*"} type={"select"}
                                       options={["Konflikte in der Arbeit", "Gesundheit am Arbeitsplatz"]}
                                       defaultValue={"Gesundheit am Arbeitsplatz"}
                                       value={formData.topic}
                                       onChange={(value) => handleFieldChange("topic", value)}
                                       customClassName={"col-span-2 lg:col-span-1"}/>
                        </div>
                    </FormSection>

                    <FormSection title={"Datum und Uhrzeit"} icon={"Clock"}>
                        <Calendar value={formData.date} onChange={(value) => handleFieldChange("date", value)} />
                    </FormSection>

                    <Button text={"Weiter"} type={"submit"} icon={"ExtendedArrow"} onClick={handleSubmit} disabled={!formValid}/>
                </form>
            </main>
            <div className={`${!isOverlayVisible && "hidden"} fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center bg-black bg-opacity-60`}>
                <div className={"p-10 sm:p-20 rounded-lg bg-base-white"}>
                    <h1 className={"text-accent text-4xl leading-relaxed font-medium mb-5"}>
                        Your Data:
                    </h1>
                    <div>
                        {formValid && Object.entries(formData).map(([key, value]) => (
                            <div key={key} className={"text-accent flex justify-between mb-2 gap-5"}>
                                <strong>{key}: </strong>
                                {renderValue(value)}
                            </div>
                        ))}
                    </div>
                    <Button text={"Reset"} type={"button"} icon={"ExtendedArrow"} customClassNames={"ml-auto mt-10"} onClick={resetForm}/>
                </div>
            </div>
        </>
    )
}
