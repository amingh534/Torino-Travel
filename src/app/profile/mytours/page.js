"use client";

import { icons } from "@/lib/constants";
import { Sunfog } from "@/public/icons/SunFog";
import { useMemo, useState } from "react";
import { useGetUserTours } from "src/components/core/services/queries";
import DateConverter from "@/utils/dateConverter";
import { e2p, sp } from "@/utils/replaceNumbers";

function MyToursPage() {
  const { data, isPending, isError } = useGetUserTours();
  const tours = data?.data || [];
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return tours.slice(start, start + itemsPerPage);
  }, [currentPage, tours]);

  const totalPages = Math.ceil(tours.length / itemsPerPage);

  if (isPending) return <div>درحال بارگذاری...</div>;
  return (
   
    <div
  className="
    flex flex-col mt-10
    w-[872px]
    rounded-[10px]
    border border-black/20
    mx-auto
    px-3
    max-md:border-none
    max-md:w-full
  "
>
  <div className="mt-4 space-y-4">
    {currentItems?.map((tour, index) => (
      <div
        key={`${tour.id}-${index}`}
        className="
          w-full max-w-[832px]
          min-h-[168px]
          mx-auto
          rounded-[10px]
          border border-black/20
          max-md:border
          max-md:p-2
        "
      >
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 p-3 max-md:gap-1 max-md:mb-4">
            <Sunfog />
            <h1 className="font-medium text-sm text-black">
              {tour.title}
            </h1>

            <div className="flex items-center gap-2 md:mr-auto max-md:w-[50%] max-md:justify-end ">
              <span>{icons[tour.fleetVehicle]}</span>
              <p className="font-medium text-sm text-black">
                سفر با {tour.fleetVehicle}
              </p>
            </div>
          </div>

          {/* مسیر و تاریخ */}
          <div
            className="
              flex p-5 text-sm font-medium text-black
              md:flex-row
              max-md:flex-col
              max-md:gap-3
              
            "
          >
            <div className="flex flex-wrap items-center gap-2 ">
              <h2 className="font-medium text-black text-sm">
                {tour.origin.name} به {tour.destination.name}
              </h2>
              <span className="text-black/60 font-normal">
                {DateConverter(tour.startDate)}
              </span>
            </div>

              
            <div className="flex items-center gap-2 md:mr-auto ">
              <h2 className="font-medium text-black text-sm">تاریخ برگشت</h2>
              <span className="text-black/60 font-normal ">
                {DateConverter(tour.endDate)}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div
            className="
              flex p-4 border-t border-black/20 text-sm
              md:flex-row
              max-md:flex-row
              max-md:gap-3
            "
          >
            <div className="flex items-center gap-2">
              <p className="text-black/60">شماره تور</p>
              <span className="font-medium text-black text-sm">10209544</span>
            </div>

            <span className="hidden md:block mx-7 h-7 w-px bg-black/20" />

            <div className="flex items-center gap-2">
              <p className="text-black/60">مبلغ پرداخت شده</p>
              <span className="font-medium text-black text-sm after:content-['تومان'] after:text-xs after:text-black/60 after:mr-1">
                {e2p(sp(tour.price))}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="flex flex-wrap justify-center gap-2 mt-6">
    {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={`px-3 py-1 font-normal border rounded text-sm ${
          currentPage === index + 1
            ? "bg-green-500 text-white"
            : ""
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>
</div>

  );
}

export default MyToursPage;
