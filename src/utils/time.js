export const hourConvert = (hour) => {
    if (hour < 10) {
        return `0${hour}`
    } else {
        return hour
    }
}

export const minuteConvert = (minute) => {
    if (minute < 10) {
        return `0${minute}`
    } else {
        return minute
    }
}