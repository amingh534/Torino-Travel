"use client";

import { useGetUserTours } from "src/components/core/services/queries";

function MyToursPage() {
  const { data, isPending, isError } = useGetUserTours();
  if (isPending) return <div>درحال بارگذاری...</div>;
  console.log("UserToursData:", data, isPending, isError);
  return (
    <div className="flex flex-col mt-10 w-[872px] h-[569px] rounded-[10px] border border-[#00000033]">
      <div className="m-auto mt-4 ">
        {data?.data?.map((tour, index) => (
          <div
            className="w-[832px] h-[168px] mb-4 rounded-[10px] border border-[#00000033]"
            key={`${tour.id}-${index}`}
          >
            {tour.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyToursPage;
