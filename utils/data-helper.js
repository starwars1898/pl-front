export const DateTimeFormat = (dateString) => {
    const dateTime = new Date(dateString)
    return dateTime.toLocaleString()
}