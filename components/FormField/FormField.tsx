'use client'
import {useState} from "react";

interface Props {
    label: string
    title: string,
    type: "text" | "mail" | "phone" | "select",
    placeholder?: string
    customClassName?: string
    options?: string[];
    defaultValue?: string;
    value: string | null;
    onChange: (value: string) => void;
}

const FormField = (props: Props) => {

    const inputStyles = [
        "text-accent",
        "w-full",
        "p-5",
        "rounded-lg",
        "border",
        "border-base-beige-500",
        "border-solid",
        "border-2",
        "placeholder-accent-soft",
        "focus:outline-none",
        "focus:ring-1",
        "focus:ring-accent-soft",
        "focus:border-accent-soft"
    ]

    return (
        <div className={`${props.customClassName} mb-5`}>
            <label htmlFor={props.label} className={"text-accent font-bold mb-2 block"}>{props.title}</label>
            {(() => {
                switch (props.type) {
                    case "text":
                    case "mail":
                    case "phone":
                        return (
                            <input
                                id={props.label}
                                name={props.label}
                                type={props.type}
                                className={
                                    inputStyles.join(' ')
                                }
                                placeholder={props.placeholder}
                                value={props.value}
                                onChange={(e) => props.onChange(e.target.value)}
                            />
                        );
                    case "select":
                        return (
                            <select
                                id={props.label}
                                name={props.label}
                                className={inputStyles.join(" ")}
                                value={props.value}
                                onChange={(e) => props.onChange(e.target.value)}
                            >
                                {props.options &&
                                props.options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        );
                }
            })()}
        </div>
    )
};


export default FormField;