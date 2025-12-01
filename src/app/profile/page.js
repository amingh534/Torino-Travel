"use client";
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
import BankAccountForm from "@/template/bankAccountFrom";

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
  
  // console.log("Mobile Number:",mobile);
  // const { isPending, mutate } = useCheckOtp();
  // if (isPending) return;
  // mutate({ mobile }, { onSuccess: (data) => console.log(data) });

  const { data: userResponse } = useGetUserData();
  const user = userResponse?.data;
  const updateUser = usePutUserData();
  // console.log("PutData:", updateUser);
  // console.log("ProfileData:", profiledata);
  console.log("User:", user);
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
      <BankAccountForm
        showTransactions={showTransactions}
        setShowTransactions={setShowTransactions}
        profiledata={profiledata}
        setProfileData={setProfileData}
        data={user}
      />
      {/* <div className="flex  border border-[#00000033] rounded-[10px] w-[872px] h-[171px] "></div> */}
      <Toaster />
    </div>
  );
}

export default ProfilePage;
