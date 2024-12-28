"use client";
import { useRouter } from "next/navigation";
import { useGetUserData } from "../../core/services/queries";
import { useEffect } from "react";

function AutProvider({ children }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();
  useEffect(() => {
    if (!isPending && !data?.data) router.push("/");
  }, [isPending]);
  if (isPending)
    return (
      <p className="min-h-[1000px] w-[70px] m-auto h-[70px] text-green-600">
        درحال بارگذاری
      </p>
    );

  return children;
}

export default AutProvider;
