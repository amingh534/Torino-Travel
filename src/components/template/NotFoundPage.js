import Link from "next/link";
import styles from "./NotFoundPage.module.css";
import Image from "next/image";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src="/public/images/error-tv.webp" width={455} height={455} />
      </div>
      <div className={styles.right}>
        <h2>صفحه مورد نظر یافت نشد</h2>
        <div className={styles.link}>
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
