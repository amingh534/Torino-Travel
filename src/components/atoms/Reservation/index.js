"use client";

import CheckOTPFrom from "@/template/authForm/CheckOTPFrom";
import SendOTPFrom from "@/template/authForm/SendOTPForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUpdateBasket } from "src/components/core/services/mutation";

function ReservationButton({ id }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, isPending } = useUpdateBasket();
  const router = useRouter();
  const clickHandler = () => {
    if (isPending) return;
    mutate(id, {
      onSuccess: (data) => {
        if (data?.data?.id === id) return <p>این تور قبلا خریداری شده است</p>;
        toast.success(data?.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        toast.error("لطفاواردحساب کاربری خود شوید.");
        setIsModalOpen(true);
      },
    });
  };

  return (
    <div >
      {isModalOpen ? (
        step === 1 ? (
          <SendOTPFrom
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
          />
        ) : (
          <CheckOTPFrom
            mobile={mobile}
            setStep={setStep}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
          />
        )
      ) : (
        <button
  onClick={clickHandler}
  disabled={isPending}
  className="

   w-[204px]
    h-[56px]
    bg-[#28a745]
    font-light
    text-2xl
    text-white
    rounded-[10px]
    transition-colors
    duration-200
    hover:bg-[#23913c]
  "
>
  رزرو و خرید
</button>

      )}
    </div>
  );
}

export default ReservationButton;
