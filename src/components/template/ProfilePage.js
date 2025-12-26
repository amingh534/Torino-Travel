import Mytours from "@/public/icons/Mytours";
import Profile from "@/public/icons/Profile";
import Transaction from "@/public/icons/Transaction";
import Link from "next/link";

function ProfilePage({ children }) {
  return (
    <div
      className="flex justify-center  gap-x-6 mt-10 mb-20 
      max-lg:flex-col
      max-md:flex
  max-md:flex-col 
  max-w-[1440px] 
  mx-auto "
    >
      <ul
        className="flex flex-col mt-10 justify-evenly
    font-['Yekan_Bakh'] text-lg
    divide-y
    divide-black/10
    h-full
    rounded-[10px]
    border border-[#00000033]
    w-[284px]
    max-lg:flex-row
    max-lg:w-full
    max-lg:border-none
    max-lg:divide-y-0
    max-lg:h-[70px]
    max-h-[170px]
    max-md:flex-row
  max-md:w-full
  max-md:justify-around
  max-md:rounded-none
  max-md:divide-none
  max-md:border-none
 
  "
      >
        <li
          className="
inline-flex items-center p-2
md:hover:bg-[#28A74540]
md:hover:text-[#28A745]
md:hover:rounded-t-[9px]


max-md:hover:text-[#28A745]
"
        >
          <Profile />
          <Link className="pr-3 " href="/profile">
            پروفایل
          </Link>
        </li>

        <li
          className="
inline-flex items-center p-2
md:hover:bg-[#28A74540]
md:hover:text-[#28A745]
max-md:hover:border-b-2
max-md:hover:border-[#28A745]
max-md:hover:text-[#28A745]
"
        >
          <Mytours className="inline-block align-middle" />
          <Link className=" pr-3" href="/profile/mytours">
            تور های من
          </Link>
        </li>
        <li
          className="
inline-flex items-center p-2
md:hover:bg-[#28A74540]
md:hover:text-[#28A745]
md:hover:rounded-b-[9px]
max-md:hover:text-[#28A745]


"
        >
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
