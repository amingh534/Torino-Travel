"use client";
import { Toaster } from "react-hot-toast";
import {
  useGetUserData,
 
} from "src/components/core/services/queries";
import BankAccountForm from "@/template/bankAccountFrom";
import PersonalInfoFrom from "@/template/personalInfoForm";
import EmailForm from "@/template/EmailForm";

function ProfilePage() {

 
  // const [profiledata, setProfileData] = useState({
  //   email: "",
  //   firstName: "",
  //   lastName: "",
  //   gender: "",
  //   birthDate: "",
  //   nationalCode: "",
  //   payment: {
  //     shaba_code: "",
  //     debitCard_code: "",
  //     accountIdentifier: "",
  //   },
  // });

  // let userValidate = bankAccountSchema.validate({});

  // console.log("UserValidate:", userValidate);

  // console.log("Mobile Number:",mobile);
  // const { isPending, mutate } = useCheckOtp();
  // if (isPending) return;
  // mutate({ mobile }, { onSuccess: (data) => console.log(data) });

  const { data: userResponse } = useGetUserData();
  const user = userResponse?.data;
  // const updateUser = usePutUserData();
  // console.log("PutData:", updateUser);
  // console.log("ProfileData:", profiledata);
  // console.log("User:", user);
  // useEffect(() => {
  //   if (user) {
  //     setProfileData({
  //       email: user.email,
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       fullName: `${user.firstName} ${user.lastName}`.trim(),
  //       gender: user.gender,
  //       birthDate: user.birthDate,
  //       nationalCode: user.nationalCode,
  //     });
  //   }
  // }, [user]);

  return (
    <div className="flex flex-col mt-10 gap-6">
      <div className="grid border border-[#00000033] rounded-[10px] w-[872px] h-[115px]  max-md:h-[169px] ax-md:flex
  max-md:flex-col 
  max-md:mt-0
  max-md:max-w-[90%]
  mx-auto ">
        <h1 className="p-3 font-normal text-base ">اطلاعات حساب کاربری</h1>
        <EmailForm data={user}/>
      </div>
      <div className="grid border border-[#00000033] rounded-[10px] w-[872px] h-[240px] max-md:h-[251px] ax-md:flex
  max-md:flex-col 
  max-md:mt-0
  max-md:max-w-[90%]
  mx-auto ">
        <div className="flex justify-between w-full">
          <h1 className="mr-3 mt-3 font-normal text-base text-[#000000]">
            اطلاعات شخصی
          </h1>
        </div>
        <PersonalInfoFrom
          data={user}
        />
      </div>
      <BankAccountForm
        data={user}
      />
      <Toaster />
    </div>
  );
}

export default ProfilePage;
