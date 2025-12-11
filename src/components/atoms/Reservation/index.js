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
        toast.success(data?.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        toast.error("لطفاواردحساب کاربری خود شوید.")
        setIsModalOpen(true);
      },
    });
  };

  return (
    <div>
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
          className="absolute  w-[204px] h-[56px] border-none bg-[#28a745] font-light text-2xl text-[#ffff] rounded-[10px] "
        >
          رزرو و خرید
        </button>
      )}
    </div>
  );
}

export default ReservationButton;
