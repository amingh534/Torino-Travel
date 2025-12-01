"use client";
import Logout from "@/public/icons/Logout";
import Profile from "@/public/icons/Profile";
import { setCookie } from "@/utils/cookie";
import { e2p } from "@/utils/replaceNumbers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useGetUserData } from "../core/services/queries";

function SignupDropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const { data } = useGetUserData();

  if (!data?.data) return null;

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = async () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);

    router.refresh();
    window.location.href = "/";
  };
  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-center font-medium items-center gap-x-1.5 rounded-md  px-3 py-2 text-lg  text-[#28A745] ring-1 ring-inset ring-white/5  transition"
      >
        <Profile />
        {e2p(data?.data?.mobile)}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          data-slot="icon"
          aria-hidden="true"
          className="-mr-1 size-5 text-black-400"
        >
          <path
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-2 mt-2 w-56 origin-top-right divide-y divide-black/10 rounded-xl bg-white backdrop-blur-none bg-opacity-100 shadow-lg ring-1 ring-black ring-opacity-5 transition-all ">
          <div>
            <Link
              href="#"
              className="flex items-center  px-4 py-3 font-medium text-base text-[#10411B] hover:bg-[#F4F4F4] gap-x-1.5 w-full h-full 
       rounded-t-xl transition "
            >
              <Profile />
              {e2p(data?.data?.mobile)}
            </Link>
          </div>
          <div>
            <Link
              href="/profile"
              className="flex items-center font-normal  px-4 py-3 text-sm text-black-300 hover:bg-[#F4F4F4] hover:text-black gap-x-1.5  w-full transition   "
              onClick={() => setOpen(false)}
            >
              <Profile />
              اطلاعات حساب کاربری
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="flex items-center font-normal  px-4 py-3 text-sm text-black-300 hover:bg-[#F4F4F4] hover:text-black gap-x-2  w-full  rounded-b-xl transition  "
              onClick={handleClick}
            >
              <Logout />
              خروج از حساب کاربری
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupDropdown;
