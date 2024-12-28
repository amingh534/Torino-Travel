"use client";

import styles from "./Layout.module.css";
import toFarsiNumber from "../core/utils/digitConverter";
import { useEffect, useState } from "react";
import ModalContainer from "../partials/container/ModalContainer";
import SendOTPFrom from "../template/autForm/SendOTPForm";
import CheckOTPFrom from "../template/autForm/CheckOTPFrom";
import Profile from "@/public/icons/Profile";
import { useGetUserData } from "../core/services/queries";
import Link from "next/link";
import Logo from "@/public/icons/Logo";
import StateAirline from "@/public/icons/StateAirline";
import PassengerRights from "@/public/icons/PassengerRights";
import Ecunion from "@/public/icons/Ecunion";
import Samandehi from "@/public/icons/Samandehi";
import Aira from "@/public/icons/Aira";

function Layout({ children }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useGetUserData();
  

    if (data?.data) return <Link href="/profile">اطلاعات حساب کاربری</Link>;
  


  return (
    <div className={styles.container}>
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
          <SendOTPFrom
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
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
      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <div className={styles.rightfooter}>
          <div className={styles.rightside}>
            <h3>تورینو</h3>
            <ul>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>
          <div className={styles.leftside}>
            <h3>خدمات مشتریان</h3>
            <ul>
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li>پرسش و پاسخ</li>
            </ul>
          </div>
        </div>
        <div className={styles.leftfooter}>
          <div className={styles.footerlogo} style={{ direction: "ltr" }}>
            <Logo />
            <p>{`${toFarsiNumber("0218574")} :تلفن پشتیبانی  `}</p>
          </div>
          <div className={styles.icon}>
            <StateAirline />
            <PassengerRights />
            <Ecunion />
            <Samandehi />
            <Aira />
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </div>
    </div>
  );
}

export default Layout;
