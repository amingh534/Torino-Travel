import Edit from "@/public/icons/Edit";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { emailFormSchema } from "src/components/core/schema";
import { useUpdateData } from "src/components/core/services/mutation";

function EmailForm({ data }) {
    console.log("Email",data);
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
    mutate(
       formData ,
      {
        onSuccess: ({ data }) => {
            toast.success(data?.message);
            console.log("onSuccess",data);
          setShowEmail(false);
        },
        onError: ({ response }) => {
          toast.error(
            response?.data?.message || "دوباره وارد حساب کاربری شوید"
          );
        },
      }
    );
  };
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex items-center">
        <p className=" font-light text-sm p-5 text-[#000000]">
          شماره موبایل
          <span className="font-normal text-sm text-[#000000] mr-8">
            {data?.mobile}
          </span>
        </p>
      </div>
      {showEmail ? (
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <input
              placeholder={errors.email ? errors.email.message : "آدرس ایمیل"}
              className={`ml-2 p-2 w-[255px] h-[45px] rounded-md text-[#00000080] border border-[#00000033] outline-none ${
                errors.email
                  ? "text-red-600 placeholder-red-600  focus:border-red-600 "
                  : ""
              }`}
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />

            <button
              className="ml-[26px] mb-[21px] bg-[#28A745] w-[122px] h-[45px] rounded-[5px] font-light text-base text-[#FFFF] text-center"
              type="submit"
            >
              تایید
            </button>
          </form>
        </div>
      ) : (
        <div className="flex items-center gap-2  ml-10">
          <p className="font-light text-sm text-[#000000] ">ایمیل</p>
          <span className="ml-40 font-light text-sm">{data?.email}</span>
          <button
            onClick={() => setShowEmail(true)}
            className="flex items-center gap-2 font-normal text-[#009ECA] text-sm"
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
