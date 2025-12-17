"use client";

import { icons } from "@/lib/constants";
import { Sunfog } from "@/public/icons/SunFog";
import { useMemo, useState } from "react";
import { useGetUserTours } from "src/components/core/services/queries";
import DateConverter from "@/utils/dateConverter";
import { e2p, sp } from "@/utils/replaceNumbers";

function MyToursPage() {
  const { data, isPending, isError } = useGetUserTours();
  console.log(data);
  const tours = data?.data || [];
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return tours.slice(start, start + itemsPerPage);
  }, [currentPage, tours]);

  const totalPages = Math.ceil(tours.length / itemsPerPage);

  if (isPending) return <div>درحال بارگذاری...</div>;
  // console.log("UserToursData:", data, isPending, isError);
  return (
    <div className="flex flex-col mt-10 w-[872px] h-[569px] rounded-[10px] border border-[#00000033]">
      <div className="m-auto mt-4 ">
        {currentItems?.map((tour, index) => (
          <div
            className="w-[832px] h-[168px] mb-4 rounded-[10px] border border-[#00000033]"
            key={`${tour.id}-${index}`}
          >
            <div className="flex flex-col  ">
              <div className="flex p-3 flex-row">
                <Sunfog />
                <h1 className="mr-1 font-medium text-sm text-black">
                  {tour.title}
                </h1>
                {icons[tour.fleetVeichle]}
                <p className="m-auto font-medium text-sm text-black">
                  سفر با {tour.fleetVehicle}
                </p>
              </div>
              <div className="flex p-5 font-medium text-black text-sm ">
                <div className="flex">
                  <h2 className="font-medium text-black text-sm">
                    {tour.origin.name} به {tour.destination.name}
                  </h2>
                  <span className="mr-3 text-[#00000099] font-normal text-sm ">
                    {DateConverter(tour.startDate)}
                  </span>
                </div>
                <div className="flex m-auto">
                  <h2 className="font-medium text-black text-sm">
                    تاریخ برگشت
                  </h2>
                  <span className="mr-3 text-[#00000099] font-normal text-sm">
                    {DateConverter(tour.endDate)}
                  </span>
                </div>
              </div>
              <div className="flex flex-row p-4 border-t border-[#00000033]">
                <div className="flex mr-2 ">
                  <p className="text-[#00000099] font-normal text-sm">
                    شماره تور
                  </p>
                  <span className="font-normal mr-3">10209544</span>
                   <span className="border-l-[1px] border-[#00000033] mx-7 h-7"></span>
                </div>
                <div className="flex mr-5">
                  <p className="text-[#00000099] font-normal text-sm">
                    مبلغ پرداخت شده{" "}
                  </p>
                  <span className="font-normal mr-3 after:content-['تومان'] after:text-[#00000099] after:text-xs after:font-normal after:mr-1 ">
                    {e2p(sp(tour.price))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded font-normal text-base ${
              currentPage === index + 1 ? "bg-green-500 text-white" : ""
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
