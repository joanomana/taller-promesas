"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import All from "@/components/All";
import Race from "@/components/Race";
import Any from "@/components/Any";
import Conclusion from "@/components/Conclusion";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("Race");
  const pages = {
    Race: <Race />,
    Any: <Any />,
    All: <All />,
    Conclusion: <Conclusion />,
  };


  const pageKeys = Object.keys(pages);
  const currentIndex = pageKeys.indexOf(selectedPage);


  const nextPage = () => {
    const nextIndex = (currentIndex + 1) % pageKeys.length;
    setSelectedPage(pageKeys[nextIndex]);
  };


  const prevPage = () => {
    const prevIndex = (currentIndex - 1 + pageKeys.length) % pageKeys.length;
    setSelectedPage(pageKeys[prevIndex]);
  };

  return (
    <div className="bg-blue-400 h-full flex flex-col items-center pt-20 gap-15  ">
      <h1 className="text-5xl font-bold bg-amber-400 p-5 rounded-lg shadow-xl">💻Taller de promesas - Javascript</h1>
      <div>
        <h1 className="font-bold text-3xl ">Realiado por Joan Omaña Y Isaac Medina</h1>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={prevPage} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 mx-4">
          <FaChevronLeft size={24} />
        </button>
        <div className="flex flex-col bg-white pt-8 px-5 my-10 pb-10 rounded-lg shadow min-w-[300px] text-center ">
          {pages[selectedPage]}
        </div>
        <button onClick={nextPage} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 mx-4">
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
