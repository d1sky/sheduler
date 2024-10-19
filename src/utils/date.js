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