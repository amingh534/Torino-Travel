import Mytours from "@/public/icons/Mytours";
import Profile from "@/public/icons/Profile";
import Transaction from "@/public/icons/Transaction";
import AutProvider from "@/src/components/partials/provider/AutProvider";
import Footer from "@/src/components/template/Footer";
import Header from "@/src/components/template/Header";
import Link from "next/link";

function ProfileLayout({ children }) {
  return (
    <>
      <Header />
      <AutProvider>
        <div className="grid grid-cols-2 ">
          {/* <Layout> */}

          <ul className="grid grid-flow-row col-span-1   divide-y font-['Yekan_Bakh'] font-normal text-lg mt-10  mr-[126px] w-[284px] h-[170px]  rounded-[10px] border border-[#00000033]">
            <li className="inline-flex p-2   hover:bg-[#28A74540] hover:rounded-t-[9px] hover:text-[#28A745]  ">
              <Profile />
              <Link className="pr-3 " href="/profile">
                پروفایل
              </Link>
            </li>

            <li className="inline-flex  p-2 hover:bg-[#28A74540]  hover:text-[#28A745]">
              <Mytours className="inline-block align-middle" />
              <Link className=" pr-3" href="/profile/mytours">
                تور های من
              </Link>
            </li>
            <li className="inline-flex p-2 hover:rounded-b-[9px]  hover:bg-[#28A74540] hover:text-[#28A745]">
              <Transaction />
              <Link className="pr-3" href="/profile/transactions">
                تراکنش ها
              </Link>
            </li>
          </ul>
          <main className="min-h-[1000px]">{children}</main>
          {/* </Layout> */}
        </div>
      </AutProvider>
      <Footer />
    </>
  );
}
export default ProfileLayout;
