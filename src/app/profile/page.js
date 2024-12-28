// "use client"
// import { useCheckOtp } from "@/src/components/core/services/mutation";

function ProfilePage({ mobile }) {
  // const { isPending, mutate } = useCheckOtp();
  // if (isPending) return;
  // mutate({ mobile }, { onSuccess: (data) => console.log(data) });
  return (
    <div>
      <h1>Profile{mobile}</h1>
    </div>
  );
}

export default ProfilePage;
