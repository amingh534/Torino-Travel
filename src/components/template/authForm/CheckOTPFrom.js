"use client";

import { useState } from "react";
import OtpInput from "react18-input-otp";

import { useCheckOtp } from "../../core/services/mutation";
import { setCookie } from "../../core/utils/cookie";
import { useGetUserData } from "../../core/services/queries";
import ModalContainer from "../../partials/container/ModalContainer";
import LeftArrow from "@/public/icons/LeftArrow";

function CheckOTPFrom({ mobile, setStep, setIsOpen, isOpen }) {
  const [code, setCode] = useState("");
  const { isPending, mutate } = useCheckOtp();
  const { refetch } = useGetUserData();

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          setCookie("accessToken", data?.data.accessToken, 30);
          setCookie("refreshToken", data?.data.refreshToken, 365);
          setIsOpen(false);
          setStep(1);
          refetch();
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  const changeHandler = (otp) => {
    setCode(otp);
  };
  return (
    <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col p-8 m-auto w-[358px] h-[362px] rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-[#ffffff]">
        <button dir="ltr" onClick={() => setStep(1)}>
          <LeftArrow />
        </button>
        <h4 className="mt-[50px] text-center font-['Yekan_Bakh'] text-[28px] font-[600] text-[#282828] my-2">
          کد تایید را وارد کنید.
        </h4>
        <form
          onSubmit={checkOtpHandler}
          className=" flex flex-col flex-1  justify-end gap-5 font-['Yekan_Bakh'] text-[16px] font-[300] text-[#000000]"
        >
          <label className="font-['Vazir_FD-WOL']">
            کد تایید به شماره {mobile} ارسال شد
          </label>
          <div className=" -ml-[5px]" style={{ direction: "ltr" }}>
            <OtpInput
              value={code}
              onChange={changeHandler}
              numInputs={6}
              separator={<span></span>}
              className="font-['Vazir_FD-WOL']  mr-[2px]"
              inputStyle={{
                border: "1px solid #00000040",
                width: "49px",
                height: "45px",
                borderRadius: "6px",
              }}
            />
          </div>
          <button
            type="submit"
            className=" w-[278px] h-[54px] m-[5px]  rounded-[6px] text-[#ffffff] bg-[#28A745] font-['Vazir_FD-WOL'] text-[18px] font-[500] border border-[#00000040] border-solid "
          >
            ورود به تورینو
          </button>
          {/* <ProfilePage mobile={mobile}/> */}
        </form>
      </div>
    </ModalContainer>
  );
}

export default CheckOTPFrom;
