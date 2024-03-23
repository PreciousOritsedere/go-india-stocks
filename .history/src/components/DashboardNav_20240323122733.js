import { useState } from "react";

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center">
     <div
        className={`bg-blue-800 text-white fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col`}
        style={{ width: "15rem" }} // Adjust the width as necessary
      >
        {/* Your navigation links go here */}
        <a href="#" className="p-4 hover:bg-blue-700">
          Discussion Forum
        </a>
        {/* Repeat above line for each nav item */}
      </div>
      <button
        className=" z-30 m-2 p-2 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Replace with an appropriate icon or text */}
        {isOpen ? "Close" : "Menu"}
      </button>
     
    </div>
  );
}
