"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect } from "react";

function PaymentPage() {
//   const { getQuery } = useQuery();
//   const status = getQuery("status");
  if (status === "success")
    return (
      <div>
        <p>پرداخت شما با موفقیت انجام شد</p>
        <Link href="/profile/my-tours">برو به پروفایل</Link>
      </div>
    );
    // return (
    //   <div>
    //     <p>پرداخت انجام نشد</p>
    //   </div>
    // );
    console.log(status); 
    useEffect(() => {}, []);
    return <div>PaymentPage</div>;
}

export default PaymentPage;
