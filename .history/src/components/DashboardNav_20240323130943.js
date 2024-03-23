import { useState } from "react";
import Image from "next/image";
import Arrow from "../../public/assets/right-arrow.svg";
import User from "../../public/assets/user.svg";
import Notification from "../../public/assets/notification.svg";
import Chat from "../../public/assets/chatsvg.svg";
import Coin from "../../public/assets/coin.svg";

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex items-center">
      <section
        className={`flex flex-col bg-slate-900 text-white fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
        style={{ width: "15rem" }}
      >
        <div className="w-full flex items-center justify-between py-3 px-6 border-b border-b-current">
          <div className="flex items-center gap-2.5">
            <Image src={User} alt="user icon" />
            <p>Hello Sam</p>
          </div>
          <Image src={Notification} alt="notification icon" />
        </div>

        <section className="flex flex-col gap-2 py-3">
          <div className=" flex items-center gap-2 p-4 bg-transparent hover:bg-slate-800 cursor-pointer">
            <Image src={Chat} alt="chat icon" />
            <p>Discussion Forum</p>
          </div>
          <div className=" flex items-center gap-2 p-4 bg-transparent hover:bg-slate-800 cursor-pointer">
            <Image src={Coin} alt="chat icon" />
            <p>Market Stories</p>
          </div>
          <div className=" flex items-center gap-2 p-4 bg-transparent hover:bg-slate-800 cursor-pointer">
            <Image src={Coin} alt="chat icon" />
            <p>Sentiment</p>
          </div>
          <div className=" flex items-center gap-2 p-4 bg-transparent hover:bg-slate-800 cursor-pointer">
            <Image src={Coin} alt="chat icon" />
            <p>Market</p>
          </div>
          <div className=" flex items-center gap-2 p-4 bg-transparent hover:bg-slate-800 cursor-pointer">
            <Image src={Coin} alt="chat icon" />
            <p>Sector</p>
          </div>
          <div className=" flex items-center gap-2 p-4 bg-transparent hover:bg-slate-800 cursor-pointer">
            <Image src={Coin} alt="chat icon" />
            <p>Watchlist</p>
          </div>
        </section>
      </section>

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
