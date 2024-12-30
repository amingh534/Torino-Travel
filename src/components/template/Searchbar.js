"use client";

import Calendar from "@/public/icons/Calendar";
import styles from "./Searchbar.module.css";
import Search from "@/public/icons/Search";
import Location from "@/public/icons/Location";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { useState } from "react";
function Searchbar() {
  const { register, handleSubmit, control } = useForm();
  const [calendarValue, setCalendarValue] = useState(new Date());
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

        <Controller
          control={control}
          name="date"
          render={({ field:{onChange} }) => (
            <DatePicker
              accentColor="#28A745"
              weekends={[6]}
              className="font-['Vazir_FD-WOL'] size-3 "
              // onChange={(value) => setCalendarValue(value)}
              onChange={(e) => onChange({ startDate: e.from, endDate: e.from })}
              defaultValue={calendarValue}
              round="x2"
              range
            />
          )}
        />

        <select>
          <option value="" disabled selected>
            تاریخ
          </option>
          <option>تاریخ</option>
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
