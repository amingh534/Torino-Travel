function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹","-"];
  
  let farsiString = n
  .toString()
  .split("")
  .map((char) => (char >= "0" && char <= "9" ? farsiDigits[char] : char))
  .join("");

return farsiString.length > 3
  ? farsiString.slice(0, 3) + "-" + farsiString.slice(3)
  : farsiString;
}

export default toFarsiNumber;
