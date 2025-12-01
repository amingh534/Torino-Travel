import { useEffect } from "react";


function EmailInput({
  name,
  profiledata,
  setProfileData,
  setShowEmail,
  updateUser,
  toast,
}) {
  // useEffect(() => {
  //   if (profiledata?.email) {
  //     setProfileData((prev) => ({
  //       ...prev,
  //       email: prev.email ?? profiledata.email,
  //     }));
  //   }
  // }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };
  const handleEdit = (e) => {
    e.preventDefault();

    updateUser.mutate(
      { email: profiledata.email },
      {
        onSuccess: (res) => {
          toast.success(res.data.message);
          setProfileData((prev) => ({ ...prev, email: res.data.user.email }));
          setShowEmail(false);
        },
      }
    );
  };

  return (
    <div>
      <input
        className=" ml-2 p-2 w-[255px] h-[45px] rounded-md text-[#00000080] border border-[#00000033] outline-none"
        placeholder="آدرس ایمیل"
        name={name}
        value={profiledata[name] ?? ""}
        onChange={handleChange}
      />
      <button
        className="ml-[26px] mb-[21px] bg-[#28A745] w-[122px] h-[45px] rounded-[5px] font-light text-base text-[#FFFF] text-center"
        onClick={handleEdit}
      >
        تایید
      </button>
    </div>
  );
}

export default EmailInput;
