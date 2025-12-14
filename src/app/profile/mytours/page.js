"use client";

import { useGetUserTours } from "src/components/core/services/queries";

function MyToursPage() {
  const { data, isPending, isError } = useGetUserTours();
  if (isPending) return <div>درحال بارگذاری...</div>;
  console.log("UserToursData:", data, isPending, isError);
  return (
    <div>
      <h1>MyToursPage</h1>
      {data?.data?.map((tour,index) => (
        <p key={`${tour.id}-${index}`}>{tour.title}</p>
      ))}
    </div>
  );
}

export default MyToursPage;
