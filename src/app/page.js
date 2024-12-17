"use client";

import Image from "next/image.js";
import { WeatherCard } from "./card.jsx";
import { FooterButtons } from "./button.jsx";
import { Logo } from "./logo.jsx";
import { useEffect, useState } from "react";
import { Sircles } from "./sircles.jsx";
import { SearchInput } from "./SearchInput.js";
import { WeatherImgs } from "./weather-img.jsx";

const API_KEY = "b661e6298a1c46fe8f272956241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [DayWeather, setDayWeather] = useState({});
  const [NightWeather, setNigthWeather] = useState({});
  const [Date, setDate] = useState("");
  const onChangeText = (event) => {
    setSearch(event.target.value);
  };
  const keyDown = (e) => {
    if (e.code == "Enter") {
      setCity(search);
    }
  };

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDate(data.forecast.forecastday[0].date);
        setDayWeather({
          temp: data.forecast.forecastday[0].day.maxtemp_c,
          condition: data?.forecast?.forecastday[0]?.day.condition.text
            .trim()
            .toLowerCase(),
        });
        setNigthWeather({
          temp: data.forecast.forecastday[0].hour[4].temp_c,
          condition: data.forecast.forecastday[0].hour[4].condition.text
            .trim()
            .toLowerCase(),
        });
      });
  }, [city]);

  return (
    <div className="w-full  h-screen flex  justify-center items-center relative rounded-[30px] overflow-hidden">
      <div className="w-[50%] h-[100%] bg-[#F3F4F6] flex justify-center">
        <div className="bg-white h-[80px] w-[587px] absolute flex justify-center items-center rounded-[48px] gap-[16px] mt-[40px] z-[2] ">
          <SearchInput
            keyDown={keyDown}
            search={search}
            onChangeText={onChangeText}
          />
        </div>
        <div className=" w-[414px] h-[828px] mt-[216px] mb-[193px] bg-[#FFFFFF] rounded-[48px] z-[3]">
          <div className="flex  flex-col ml-[48px]">
            <WeatherCard city={city} date={Date} />
            <WeatherImgs DayWeather={DayWeather} />
            <div className="text-[130px]">{Math.round(DayWeather.temp)}°</div>
            <div className="text-[24px] text-[#FF8E27] font-bold">
              {DayWeather.condition}
            </div>
            <FooterButtons />
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100%] bg-[#F3F4F6] flex flex-col items-center">
        <div className="w-[100%] h-[49%] bg-[#0F141E] relaitve rounded-bl-[32px] "></div>
        <div className="w-[100%] h-[12%] bg-[#0F141E] relaitve"></div>
        <div className="w-[100%] h-[49%] bg-[#0F141E] relaitve rounded-tl-[32px] "></div>
        <div className="w-[414px] h-[828px] mt-[216px] mb-[193px] bg-[#111827] rounded-[48px] z-[3] absolute ">
          <div className="flex  flex-col ml-[48px]">
            <WeatherCard city={city} date={Date} />
            <WeatherImgs DayWeather={NightWeather} value={"night"} />

            <div className="text-[130px]">{Math.round(NightWeather.temp)}°</div>
            <div className="text-[24px] text-[#777CCE] font-bold">
              {NightWeather.condition}
            </div>
            <FooterButtons />
          </div>
        </div>
      </div>
      <Logo />
      <Sircles />
      <div className="absolute mb-[32%] mr-[69%] flex z-[2]">
        <Image
          alt="ellipse"
          width={176}
          height={176}
          src={"/yellow.png"}
          className="drop-shadow-[0px_15px_45px_rgba(255,255,255,0.3)]"
        />
      </div>
      <div className=" z-[2] absolute flex mt-[40%] ml-[69%]">
        <Image
          alt="ellipse"
          width={128}
          height={128}
          src={"/purple.png"}
          className="drop-shadow-[-3px_-15px_45px_rgba(255,255,255,0.2)]"
        />
      </div>
    </div>
  );
}
