import Link from "next/link";
import Icon, {IconInterface} from "../Icon/Icon";

interface Props extends IconInterface{
    text: string,
    type: "link" | "submit" | "button"
    target?: string
    disabled?: boolean
    customClassNames?: string,
    onClick?: () => void;
}

const Button = (props: Props) => {
    const handleClick = (event) => {
        event.preventDefault();
        if (props.onClick && !props.disabled) {
            props.onClick();
        }
    };

    const buttonStyles = [
        "px-6",
        "py-3",
        "text-accent",
        !props.disabled ? "bg-button-color hover:shadow-lg transition duration-300" : "bg-light-grey cursor-default",
        "rounded-full",
        "flex",
        "items-center",
        "shadow-md",
        props.customClassNames
    ]

    switch (props.type) {
        case "link":
            return (
                <Link href={props.target} className={`${buttonStyles.join(' ')}`} onClick={handleClick}>
                    <p>{props.text}</p>
                    <Icon icon={props.icon} />
                </Link>
            )
        case "submit":
            return (
                <button type={"submit"} className={`${buttonStyles.join(' ')}`} onClick={handleClick} disabled={props.disabled}>
                    <p className={"font-bold"}>{props.text}</p>
                    <Icon icon={props.icon} customClassName={"ml-2"} />
                </button>
            )
        case "button":
            return (
                <button type={"button"} className={`${buttonStyles.join(' ')}`} onClick={handleClick} disabled={props.disabled}>
                    <p className={"font-bold"}>{props.text}</p>
                    <Icon icon={props.icon} customClassName={"ml-2"} />
                </button>
            )
    }
}

export default Button