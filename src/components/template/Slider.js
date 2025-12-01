import styles from "./Slider.module.css";

function Slider() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div>
          <span>؟</span>
          <h2>
            چرا<i>؟</i>
          </h2>
        </div>

        <h3>تور طبیعت گردی و تاریخی </h3>
        <p>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div className={styles.left}>
        <div className={styles.imgcontainer}>
          <div className={styles.slide1}>
            <img src="images/slide1.webp" />
          </div>
          <div className={styles.slide2}>
            <img src="images/slide2.webp" />
          </div>
          <div className={styles.slide3}>
            <img src="images/slide3.webp" />
          </div>
          <div className={styles.slide4}>
            <img src="images/slide4.webp" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Slider;
