export default function DateConverter(date) {
  const result = new Date(date).toLocaleDateString("fa-IR", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  return result;
}
