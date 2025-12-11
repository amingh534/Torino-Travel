"use client";
import { Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { personalFormSchema } from "src/components/core/schema";
import { DatePicker } from "zaman";
import AuthProvider from "src/components/partials/provider/AutProvider";
import { serverFetch } from "src/components/core/services/http";
import { useGetBasket } from "src/components/core/services/queries";

function CheckOut() {
  // const data = await serverFetch("basket", null, { cache: "no-store" });
  const { data, isPending } = useGetBasket();
  console.log(data);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalFormSchema),
    defaultValues: {
      // fullName: `${data?.firstName || ""} ${data?.lastName || ""}`,
      fullName: "",
      // firstName:data?.firstName,
      // lastName:data?.lastName,
      nationalCode: "",
      birthDate: "",
      gender: "",
    },
  });

  const submitHandler = (formData) => {
    if (isPending) return;
    // console.log("fromData:",formData);
    // const [firstName, ...lastName] = formData.fullName.trim().split(" ");

    // const payload = {
    //   firstName,
    //   lastName: lastName.join(" "),
    //   nationalCode: formData.nationalCode,
    //   birthDate: formData.birthDate,
    //   gender: formData.gender,
    // };

    mutate(
      { data: formData },
      {
        onSuccess: ({ data }) => {
          toast.success(data?.message);
          setShowPersonalInfo(false);
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
    <AuthProvider>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex  bg-[#F5F5F5] min-h-screen pt-10 pr-28 gap-4  ">
          <div className="flex flex-wrap  border bg-[#ffff] border-[#00000033] rounded-[10px] w-[865px] h-[228px] ">
            <h1 className="font-light mr-11 mt-5">مشخصات مسافر</h1>
            <div className="flex flex-wrap  mr-6 gap-6 mb-8 *:p-3  *:w-[255px] *:h-[45px] *:border *:border-[#00000033] *:rounded-[5px] *:outline-none">
              <input
                placeholder={
                  errors.fullName
                    ? errors.fullName.message
                    : "نام و نام خانوادگی"
                }
                className={`input-default ${
                  errors.fullName
                    ? "text-red-600 placeholder-red-600  focus:border-red-600"
                    : ""
                }`}
                {...register("fullName")}
                aria-invalid={errors.fullName ? "true" : "false"}
              />
              <input
                type="text"
                placeholder={
                  errors.nationalCode ? errors.nationalCode.message : "کد ملی"
                }
                className={`input-default ${
                  errors.nationalCode
                    ? "text-red-600 placeholder-red-600  focus:border-red-600"
                    : ""
                }`}
                {...register("nationalCode")}
                aria-invalid={errors.nationalCode ? "true" : "false"}
              />

              <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange, value } }) => (
                  <div>
                    <DatePicker
                      accentColor="#28A745"
                      inputClass="w-[200px]"
                      weekends={[6]}
                      className="font-['Vazir_FD-WOL'] size-3"
                      onChange={(e) => {
                        // console.log("DATE:", (e.value));
                        onChange(e.value);
                      }}
                      defaultValue={value ? new Date(value) : new Date()}
                      round="x2"
                    />
                  </div>
                )}
              />

              <select {...register("gender")}>
                <option value="" disabled selected hidden>
                  جنسیت
                </option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
            </div>
          </div>
          <div className="flex  bg-[#ffff] outline-none rounded-[10px] w-[307px] h-[228px] ">
            <h1>جزئیات پرداخت</h1>
          </div>
        </div>
      </form>
    </AuthProvider>
  );
}

export default CheckOut;
