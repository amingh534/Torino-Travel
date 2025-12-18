export default function DateConverter(date) {
  const result = new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  return result;
}

export function DateAndTime(date) {
  const showDate = new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const showTime = new Date(date).toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const result = `${showTime}- ${showDate} `;
  return result;
}
