import { useState } from "react";

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="absolute top-0 left-0 z-30 m-2 p-2 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Replace with an appropriate icon or text */}
        {isOpen ? "Close" : "Menu"}
      </button>
     
    </div>
  );
}
