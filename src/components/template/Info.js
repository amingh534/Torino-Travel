import Call from "@/public/icons/Call";
import styles from "./Info.module.css";
import Image from "next/image";
function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div>
          <h2>خرید تلفنی از </h2>
          <p>به هرکجا که میخواهید!</p>
        </div>
          <Image loading="eager" src="/images/cartoon-man.webp" alt="info-phone" width={150} height={150}/>
      </div>
      <div className={styles.info}>
        <div>
          <h2>021-1840</h2>
          <Call />
        </div>
        <button href="#">اطلاعات بیشتر</button>
      </div>
    </div>
  );
}

export default Info;
