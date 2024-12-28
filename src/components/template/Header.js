"use client";
import styles from "./Header.module.css";
import { useState } from "react";
import ModalContainer from "../partials/container/ModalContainer";
import SendOTPFrom from "./autForm/SendOTPForm";
import CheckOTPFrom from "./autForm/CheckOTPFrom";
import { useGetUserData } from "../core/services/queries";
import Profile from "@/public/icons/Profile";
import Logo from "@/public/icons/Logo";

function Header() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  // const [isClose, setIsClose] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const { data } = useGetUserData();

  // if (data?.data) return <Link href="/profile">اطلاعات حساب کاربری</Link>;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoandlist}>
          <Logo />
          <ul>
            <li className="hover:text-[#28A745]">صفحه اصلی</li>
            <li className="hover:text-[#28A745]">خدمات گردشگری</li>
            <li className="hover:text-[#28A745]">درباره ما</li>
            <li className="hover:text-[#28A745]">تماس با ما</li>
          </ul>
        </div>
        <div className={styles.signup}>
          <button onClick={() => setIsModalOpen(true)}>
            <span>
              <Profile />
              ورود | ثبت نام
            </span>
          </button>
        </div>
        
        {step === 1 && (
          // <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          //   </ModalContainer>
            <SendOTPFrom
              mobile={mobile}
              setMobile={setMobile}
              setStep={setStep}
              isOpen={isModalOpen}
              setIsOpen={setIsModalOpen}
            />
        )}
        {step === 2 && (
          
            <CheckOTPFrom
              mobile={mobile}
              setStep={setStep}
              isOpen={isModalOpen}
              setIsOpen={setIsModalOpen}
            />
        )}
      </header>
    </>
  );
}

export default Header;
