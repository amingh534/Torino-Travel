"use client";

// import { useState } from "react";
// import SendOTPFrom from "./SendOTPForm";
// import CheckOTPFrom from "./CheckOTPFrom";
// import ModalContainer from "../../partials/container/ModalContainer";
import { useGetUserData } from "../../core/services/queries";
import Link from "next/link";

function AuthForm() {
  // const [step, setStep] = useState(1);
  // const [mobile, setMobile] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetUserData();

  if (data?.data) return <Link href="/profile">اطلاعات حساب کاربری</Link>;

  return <div></div>;
}

export default AuthForm;
