"use client";
import Image from "next/image";
import styles from "./DisconnectPage.module.css";

function DisconnectPage({ reset }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src="/images/error_lamp_robot.webp" width={555} height={555} alt="Error Lamp Robot" />
      </div>
      <div className={styles.right}>
        <h2>اتصال با سرور برقرار نیست!</h2>
        <button onClick={() => reset()}>لطفا بعدا دوباره امتحان کنید.</button>
      </div>
    </div>
  );
}

export default DisconnectPage;
