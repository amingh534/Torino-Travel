"use client";
import { DateAndTime } from "@/utils/dateConverter";
import { e2p, sp } from "@/utils/replaceNumbers";
import { useGetUserTransactions } from "src/components/core/services/queries";

function TransactionsPage() {
  const { data, isPending } = useGetUserTransactions();
  if (isPending) return <p>درحال بارگذاری...</p>;
  return (
    // <div>
    //   <table className="table-auto grid mt-10 w-[872px] h-[569px] rounded-[10px] border border-[#00000033]
    //   max-md:w-full">
    //     <thead>
    //       <tr className="flex justify-around items-center h-[55px] flex-row w-full rounded-t-[10px] bg-[#F3F3F3] *:font-normal *:text-base *:text-black">
    //         <th>تاریخ و ساعت</th>
    //         <th>مبلغ(تومان)</th>
    //         <th>نوع تراکنش</th>
    //         <th>شماره سفارش</th>
    //       </tr>
    //     </thead>
    //     <tbody className="mb-96">
    //       {data?.data?.map((transaction) => (
    //         <tr className="flex flex-row *:font-light *:text-lg gap-4 p-5 items-center justify-around  mb-auto">
    //           <td>{DateAndTime(transaction.createdAt)}</td>
    //           <td>{e2p(sp(transaction.amount))}</td>
    //           <td>{transaction.type}</td>
    //           <td >سفارش 12054902</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <div className="mt-10  max-w-[872px] mx-auto">
      {/* wrapper برای اسکرول موبایل */}
      <div className="rounded-[10px] border border-black/20  overflow-x-auto">
        <table
          className="
            w-full min-w-[700px] table-auto
          "
        >
          <thead>
            <tr className="h-[55px] bg-[#F3F3F3] text-center *:font-normal *:text-base">
              <th className="px-4">تاریخ و ساعت</th>
              <th className="px-4">مبلغ (تومان)</th>
              <th className="px-4">نوع تراکنش</th>
              <th className="px-4">شماره سفارش</th>
            </tr>
          </thead>

          <tbody>
            {data?.data?.map((transaction, index) => (
              <tr
                key={index}
                className="text-center *:py-4 *:px-4 *:font-light *:text-sm"
              >
                <td>{DateAndTime(transaction.createdAt)}</td>
                <td>{e2p(sp(transaction.amount))}</td>
                <td>{transaction.type}</td>
                <td>12054902</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsPage;
