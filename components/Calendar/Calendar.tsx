'use client'
import Icon from "../Icon/Icon";
import {useEffect, useState} from "react";
import generateAppointmentsData from "../../data/generateRandomMonth";


interface Props {
    value: string | null;
    onChange: (value: object) => void;
}

const Calendar = (props: Props) => {
    const [data, setData] = useState(null)
    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedAppointment, setSelectedAppointment] = useState(null)
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const displayedDayNames = ["S", "M", "T", "W", "TH", "F", "S"]


    const generateRandomMonth = () => {
        //@ts-ignore
        setData(generateAppointmentsData())
    }

    useEffect(() => {
        generateRandomMonth()
    }, [])

    useEffect(() => {
        setSelectedDay(data?.days[0])
    }, [data])

    useEffect(() => {
        setSelectedAppointment(selectedDay?.appointments.filter((appointment => !appointment.isBooked))[0])
    }, [selectedDay])

    useEffect(() => {
        props.onChange({
            date: selectedDay?.date,
            month: data?.month,
            ...selectedAppointment
        })
    }, [selectedAppointment])


    return (
        <div className={"w-full grid lg:grid-cols-3"}>
            {data && (
                <>
                    <div className={"col-span-2 px-4 lg:px-8 mb-10 lg:mb-0"}>
                        <div className={"flex justify-between items-center"}>
                            <div onClick={generateRandomMonth}>
                                <Icon icon={"ArrowLeft"} customClassName={"cursor-pointer select-none"}/>
                            </div>
                            <h2 className={"text-main-grey font-bold text-xl"}>{data.month}</h2>
                            <div onClick={generateRandomMonth}>
                                <Icon icon={"ArrowRight"} customClassName={"cursor-pointer select-none"}/>
                            </div>
                        </div>
                        <hr className={"my-5"}/>
                        <div className={"grid grid-cols-7 place-items-center gap-2"}>
                            {displayedDayNames.map((day, index) => {
                                return (
                                    <div key={index} className={"select-none"}>
                                        <p className={"text-main-grey text-sm"}>{day}</p>
                                    </div>
                                )
                            })}

                            {(() => {
                                const emptyCellCount = daysOfWeek.indexOf(data?.days[0].dayOfWeek);
                                return Array.from({ length: emptyCellCount }, (_, index) => (
                                    <div key={index} className="h-9 w-9 sm:h-10 sm:w-10" />
                                ));
                            })()}

                            {data.days.map((day, index) => {
                                return (
                                    <div key={index}
                                         className={`${day.isBooked && day.date != selectedDay?.date && "bg-light-grey"} ${day.date == selectedDay?.date && "bg-accent text-base-white"} text-accent font-bold h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full cursor-pointer select-none`}
                                         onClick={() => {
                                             setSelectedDay(day)
                                             setSelectedAppointment(null)
                                         }}>
                                        <p className={""}>{day.date}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={"lg:col-span-1 col-span-2 px-4 lg:px-0"}>
                        <h2 className={"text-main-grey font-bold text-xl items-center mb-5"}>{selectedDay?.date} {data.month}</h2>
                        <hr className={"my-5"}/>
                        <div className={"grid grid-cols-2 gap-5"}>
                            {
                                /*
                                    The below code will purposely have more space between appointments if there a multiple booked, so its signalized that normally, there are appointments.
                                 */
                                selectedDay?.appointments.map((appointment, index) => (
                                    appointment.isBooked ? (
                                        <div key={index} className="w-full" />
                                    ) : (
                                        <div key={index} className={`${appointment.id == selectedAppointment?.id ? "bg-accent text-base-white" : "bg-light-grey text-accent"}  w-full font-bold rounded-full flex items-center justify-center px-4 py-2 cursor-pointer select-none`} onClick={() => setSelectedAppointment(appointment)}>
                                            <p className={""}>{appointment.time}</p>
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Calendar