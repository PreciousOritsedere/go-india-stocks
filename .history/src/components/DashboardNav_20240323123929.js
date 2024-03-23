import { useState } from "react";
import Image from "next/image";
import Arrow from "../../public/assets/right-arrow.svg"

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* Nav container */}
      <div
        className={`flex flex-col bg-blue-800 text-white fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ width: "15rem" }} // Adjust the width as necessary
      >
        {/* Your navigation links go here */}
        <a href="#" className="p-4 hover:bg-blue-700">Discussion Forum</a>
        {/* Repeat above line for each nav item */}
      </div>
      {/* Button container */}
      <div className={`transition-transform duration-300 ease-in-out ${isOpen && 'transform translate-x-[15rem]'}`}>
        <button
          className="z-30 m-2 p-2 text-white bg-slate-900 focus:outline-none  rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
         <Image src={}
        </button>
      </div>
     
    </div>
  );
}
