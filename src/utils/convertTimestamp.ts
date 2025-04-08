export const convertTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}`;
    return timeString;
}