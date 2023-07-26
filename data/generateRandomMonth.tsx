/*
    Gets a random starting day for the month
 */
const getRandomStartingDay = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const randomIndex = Math.floor(Math.random() * daysOfWeek.length);
    return daysOfWeek[randomIndex];
};

/*
    Gets a random Month
 */
const getRandomMonth = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const randomIndex = Math.floor(Math.random() * months.length);
    return months[randomIndex];
};

/*
    Generates the days and appointments for each day, randomizing if a day is booked or not. Also returns the starting day and the month
 */
const generateAppointmentsData = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const startingDay = getRandomStartingDay();
    const month = getRandomMonth();

    const appointmentsData = {
        month,
        startingDay,
        days: Array.from({length: 31}, (_, index) => {
            const date = index + 1;
            const dayOfWeekIndex = (daysOfWeek.indexOf(startingDay) + index) % 7;
            const dayOfWeek = daysOfWeek[dayOfWeekIndex];
            const isBooked = Math.random() < 0.25; // Randomly set if the appointment is booked or not (for demonstration purposes)

            return {
                date,
                dayOfWeek,
                isBooked: isBooked,
                appointments: [
                    {id: 1, time: '09:00 AM', isBooked: isBooked && Math.random() < 0.25},
                    {id: 2, time: '10:00 AM', isBooked: isBooked && Math.random() < 0.25},
                    {id: 3, time: '11:00 AM', isBooked: isBooked},
                    {id: 4, time: '12:00 PM', isBooked: isBooked && Math.random() < 0.25},
                    {id: 5, time: '1:00 PM', isBooked: isBooked && Math.random() < 0.25},
                    {id: 6, time: '2:00 PM', isBooked: isBooked && Math.random() < 0.25},
                    {id: 7, time: '3:00 PM', isBooked: false},
                    {id: 8, time: '4:00 PM', isBooked: isBooked && Math.random() < 0.25},
                ],
            };
        }),
    };

    return appointmentsData;
};

export default generateAppointmentsData