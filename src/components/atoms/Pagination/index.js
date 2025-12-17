"use client";
import { useMemo, useState } from "react";

function Pagination({ data }) {

  return (
    <div className="gap-4">
      <button
        className="border font-normal text-base rounded-xl text-white border-none w-[50px] h-[30px] bg-[#28A745]"
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        قبل
      </button>{" "}
      <span className="font-normal text-base">{page + 1}</span>
      <button
        className="border font-normal text-base rounded-xl text-white border-none w-[50px] h-[30px] bg-[#28A745]"
        onClick={() => {
          if (!isPreviousData && data.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.hasMore}
      >
        بعد
      </button>
      {isFetching ? <span> درحال بارگذاری...</span> : null}{" "}
    </div>
  );
}

export default Pagination;
