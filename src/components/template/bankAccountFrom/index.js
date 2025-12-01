import Edit from "@/public/icons/Edit";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { bankAccountSchema } from "src/components/core/schema";
import { useUpdateBankAccount } from "src/components/core/services/mutation";

function BankAccountForm({
  showTransactions,
  setShowTransactions,
  data,
  setProfileData,
}) {
  const { mutate, isPending } = useUpdateBankAccount();
//   const { shaba_code, accountIdentifier, debitCard_code } = data?.payment;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAccountSchema),
    defaultValues: {
      shaba_code: data?.payment?.shaba_code,
      accountIdentifier: data?.payment?.accountIdentifier,
      debitCard_code: data?.payment?.debitCard_code,
    },
  });

  const submitHandler = (data) => {
    if (isPending) return;
    mutate(
      { payment: data },
      {
        onSuccess: ({ data }) => {
          toast.success(data?.message);
          setProfileData((prev) => ({ ...prev, payment: data.user.payment }));
          setShowTransactions(false);
        },
        onError: ({ response }) => {
          toast.error(response?.data?.message || "دوباره وارد حساب کاربری شوید");
        },
      }
    );
  };

  return (
    <div className="grid border border-[#00000033] rounded-[10px] w-[872px] h-[179px] ">
      <div className="flex justify-between w-full">
        <h1 className="mr-3 mt-3 font-normal text-base text-[#000000]">
          اطلاعات حساب بانکی
        </h1>
      </div>
      {showTransactions ? (
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-wrap mr-6 gap-6 mb-8 *:p-3  *:w-[255px] *:h-[45px] *:border *:border-[#00000033] *:rounded-[5px] *:outline-none">
              <input
                placeholder={
                  errors.shaba_code ? errors.shaba_code.message : "شماره شبا"
                }
                className={`input-default ${
                  errors.shaba_code
                    ? "text-red-600 placeholder-red-600  focus:border-red-600"
                    : ""
                }`}
                // name="lastName"
                // value={profiledata.payment}
                // onChange={(e) =>
                //   setProfileData({ ...profiledata, payment: e.target.value })
                // }
                {...register("shaba_code")}
                aria-invalid={errors.shaba_code ? "true" : "false"}
              />
              <input
                type="text"
                placeholder={
                  errors.accountIdentifier
                    ? errors.accountIdentifier.message
                    : "شماره حساب"
                }
                className={`input-default ${
                  errors.accountIdentifier
                    ? "text-red-600 placeholder-red-600  focus:border-red-600"
                    : ""
                }`}
                {...register("accountIdentifier")}
                aria-invalid={errors.accountIdentifier ? "true" : "false"}
              />
              <input
                type="text"
                placeholder={
                  errors.debitCard_code
                    ? errors.debitCard_code.message
                    : "شماره کارت"
                }
                className={`input-default ${
                  errors.debitCard_code
                    ? "text-red-600 placeholder-red-600  focus:border-red-600"
                    : ""
                }`}
                {...register("debitCard_code")}
                aria-invalid={errors.debitCard_code ? "true" : "false"}
              />
            </div>
            <div className="flex justify-end relative font-semibold text-base space-x-5  gap-5 border-t-[1px] border-t-[#00000033] *:mt-2  *:w-[144px] *:h-[41px] *:rounded-md ">
              <button type="submit" className="bg-[#28A745] text-[#FFFF] ">
                تایید
              </button>
              <button
                onClick={() => setShowTransactions(false)}
                className="border-[2px] border-[#28A745] text-[#28A745]"
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="relative">
            <button
              onClick={() => setShowTransactions(true)}
              className="absolute left-6 bottom-7 flex flex-row gap-3  font-extralight text-base text-[#009ECA]"
            >
              <Edit />
              ویرایش اطلاعات
            </button>
          </div>
          <div className="m-3 flex font-light">
            <div>
              <p className="font-light">
                شماره شبا
                {data?.payment?.shaba_code}
              </p>
              <p className="mt-4 font-light">
                شماره حساب
                {data?.payment?.accountIdentifier}
              </p>
            </div>
            <div className="mx-auto">
              <p className="font-light">
                شماره کارت
                {data?.payment?.debitCard_code}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BankAccountForm;
