export const formatDate = date => {

    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December',
    };

    const daysOfWeek = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    };

    const obj = new Date(date);
    const month = months[obj.getMonth()];
    const day = obj.getDate();
    const year = obj.getFullYear();
    const dayOfWeek = daysOfWeek[obj.getDay()];
    return `${month} ${day}, ${year} (${dayOfWeek})`;

};

export const timeAgo = date => {
    const current = new Date();
    const old = new Date(date);
    if(old.getFullYear() < current.getFullYear){
        return(
            `${current.getFullYear() - old.getFullYear()} years`
        )
    }
    // if(old.getMonth() < current.getMonth()){
    //     return(
    //         `${current.getMonth() - old.getMonth()} months`
    //     )
    // }
    if (old.getDay() < current.getDay()) {
        if (current.getDay() - old.getDay() === 1){
            return(
                `${current.getDay() - old.getDay()} day`
            )
        }
        return (
            `${current.getDay() - old.getDay()} days`
        )
    }
    if (old.getHours() < current.getHours()) {
        return (
            `${current.getHours() - old.getHours()} hours`
        )
    }
    if (old.getMinutes() < current.getMinutes()) {
        return (
            `${current.getMinutes() - old.getMinutes()} minutes`
        )
    }
    if (old.getSeconds() < current.getSeconds()) {
        return (
            `${current.getSeconds() - old.getSeconds()} seconds`
        )
    }
};

