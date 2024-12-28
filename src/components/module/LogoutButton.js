import Exit from "@/public/icons/Exit";

function LogoutButton() {
  return (
    <button onClick={signoutHandler}>
      <Exit />
      <span className=" font-[Yekan_Bakh] size-[14px] text-[#D40000]">خروج از حساب کاربری</span>
    </button>
  );
}

export default LogoutButton;
