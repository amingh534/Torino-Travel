import React from "react";
import styles from "./ToursCard.module.css";
import { e2p, sp } from "../core/utils/replaceNumbers";
import Link from "next/link";
function ToursCard(props) {
  const { id, image, title, price } = props;
   
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>مهر ماه.3روزه-پرواز-هتل 3 س..</p>
      </div>
      <div className={styles.separator} />
      <div className={styles.reserv}>
        <Link href={`/buy-tours/${id}`}>
          <span> رزرو</span>
        </Link>

        <div className={styles.price}>
          <span>{e2p(sp(price))}</span>
          <p>تومان</p>
        </div>
      </div>
    </div>
  );
}

export default ToursCard;
