"use client";

import toast from "react-hot-toast";
import { useState } from "react";

import { isValidMobile } from "../../core/utils/validation";
import { useSendOtp } from "../../core/services/mutation";
import Cancel from "@/public/icons/Cancel";
import ModalContainer from "../../partials/container/ModalContainer";

function SendOTPFrom({ mobile, setMobile, setStep, isOpen, setIsOpen  }) {
  const [error, setError] = useState("");
  const { isPending, mutate } = useSendOtp();
  
  const sendOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر را وارد کنید!");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
 

  return (
    
      <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col p-10 m-auto w-[358px] h-[362px] rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-[#ffffff]">
          {/* {isLoading ? <p>Loading...</p> : null} */}
          <button dir="ltr" onClick={()=>setIsOpen(false)}>
            <Cancel />
          </button>
          <h4 className="text-center font-['Yekan_Bakh'] text-[28px] font-[600] text-[#282828] my-2">
            ورود به تورینو
          </h4>
          <form
            onSubmit={sendOtpHandler}
            className=" flex flex-col flex-1 justify-end gap-5 font-['Yekan_Bakh'] text-[16px] font-[300] text-[#000000]"
          >
            <label>شماره موبایل خود را وارد کنید</label>
            <input
              type="text"
              placeholder="4523***0912"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-[278px] h-[54px]  rounded-[6px] font-['Vazir_FD-WOL'] text-[15px] font-[300] border border-[#00000040] border-solid p-2  "
            />
            {!!error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className=" w-[278px] h-[54px]  rounded-[6px] text-[#ffffff] bg-[#28A745] font-['Vazir_FD-WOL'] text-[18px] font-[500] border border-[#00000040] border-solid "
            >
              ارسال کد تایید
            </button>
          </form>
        </div>
     
        </ModalContainer>
  );
}

export default SendOTPFrom;
