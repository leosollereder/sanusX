import React from "react";
import Icon from "../Icon/Icon";
import {IconInterface} from "../Icon/Icon";

interface Props {
    title: string,
    icon: IconInterface
    children: React.ReactNode;
    customClassName?: string
}

const FormSection = (props: Props) => {
    return (
        <div className={props.customClassName}>
            <div className={"flex items-center mb-10"}>
                <Icon icon={props.icon} customClassName={"mr-2"} />
                <p className={"text-base text-accent font-bold pt-1"}>{props.title}</p>
            </div>
            {props.children}
            <hr className={"mt-10 mb-10"} />
        </div>
    )
}

export default FormSection