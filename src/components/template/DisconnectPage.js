import Image from "next/image"
import styles from "./DisconnectPage.module.css"

function DisconnectPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src="/images/Error Lamp Robot.png" width={555} height={555} />
      </div>
      <div className={styles.right}>
        <h2>!اتصال با سرور برقرار نیست</h2>
        <div >
          <p>.لطفا بعدا دوباره امتحان کنید</p>
        </div>
      </div>
    </div>
  )
}

export default DisconnectPage