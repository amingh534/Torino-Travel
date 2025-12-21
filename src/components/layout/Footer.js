import StateAirline from "@/public/icons/StateAirline";
import PassengerRights from "@/public/icons/PassengerRights";
import Ecunion from "@/public/icons/Ecunion";
import Samandehi from "@/public/icons/Samandehi";
import Aira from "@/public/icons/Aira";
import styles from "./Footer.module.css"
import Logo from "@/public/icons/Logo";
function Footer() {
  return (
    <>
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
            <img src="/public/images/Torino.webp"   />
            <p>021-8574 :تلفن پشتیبانی </p>
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
    </>
  );
}

export default Footer;
