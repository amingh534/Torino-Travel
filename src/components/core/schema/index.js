import { date, object, string } from "yup";

const bankAccountSchema = object({
  shaba_code: string()
    .required("شماره شبا باید عدد و16 رقمی باشد.")
    .matches(/^([0-9]{16,})$/),
  debitCard_code: string()
    .length(16, "شماره کارت باید 16 رقمی باشد.")
    .required()
    .matches(/^([0-9]{16,})$/, "شماره کارت باید عدد باشد."),
  accountIdentifier: string()
    .min(8, "شماره حساب باید 8 کاراکتر باشد.")
    .max(16, "شماره حساب باید 16 رقمی باشد")
    .required()
    .matches(/^([0-9]{8,16})$/, "شماره حساب باید عدد باشد."),
});

// import { parseISO } from "date-fns";

const personalFormSchema = object({
  fullName: string()
    .required("نام و نام خانوادگی الزامی است")
    .test("fullName", "لطفا نام و نام خانوادگی را کامل وارد کنید", (value) => {
      if (!value) return false;
      return value.trim().split(" ").length >= 2;
    }),
  // firstName: string(),
  // lastName: string(),

  nationalCode: string()
    .required("کد ملی خود را وارد کنید")
    .matches(/^([0-9]{10})$/, "کد ملی باید 10 رقم باشد."),

  // birthDate: date()
  //   .transform((value, originalValue) => {
  //     // اگر از API بیاد مثل "2022-10-02"
  //     if (typeof originalValue === "string") {
  //       console.log("Value:",value);
  //       console.log("OriginalValue:",originalValue);
  //       return parseISO(originalValue);
  //     }
  //     return value;
  //   })
  //   .nullable(),
  birthDate: date().nullable().min(new Date(1900, 0, 1)),

  gender: string().required("جنسیت را انتخاب کنید"),
});

const emailFormSchema = object({
  email: string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
});
export { bankAccountSchema, personalFormSchema, emailFormSchema };
