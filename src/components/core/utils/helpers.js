import { parse, isDate } from "date-fns";

const flattenObjected = (obj, prefix = "") => {
  const flattObject = Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : "";
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    ) {
      Object.assign(acc, flattenObjected(obj[k], k));
    } else {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
  return flattObject;
};

// const DateToIso = () => new Date().toISOString();
const DateToIso = (date) => new Date(date).toISOString();

function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

export { flattenObjected, DateToIso,parseDateString};
