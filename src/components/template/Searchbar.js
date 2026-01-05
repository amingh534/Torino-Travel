"use client";

import Calendar from "@/public/icons/Calendar";
import styles from "./Searchbar.module.css";
import Search from "@/public/icons/Search";
import Location from "@/public/icons/Location";

import { Controller, useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";

import { DatePicker } from "zaman";
import { useGetTours } from "../core/services/queries";
import { DateToIso, flattenObjected } from "../core/utils/helpers";
import useQuery from "../core/hooks/query";
import QueryString from "qs";
import cities from "../core/data/cityData";
import { useRouter, useSearchParams } from "next/navigation";

function Searchbar() {
   const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // 🔹 query از URL
  const queryObject = {
    originId: searchParams.get("originId") || "",
    destinationId: searchParams.get("destinationId") || "",
    startDate: searchParams.get("startDate"),
    endDate: searchParams.get("endDate"),
  };

  // 🔹 گرفتن دیتا
  const { data } = useGetTours(flattenObjected(queryObject));

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      originId: "",
      destinationId: "",
      date: null,
    },
  });

  // 🔹 sync فرم با URL
  useEffect(() => {
    reset({
      originId: queryObject.originId,
      destinationId: queryObject.destinationId,
      date:
        queryObject.startDate && queryObject.endDate
          ? {
              startDate: queryObject.startDate,
              endDate: queryObject.endDate,
            }
          : null,
    });
  }, []);

  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObjected(form));
    router.push(`/?${query}`);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(submitHandler)}>
      <img src="/images/Untitled_design__1_ (1).webp" />
      <h2>
        <span>تورینو</span>برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
      <div className={styles.selectoption}>
        {/* انتخاب مبدا */}
        <div className={styles.fieldGroup}>
          <Location />
          <select {...register("originId")}>
            <option value="default">
              مبدا
            </option>

            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        {/* انتخاب مقصد */}
        <div className={styles.fieldGroup}>
          <hr />
          <Search />
          <select {...register("destinationId")} defaultValue="">
            <option value="default">
              مقصد
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        {/* انتخاب تاریخ */}
        <div className={styles.fieldGroup}>
          <hr />
          <div
            className={styles.iconLabel}
            onClick={() => setIsOpen((prev) => !prev)}
            style={{ cursor: "pointer" }}
          >
            <Calendar />
            <label>تاریخ</label>
          </div>
          {isOpen && (
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange } }) => (
                <div className={styles.datePickerWrapper}>
                  <DatePicker
                    accentColor="#28A745"
                    inputClass="w-[200px] "
                    weekends={[6]}
                    className="font-['Vazir_FD-WOL'] size-3"
                    onChange={(e) =>
                      onChange({
                        startDate: DateToIso(e.from),
                        endDate: DateToIso(e.to),
                      })
                    }
                    defaultValue={new Date()}
                    round="x2"
                    range
                  />
                </div>
              )}
            />
          )}
        </div>
        <button type="submit">جستجو</button>
      </div>
    </form>
  );
}

export default Searchbar;
