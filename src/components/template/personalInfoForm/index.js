import Edit from "@/public/icons/Edit";
import DateConverter from "@/utils/dateConverter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { personalFormSchema } from "src/components/core/schema";
import { useUpdateData } from "src/components/core/services/mutation";
import { DatePicker } from "zaman";

function PersonalInfoFrom({ data }) {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const { mutate, isPending } = useUpdateData();
  // const user = data?.data || {};
  // console.log("Data:", data);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalFormSchema),
    defaultValues: {
      // fullName: `${data?.firstName || ""} ${data?.lastName || ""}`,
      fullName: data?.data?.fullName,
      // firstName:data?.firstName,
      // lastName:data?.lastName,
      nationalCode: data?.data?.nationalCode || "",
      birthDate: data?.data?.birthDate || "",
      gender: data?.data?.gender || "",
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
    <div>
      {showPersonalInfo ? (
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-wrap mr-6 gap-6 mb-8 *:p-3  *:w-[255px] *:h-[45px] *:border *:border-[#00000033] *:rounded-[5px] *:outline-none">
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
              {/* <input
                type="date"
                placeholder={
                  errors.birthDate ? errors.birthDate.message : "تاریخ تولد"
                }
                className={`input-default ${
                  errors.birthDate
                    ? "text-red-600 placeholder-red-600  focus:border-red-600"
                    : ""
                }`}
                {...register("birthDate")}
                aria-invalid={errors.birthDate ? "true" : "false"}
              /> */}
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
                        onChange((e.value));
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
            <div className="flex justify-end relative font-normal text-base bottom-1 space-x-5  gap-5 border-t-[1px] border-t-[#00000033] *:mt-2  *:w-[144px] *:h-[41px] *:rounded-md ">
              <button type="submit" className="bg-[#28A745] text-[#FFFF] ">
                تایید
              </button>
              <button
                onClick={() => setShowPersonalInfo(false)}
                className=" border-[2px] border-[#28A745] text-[#28A745]"
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
              onClick={() => setShowPersonalInfo(true)}
              className="absolute left-6 bottom-14 flex flex-row gap-3  font-extralight text-base text-[#009ECA]"
            >
              <Edit />
              ویرایش اطلاعات
            </button>
          </div>
          <div className="m-3 flex ">
            <div className="*:font-light">
              <p>
                نام و نام خانوادگی
                {" "}
                 {data?.data?.fullName} 
              </p>
              <p className="mt-4  ">
                جنسیت
                {" "}
                {data?.data?.gender}
              </p>
            </div>
            <div className="mx-auto *:font-light">
              <p>
                کد ملی
                {" "}
                {data?.data?.nationalCode}
              </p>
              <p className="mt-4 ">
                تاریخ تولد
                {" "}
                {DateConverter(data?.data?.birthDate)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalInfoFrom;
