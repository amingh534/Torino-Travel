import ToursCard from "./ToursCard";
import styles from "./AllTours.module.css";

function AllTours({ toursData }) {
  return (
    <main className={styles.wrapper}>
      <h1 className="max-[600px]:mx-[80px] font-[400] text-[32px]">همه تور ها</h1>
      <div className={styles.grid}>
        {toursData?.map((tour) => (
          <ToursCard key={tour.id} {...tour} />
        ))}
      </div>
    </main>
  );
}

export default AllTours;
