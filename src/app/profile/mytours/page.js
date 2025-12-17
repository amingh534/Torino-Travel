"use client";

import { useMemo, useState } from "react";
import { useGetUserTours } from "src/components/core/services/queries";

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
  // console.log("UserToursData:", data, isPending, isError);
  return (
    <div className="flex flex-col mt-10 w-[872px] h-[569px] rounded-[10px] border border-[#00000033]">
      <div className="m-auto mt-4 ">
        {currentItems?.map((tour, index) => (
          <div
            className="w-[832px] h-[168px] mb-4 rounded-[10px] border border-[#00000033]"
            key={`${tour.id}-${index}`}
          >
            {tour.title}
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
