
function ConfirmButton({
  setShowPersonalInfo,
}) {
  // const { firstName, lastName, gender, birthDate, nationalCode } = profiledata;
  const handleEdit = (data) => {
   console.log(data);
    
  };
  return (
    <div className="flex justify-end relative font-normal text-base bottom-1 space-x-5  gap-5 border-t-[1px] border-t-[#00000033] *:mt-2  *:w-[144px] *:h-[41px] *:rounded-md ">
      <button
      type="submit"
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
