interface Props {
    title: string,
    type: "text" | "mail" | "phone" | "select",
    placeholder?: string
}

const FormField = (props: Props) => {
    const inputId = `input-${props.type}-${Math.random().toString(36).substring(7)}`;

    return (
        <div className={"mb-5"}>
            <label htmlFor={inputId} className={"text-accent font-bold mb-2"}>{props.title}</label>
            {(() => {
                switch (props.type) {
                    case "text":
                    case "mail":
                    case "phone":
                        return (
                            <input
                                id={inputId}
                                name={inputId}
                                type={props.type}
                                className={
                                    "text-accent w-full p-5 rounded-lg border border-base-beige-500 border-solid border-2 placeholder-accent-soft focus:outline-none focus:ring-1 focus:ring-accent-soft focus:border-accent-soft"
                                }
                                placeholder={props.placeholder}
                            />
                        );
                    case "select":
                        return (
                            <select id={inputId} name={inputId} >
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                        );
                }
            })()}
        </div>
    )
};

export default FormField;