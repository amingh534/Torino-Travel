import styles from "./ToursDetailPage.module.css";
import Usertrick from "@/public/icons/Usertick";
import Map from "@/public/icons/Map";
import Medalstar from "@/public/icons/Medalstar";
import Routing from "@/public/icons/Routing";
import Calendar from "@/public/icons/Calendar";
import Transportaion from "@/public/icons/Transportaion";
import Capacity from "@/public/icons/Capacity";
import Insurance from "@/public/icons/Insurance";
import DateConverter from "@/utils/dateConverter";
import { e2p, sp } from "@/utils/replaceNumbers";
import ReservationButton from "../atoms/Reservation";

function ToursDetailPage({
  detailsData: {
    id,
    image,
    title,
    price,
    destination: { name },
    startDate,
    endDate,
    fleetVehicle,
    availableSeats,
  },
}) {
  // console.log(props?.id);
  // console.log("ToursDetailsPage:", detailsData);
  // const { image, title, price } = props;
  // console.log("ToursDetailsPage:",detailsData[0]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.innercard}>
          <img src={image} />
          <div className={styles.carddetail}>
            <div className={styles.titleRow}>
              <h1>{title}</h1>
              <p>5روز و 4 شب</p>
            </div>
            <div className={styles.groupdetail}>
              <div>
                <Usertrick />
                <span>تورلیدر از مبدا</span>
              </div>
              <div>
                <Map />
                <span>برنامه سفر</span>
              </div>
              <div>
                <Medalstar />
                <span>تضمین کیفیت</span>
              </div>
            </div>
            <div className={styles.buy}>
              <span>{e2p(sp(price))} </span>
              {/* <Link href="/buy-tours/checkout">رزرو و خرید</Link> */}
              <ReservationButton id={id} />
            </div>
          </div>
        </div>
        <div className={styles.cardoptions}>
          <div>
            <div className={styles.top}>
              <Routing />
              <p>مبدا</p>
            </div>
            <span>{name}</span>
          </div>

          <div>
            <div className={styles.top}>
              <Calendar />
              <p>تاریخ رفت</p>
            </div>
            <span>{DateConverter(startDate)}</span>
          </div>

          <div>
            <div className={styles.top}>
              <Calendar />
              <p>تاریخ برگشت</p>
            </div>
            <span>{DateConverter(endDate)}</span>
          </div>

          <div>
            <div className={styles.top}>
              <Transportaion />
              <p>حمل و نقل</p>
            </div>
            <span>{fleetVehicle}</span>
          </div>

          <div>
            <div className={styles.top}>
              <Capacity />
              <p>ظرفیت</p>
            </div>
            <span>حداکثر {availableSeats} نفر</span>
          </div>
          <div>
            <div className={styles.top}>
              <Insurance />
              <p>بیمه</p>
            </div>
            <span>بیمه 1000 دلاری</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToursDetailPage;
