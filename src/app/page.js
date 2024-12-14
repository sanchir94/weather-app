"use client";

import { Card } from "./card.jsx";
import { SearchInput } from "./SearchInput.js";
import { Sircles } from "./sircles.jsx";
import Image from "next/image.js";
import { useState } from "react";
const API_KEY = "b661e6298a1c46fe8f272956241312";

export default function Home() {
  const [search, setSearch] = useState("");

  const [city, setCite] = useState("");

  const onChangeText = (event) => {
    setSearch(event.target.value);
  };

  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCite(search);
    }
  };

  console.log(search);
  return (
    <div className="w-[100%] h-screen flex justify-center items-center overflow-hidden relative">
      <div className="w-[50%] h-[100%] bg-[#F3F4F6] justify-center flex">
        <div className="w-[567px] h-[80px] mt-[40px] bg-[#ffffff] rounded-[48px] flex justify-center items-center absolute z-[3]">
          <SearchInput
            search={search}
            onChangeText={onChangeText}
            onPressEnter={onPressEnter}
          />
          <input className="w-[455px] h-[44px] mt-[6px] " />
        </div>
        <div className="w-[414px] h-[832px] mt-[216px] bg-[#ffffff] rounded-[48px] z-[3]">
          <Card value="day" temperature={12} condition={"Sunny"} />
        </div>
      </div>
      <div className="w-[50%] h-[100%]  bg-[#0f141e] flex justify-center">
        <div className="w-[414px] h-[832px] mt-[216px] bg-[#111827BF] rounded-[48px] flex   z-[3]">
          <Card value="night" temperature={12} condition={"Sunny"} />
        </div>
      </div>
      <div className="w-[100px] h-[100px] rounded-full bg-white    absolute"></div>
      <Sircles />
    </div>
  );
}
