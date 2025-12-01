"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ConfirmButton from "@/module/ConfirmButton";
import EmailInput from "@/template/EmailInput";
import PersonalInfoInputs from "@/module/PersonalInfoInputs";
import Edit from "@/public/icons/Edit";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  useGetUserData,
  usePutUserData,
} from "src/components/core/services/queries";
import { bankAccountSchema } from "src/components/core/schema";


function ProfilePage() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [profiledata, setProfileData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    nationalCode: "",
    payment: {
      shaba_code: "",
      debitCard_code: "",
      accountIdentifier: "",
    },
  });

  // let userValidate = bankAccountSchema.validate({});

  // console.log("UserValidate:", userValidate);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(bankAccountSchema) });
  // console.log("Mobile Number:",mobile);
  // const { isPending, mutate } = useCheckOtp();
  // if (isPending) return;
  // mutate({ mobile }, { onSuccess: (data) => console.log(data) });

  const { data: userResponse } = useGetUserData();
  const user = userResponse?.data;
  const updateUser = usePutUserData();
  // console.log("PutData:", updateUser);
  // console.log("ProfileData:", profiledata);
  // console.log("User:", user);
  useEffect(() => {
    if (user) {
      setProfileData({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: `${user.firstName} ${user.lastName}`.trim(),
        gender: user.gender,
        birthDate: user.birthDate,
        nationalCode: user.nationalCode,
      });
    }
  }, [user]);
  const submitHandler = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="flex flex-col mt-10 gap-6">
      <div className="grid border border-[#00000033] rounded-[10px] w-[872px] h-[115px] ">
        <h1 className="p-3 font-normal text-base ">اطلاعات حساب کاربری</h1>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex items-center">
            <p className=" font-light text-sm p-5 text-[#000000]">
              شماره موبایل
              <span className="font-normal text-sm text-[#000000] mr-8">
                {user?.mobile}
              </span>
            </p>
          </div>
          {showEmail ? (
            <EmailInput
              profiledata={profiledata}
              setProfileData={setProfileData}
              setShowEmail={setShowEmail}
              updateUser={updateUser}
              toast={toast}
              type="email"
              name="email"
            />
          ) : (
            <div className="flex items-center gap-2  ml-10">
              <p className="font-light text-sm text-[#000000] ">ایمیل</p>
              <span className="ml-40 font-light text-sm">{user?.email}</span>
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
      </div>
      <div className="grid border border-[#00000033] rounded-[10px] w-[872px] h-[240px] ">
        <div className="flex justify-between w-full">
          <h1 className="mr-3 mt-3 font-normal text-base text-[#000000]">
            اطلاعات شخصی
          </h1>
        </div>
        {showPersonalInfo ? (
          <div>
            <PersonalInfoInputs
              profiledata={profiledata}
              setProfileData={setProfileData}
            />
            <ConfirmButton
              updateUser={updateUser}
              profiledata={profiledata}
              setProfileData={setProfileData}
              toast={toast}
              setShowPersonalInfo={setShowPersonalInfo}
            />
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
            <div className="m-3 flex *:font-light">
              <div>
                <p>
                  نام و نام خانوادگی{" "}
                  {`${profiledata.firstName} ${profiledata.lastName}`}
                </p>
                <p className="mt-4">جنسیت{profiledata.gender}</p>
              </div>
              <div className="mx-auto *:font-light">
                <p>کد ملی{profiledata.nationalCode}</p>
                <p className="mt-4 ">تاریخ تولد{profiledata.birthDate}</p>
              </div>
            </div>
          </div>
        )}
      </div>
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
                    errors.shaba_code
                      ? errors.shaba_code.message
                      : "شماره شبا"
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
                {/* {!!errors?.shaba_code && (
                  <p role="alert" className=" mt-2 border-none text-red-600">
                    {errors.shaba_code.message}
                  </p>
                )} */}
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
                {/* {!!errors?.accountIdentifier && (
                  <p role="alert" className="text-red-600 border-none">
                    {errors.accountIdentifier.message}
                  </p>
                )} */}
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
                {/* {!!errors?.debitCard_code && (
                  <p role="alert" className="text-red-600 border-none">
                    {errors.debitCard_code.message}
                  </p>
                )} */}
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
                <p className="font-light">شماره شبا</p>
                <p className="mt-4 font-light">شماره حساب</p>
              </div>
              <div className="mx-auto">
                <p className="font-light">شماره کارت</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="flex  border border-[#00000033] rounded-[10px] w-[872px] h-[171px] "></div> */}
      <Toaster />
    </div>
  );
}

export default ProfilePage;
