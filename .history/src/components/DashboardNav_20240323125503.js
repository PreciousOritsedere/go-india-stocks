import { useState } from "react";
import Image from "next/image";
import Arrow from "../../public/assets/right-arrow.svg";
import User from "../../public/assets/user.svg";
import Notification from "../../public/assets/notification.svg";

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex items-center">
      {/* Nav container */}
      <section
        className={`flex flex-col bg-blue-800 text-white fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
        style={{ width: "15rem" }}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image src={User} alt="user icon" />
            <hp>Hello Sam</hp>
          </div>
        </div>
        {/* Your navigation links go here */}
        <a href="#" className="p-4 hover:bg-blue-700">
          Discussion Forum
        </a>
        {/* Repeat above line for each nav item */}
      </section>
      {/* Button container */}
      <div
        className={`flex items-center justify-center p-2 h-[100px] text-white bg-slate-900 focus:outline-none transition-transform duration-300 ease-in-out ${
          isOpen && "transform translate-x-[15rem] z-50"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={Arrow} alt="arrow icon" />
      </div>
    </main>
  );
}
