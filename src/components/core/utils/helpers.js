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
      acc[ k] = obj[k];
    }
    return acc;
  }, {});
  return flattObject;
};

const DateToIso = (date) => new Date(date).toISOString();
export { flattenObjected, DateToIso };
