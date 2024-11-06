import { minuteConvert } from "./time";

export const getCurrentDayNameOfweek = (date) => {
    return date.getDay()
}

export const getFirstDateOfCurrentWeek = (date = new Date(), number = 0) => {
    let dt = new Date(date)
    dt.setDate(dt.getDate() - dt.getDay() + number + 1);

    return dt
}

export const getFirstDateNumberOfCurrentWeek = (date = new Date()) => {

    return date.getDay()
}

export const getLastDateNumberOfCurrentWeek = (date = new Date()) => {
    let dt = new Date(date)
    dt.setDate(dt.getDate() + dt.getDay());

    return dt.getDate()
}

export const getLastDateOfCurrentWeek = (date = new Date()) => {
    let dt = new Date(date)
    let dif = 7 - dt.getDay()
    dt.setDate(dt.getDate() + dif);

    return dt.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export const getLastDateOfCurrentWeekShort = (date = new Date()) => {
    return getLastDateOfCurrentWeek(date).getDate()
}

export const getShortDayNameOfWeek = (date = new Date()) => {
    switch (new Date(date).getDay()) {
        case 1:
            return 'Пн'
        case 2:
            return 'Вт'
        case 3:
            return 'Ср'
        case 4:
            return 'Чт'
        case 5:
            return 'Пт'
        case 6:
            return 'Сб'
        case 0:
            return 'Вс'
    }
}

export const getFullDayNameOfWeek = (date = new Date()) => {
    switch (new Date(date).getDay()) {
        case 1:
            return 'Понедельник'
        case 2:
            return 'Вторник'
        case 3:
            return 'Среда'
        case 4:
            return 'Четверг'
        case 5:
            return 'Пятница'
        case 6:
            return 'Суббота'
        case 0:
            return 'Воскресенье'
    }
}


export const convertToInputDateValue = (date) => {
    if (date) {
        let convertedDate = new Date(date);
        convertedDate.setMinutes(convertedDate.getMinutes() - convertedDate.getTimezoneOffset());

        return new Date(convertedDate).toISOString().slice(0, 16)
    }
}

export const addMinutes = (date, minutes) => {
    let convertedDate = new Date(date);
    convertedDate.setMinutes(convertedDate.getMinutes() + minutes);

    return new Date(convertedDate)
}

export const getTime = (date) => {
    return new Date(date).getHours() + ':' + minuteConvert(new Date(date).getMinutes())
}

export const getStartOfDate = (date) => {
    return new Date(date).setHours(0, 0, 0, 0)
}

export const compareDates = (date1, date2) => {
    let dt1 = new Date(date1)
    let dt2 = new Date(date2)

    dt1 = new Date(getStartOfDate(dt1)).getTime()
    dt2 = new Date(getStartOfDate(dt2)).getTime()

    return dt1 == dt2
}

// Разница в минутах, между двумя датами
export const getDiffInMinutes = (date1, date2) => {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);

    let diff = Math.abs(dt2.getTime() - dt1.getTime()) / 1000 / 60;

    return diff - 1;
}