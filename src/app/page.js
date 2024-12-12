"use cilent";

import { DayCard } from "./card.jsx";
import { SearchIcon } from "./search.js";
export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="w-[1850px] h-[1500px] flex justify-center items-center">
        <div className="w-[800px] h-[1200px] bg-[#F3F4F6] justify-center flex">
          <div className="w-[567px] h-[80px] mt-[40px] bg-[#ffffff] rounded-[48px] flex justify-center items-center absolute">
            <SearchIcon />
            <input className="w-[455px] h-[44px] mt-[10px] " />
          </div>
          <div className="w-[414px] h-[832px] mt-[216px] bg-[#ffffff] rounded-[48px]">
            {" "}
            <DayCard />
          </div>
        </div>
        <div className="w-[800px] h-[1200px] bg-[#0f141e] flex justify-center">
          <div className="w-[414px] h-[832px] mt-[216px] bg-[#111827BF] rounded-[48px]"></div>
        </div>
        <div className="w-[100px] h-[100px] rounded-full bg-white    absolute"></div>
      </div>
    </div>
  );
}
