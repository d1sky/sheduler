export const hourConvert = (hour) => {
    if (hour < 10) {
        return `0${hour}`
    } else {
        return hour
    }
}