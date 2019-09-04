export const getDateStringByTimeZone = (timezone) => {
    return new Date().toLocaleDateString('en-GB', {
        timeZone: timezone,
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}

export const getTimeStringByTimeZone = (timezone) => {
    return new Date().toLocaleTimeString('en-GB', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit'
    });
}