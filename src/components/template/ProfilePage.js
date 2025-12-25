import Mytours from "@/public/icons/Mytours";
import Profile from "@/public/icons/Profile";
import Transaction from "@/public/icons/Transaction";
import Link from "next/link";

function ProfilePage({ children }) {
  return (
    <div
      className="flex justify-center  gap-x-6 mt-10 mb-20 
      max-md:flex
  max-md:flex-col 
  max-w-[1440px] 
  mx-auto"
    >
      <ul
        className="flex flex-col mt-10 justify-evenly
   bg-[#F5F5F5]
    font-['Yekan_Bakh'] text-lg
    divide-y
    divide-black/10
    h-full
    rounded-[10px]
    border border-[#00000033]
    w-[284px]
    max-h-[170px]
    max-md:flex-row
  max-md:w-full
  max-md:justify-around
  max-md:rounded-none
  max-md:divide-none
 
  
  "
      >
        <li
          className="inline-flex  max-md:hover:border-b-2 max-md:border-b-[#28A745]  p-2 
  hover:bg-[#28A74540]
  hover:text-[#28A745]
  md:hover:rounded-t-[9px]"
        >
          <Profile />
          <Link className="pr-3 " href="/profile">
            پروفایل
          </Link>
        </li>

        <li className="inline-flex max-md:hover:underline  p-2 hover:bg-[#28A74540]  hover:text-[#28A745]">
          <Mytours className="inline-block align-middle" />
          <Link className=" pr-3" href="/profile/mytours">
            تور های من
          </Link>
        </li>
        <li className="inline-flex max-md:hover:underline p-2 hover:rounded-b-[9px]  hover:bg-[#28A74540] hover:text-[#28A745]">
          <Transaction />
          <Link className="pr-3" href="/profile/transactions">
            تراکنش ها
          </Link>
        </li>
      </ul>
      <main className="min-h-[1000px]">{children}</main>
    </div>
  );
}

export default ProfilePage;
