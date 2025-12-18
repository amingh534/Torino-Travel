"use client";
import React from "react";
import { useGetUserTransactions } from "src/components/core/services/queries";

function TransactionsPage() {
  const { data, isPending } = useGetUserTransactions();
  if (isPending) return <p>درحال بارگذاری...</p>;
  return (
    <div>
      <table className="table-auto grid mt-10 w-[872px] h-[569px] rounded-[10px] border border-[#00000033]">
        <thead >
          <tr className="flex justify-around items-center h-[55px] flex-row w-full rounded-t-[10px] bg-[#F3F3F3] font-normal text-base text-black">
            <th>تاریخ و ساعت</th>
            <th>مبلغ(تومان)</th>
            <th>نوع تراکنش</th>
            <th>شماره سفارش</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default TransactionsPage;
