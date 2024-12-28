"use client";

import Calendar from "@/public/icons/Calendar";
import styles from "./Searchbar.module.css";
import Search from "@/public/icons/Search";
import Location from "@/public/icons/Location";
import { useForm } from "react-hook-form";
function Searchbar() {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit(submitHandler)}>
      <img src="/images/Untitled_design__1_ (1).png" />
      <h2>
        <span>تورینو</span>برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
      <div className={styles.selectoption}>
        <button type="submit">جستجو</button>
        <select>
          <option value="" disabled selected>
            تاریخ
          </option>
          <option value="" disabled selected>
            تاریخ
          </option>
        </select>
        <Calendar />
        <select {...register("destinationId")}>
          <option value="" disabled selected>
            مقصد
          </option>
          <option value={2}>سنندج</option>
        </select>
        <Search />
        <select {...register("originId")}>
          <option value="" disabled selected>
            مبدا
          </option>
          <option value={1}>تهران</option>
        </select>
        <Location />
      </div>
    </form>
  );
}

export default Searchbar;
