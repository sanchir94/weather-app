"use cilent";
import { Card } from "./card.jsx";
import { SearchIcon } from "./search.js";
import { Sircles } from "./sircles.jsx";
export default function Home() {
  return (
    <div className="w-[100%] h-screen flex justify-center items-center overflow-hidden relative">
      <div className="w-[50%] h-[100%] bg-[#F3F4F6] justify-center flex">
        <div className="w-[567px] h-[80px] mt-[40px] bg-[#ffffff] rounded-[48px] flex justify-center items-center absolute z-[3]">
          <SearchIcon />
          <input className="w-[455px] h-[44px] mt-[6px] " />
        </div>
        <div className="w-[414px] h-[832px] mt-[216px] bg-[#ffffff] rounded-[48px] z-[3]">
          <Card />
        </div>
      </div>
      <div className="w-[50%] h-[100%]  bg-[#0f141e] flex justify-center">
        <div className="w-[414px] h-[832px] mt-[216px] bg-[#111827BF] rounded-[48px] flex   z-[3]">
          <Card value="day" temperature={12} condition={"Sunny"} />
        </div>
      </div>
      <div className="w-[100px] h-[100px] rounded-full bg-white    absolute"></div>
      <Sircles />
    </div>
  );
}
