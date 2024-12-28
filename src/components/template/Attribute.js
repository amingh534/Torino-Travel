import Precent from "@/public/icons/Precent";
import styles from "./Attribute.module.css";
import Message from "@/public/icons/Message";
import Heart from "@/public/icons/Heart";

function Attribute() {
  return (
    <div className={styles.line}>
      <div className={styles.container}>
        <Precent/>
        <div>
          <h2>بصرفه ترین قیمت</h2>
          <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
        </div>
        <Message/>
        <div>
          <h2>پشتیبانی</h2>
          <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
        </div>
        <Heart/>
        <div>
          <h2>رضایت کاربران</h2>
          <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
        </div>
      </div>
    </div>
  );
}

export default Attribute;
