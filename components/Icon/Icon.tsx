import Image from "next/image";
import React from "react";
import userIcon from "../../public/icons/User.svg";
import consultingIcon from "../../public/icons/Consulting.svg";
import clockIcon from "../../public/icons/Clock.svg";
import arrowLeftIcon from "../../public/icons/ArrowLeft.svg";
import arrowRightIcon from "../../public/icons/ArrowRight.svg";
import extendedArrowIcon from "../../public/icons/ArrowExtended.svg";

export interface IconInterface {
    icon: "User" | "Consulting" | "Clock" | "ArrowLeft" | "ArrowRight" | "ExtendedArrow",
}

interface Props extends IconInterface {
    customClassName?: string,
    changeMonth?: () => void,
}

const Icon = (props: Props) => {

    switch (props.icon) {
        case "User":
            return (
                <Image src={userIcon} alt={"Icon representing an user"} className={props.customClassName}/>
            )
        case "Consulting":
            return (
                <Image src={consultingIcon} alt={"Icon representing consulting"} className={props.customClassName}/>
            )
        case "Clock":
            return (
                <Image src={clockIcon} alt={"Icon representing a clock"} className={props.customClassName}/>
            )
        case "ArrowLeft":
            return (
                <Image src={arrowLeftIcon} alt={"Icon representing a left arrow"} className={props.customClassName}/>
            )
        case "ArrowRight":
            return (
                <Image src={arrowRightIcon} alt={"Icon representing a right arrow"} className={props.customClassName}/>
            )
        case "ExtendedArrow":
            return (
                <Image src={extendedArrowIcon} alt={"Icon representing a long right arrow"} className={props.customClassName}/>
            )
    }
}

export default Icon