"use client";

import Calendar from "@/public/icons/Calendar";
import styles from "./Searchbar.module.css";
import Search from "@/public/icons/Search";
import Location from "@/public/icons/Location";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { useGetTours } from "../core/services/queries";
import { useEffect, useState } from "react";
import { DateToIso, flattenObjected } from "../core/utils/helpers";

function Searchbar() {
  const [query, setQuery] = useState("");
  const { data, isPending, refetch } = useGetTours(query);
  const { register, handleSubmit, control } = useForm();
  //  console.log(data);

  useEffect(() => {
    refetch()
  }, [query]);

  const submitHandler = (form) => {
    // let queryString = "";
    // console.log();
    // if (form?.originId) queryString += `originId=${form?.originId}&`;
    // if (form?.destinationId)
    //   queryString += `destinationId=${form?.destinationId}&`;
    // if (form?.date)
    //   queryString += `startDate=${new Date(
    //     form?.date.startDate
    //   ).toISOString()}&endDate=${new Date(form?.date.endDate).toISOString()}&`;
    // console.log(queryString);
    // console.log(form);
    setQuery(flattenObjected(form));
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
          render={({ field: { onChange } }) => (
            <DatePicker
              accentColor="#28A745"
              weekends={[6]}
              className="font-['Vazir_FD-WOL'] size-3 "
              // onChange={(value) => setCalendarValue(value)}
              onChange={(e) => onChange({ startDate: DateToIso(e.from), endDate: DateToIso(e.from) })}
              defaultValue={new Date()}
              round="x2"
              range
            />
          )}
        />

        <label>تاریخ</label>

        <Calendar />
        <select {...register("originId")}>
          <option disabled selected>
            مبدا
          </option>

          <option value="1">تهران</option>
        </select>
        <Search />
        <select {...register("destinationId")}>
          <option disabled selected>
            مقصد
          </option>
          <option value="2">سنندج</option>
        </select>

        <Location />
      </div>
    </form>
  );
}

export default Searchbar;
