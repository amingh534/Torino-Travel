import Call from "@/public/icons/Call";
import styles from "./Info.module.css";
function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div>
          <h2>خرید تلفنی از </h2>
          <p>به هرکجا که میخواهید!</p>
        </div>
        <img src="images/professional-cartoon-man-talking-phone-icon-illustration_1151483-70336-removebg-preview 1.png" />
      </div>
      <div className={styles.left}>
        <div>
          <h2>021-1840</h2>
          <Call/>
        </div>
        <button href="#">اطلاعات بیشتر</button>
      </div>
    </div>
  );
}

export default Info;
