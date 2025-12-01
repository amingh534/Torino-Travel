"use client";
import { useState } from "react";
import ModalContainer from "../partials/container/ModalContainer";
import { useGetUserData } from "../core/services/queries";
import Profile from "@/public/icons/Profile";
import Logo from "@/public/icons/Logo";
import SendOTPFrom from "@/template/authForm/SendOTPForm";
import CheckOTPFrom from "@/template/authForm/CheckOTPFrom";
import styles from "./Header.module.css";
import Link from "next/link";
import Login from "@/public/icons/Login";
import Home from "@/public/icons/Home";
import Airplane from "@/public/icons/Airplane";
import Aboutus from "@/public/icons/Aboutus";
import Call from "@/public/icons/Call";
import SignupDropdown from "@/module/SignupDropdown";


function Header() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [isClose, setIsClose] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useGetUserData();
  // console.log(data);

  // if (data?.data) return <Link href="/profile">اطلاعات حساب کاربری</Link>;

  return (
    <header className={styles.header}>
      <div className={styles.logoandlist}>
        <Logo />
        <ul>
          <li className="hover:text-[#28A745]">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="hover:text-[#28A745]">
            <Link href="/services">خدمات گردشگری</Link>
          </li>
          <li className="hover:text-[#28A745]">
            <Link href="/about">درباره ما</Link>
          </li>
          <li className="hover:text-[#28A745]">
            <Link href="/contact">تماس با ما</Link>
          </li>
        </ul>
      </div>
      <div className={styles.signup}>
        {data?.data ? (
          <SignupDropdown data={data}/>
        ) : (
          <button onClick={() => setIsModalOpen(true)}>
            <span>
              <Profile />
              ورود | ثبت نام
            </span>
          </button>
        )}
      </div>

      {/* Mobile controls: signin icon + hamburger */}

      <div className={styles.mobileControls}>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(true)}
          aria-label="menu"
        >
          <span />
        </button>
        {data?.data ? (
          <SignupDropdown data={data}/>
        ) : (
          <button onClick={() => setIsModalOpen(true)}>
            <Login />
          </button>
        )}
      </div>

      {/* Mobile menu */}
      <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <ul>
            <li className="hover:text-[#28A745]">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Home />
                <span>صفحه اصلی</span>
              </Link>
            </li>
            <li className="hover:text-[#28A745]">
              <Link href="/services" onClick={() => setIsOpen(false)}>
                <Airplane />
                <span>خدمات گردشگری</span>
              </Link>
            </li>
            <li className="hover:text-[#28A745]">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                <Aboutus />
                <span>درباره ما</span>
              </Link>
            </li>
            <li className="hover:text-[#28A745]">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Call />
                <span>تماس با ما</span>
              </Link>
            </li>
          </ul>
        </div>
      </ModalContainer>
      {step === 1 && (
        // <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
        <SendOTPFrom
          mobile={mobile}
          setMobile={setMobile}
          setStep={setStep}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          responsive={isOpen}
        />
        // </ModalContainer>
      )}
      {step === 2 && (
        // <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
        <CheckOTPFrom
          mobile={mobile}
          setStep={setStep}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
        // </ModalContainer>
      )}
    </header>
  );
}

export default Header;
