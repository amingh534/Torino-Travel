"use client";
import Image from "next/image";
import styles from "../components/template/DisconnectPage.module.css"; 
function Error({reset}) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src="/images/Error Lamp Robot.png" width={555} height={555} />
      </div>
      <div className={styles.right}>
        <h2>!اتصال با سرور برقرار نیست</h2>
        <div>
          <p>.لطفا بعدا دوباره امتحان کنید</p>
        </div>
      </div>
      <button onClick={() => reset()}>بازگشت به صفحه اصلی</button>
    </div>
  );
}

export default Error;
