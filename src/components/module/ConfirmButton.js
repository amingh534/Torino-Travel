import React from "react";

function ConfirmButton({
  toast,
  setProfileData,
  profiledata,
  updateUser,
  setShowPersonalInfo,
}) {
  const { firstName, lastName, gender, birthDate, nationalCode } = profiledata;
  const handleEdit = (e) => {
    e.preventDefault();
    console.log("Updateuser:", updateUser);
    updateUser.mutate(
      {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthDate: birthDate,
        nationalCode: nationalCode,
      },
      {
        onSuccess: (response) => {
          const { data } = response;
          toast.success(data?.message);
          setShowPersonalInfo(false);
          setProfileData({
            email: data?.user?.email || "",
            firstName: data?.user?.firstName || "",
            lastName: data?.user?.lastName || "",
            fullName: `${data?.user?.firstName} ${data?.user?.lastName}`.trim(),
            gender: data?.user?.gender || "",
            birthDate: data?.user?.birthDate || "",
            nationalCode: data?.user?.nationalCode || "",
          });
        },
      }
    );
  };
  return (
    <div className="flex justify-end relative font-normal text-base bottom-1 space-x-5  gap-5 border-t-[1px] border-t-[#00000033] *:mt-2  *:w-[144px] *:h-[41px] *:rounded-md ">
      <button
        onClick={handleEdit}
        className="bg-[#28A745] text-[#FFFF] "
      >
        تایید
      </button>
      <button
        onClick={() => setShowPersonalInfo(false)}
        className=" border-[2px] border-[#28A745] text-[#28A745]"
      >
        انصراف
      </button>
    </div>
  );
}

export default ConfirmButton;
