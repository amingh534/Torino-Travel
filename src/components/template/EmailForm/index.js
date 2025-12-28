import Edit from "@/public/icons/Edit";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { emailFormSchema } from "src/components/core/schema";
import { useUpdateData } from "src/components/core/services/mutation";

function EmailForm({ data }) {
  const { mutate, isPending } = useUpdateData();

  const [showEmail, setShowEmail] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailFormSchema),
    defaultValues: {
      email: data?.email || "",
    },
  });

  const submitHandler = (formData) => {
    if (isPending) return;
    // console.log("fromData:",formData);
    mutate(formData, {
      onSuccess: ({ data }) => {
        toast.success(data?.message);
        setShowEmail(false);
      },
      onError: ({ response }) => {
        toast.error(response?.data?.message || "دوباره وارد حساب کاربری شوید");
      },
    });
  };
  return (
 <div
  className="
    flex items-center justify-between
    w-[95%]
    max-md:flex-col
    max-md:gap-6
    max-md:m-auto
  "
>
  {/* Mobile */}
  <div
    className="
      flex items-center
      w-full
      max-md:justify-around
       max-md:mt-3
    "
  >
    <p className="text-sm font-light text-black">
      شماره موبایل
    </p>

    <span className="text-sm font-normal text-black">
      {data?.mobile}
    </span>
  </div>

  {showEmail ? (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex items-center gap-4 max-md:w-full max-md:flex-row max-md:m-5 max-md:justify-center "
    >
      <input
        placeholder={errors.email ? errors.email.message : "آدرس ایمیل"}
        className={`
          w-[255px] h-[45px]
          max-md:max-w-[186px]
          max-md:max-h-[40px]
          p-5 rounded-md
          border border-black/20
          outline-none
          text-sm text-black/70
          ${
            errors.email
              ? "border-red-600 text-red-600 placeholder-red-600 focus:border-red-600"
              : ""
          }
        `}
        {...register("email")}
        aria-invalid={errors.email ? "true" : "false"}
      />

      <button
        type="submit"
        className="
          h-[45px] w-[122px]
          max-md:max-w-[93px]
          max-md:max-h-[40px]
          rounded-md
          bg-[#28A745]
          text-white text-base font-light
        "
      >
        تایید
      </button>
    </form>
  ) : (
    <div
      className="
        flex items-center gap-4
        max-md:w-full
        max-md:justify-evenly
        max-md:m-5
      "
    >
      <p className="text-sm font-light text-black">ایمیل</p>

      <span className="text-sm font-light text-black/70 truncate">
        {data?.email}
      </span>

      <button
        onClick={() => setShowEmail(true)}
        className="
          flex items-center gap-2
          text-sm font-normal
          text-[#009ECA]
        "
      >
        <Edit />
        افزودن
      </button>
    </div>
  )}
</div>

  );
}

export default EmailForm;
