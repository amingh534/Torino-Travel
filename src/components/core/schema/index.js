import { object, string } from "yup";


const bankAccountSchema = object({
  shaba_code: string()
    .required("شماره شبا باید عدد و16 رقمی باشد.")
    .matches(/^([0-9]{16,})$/, ),
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

export {bankAccountSchema}