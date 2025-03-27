"use client";
import { use, useEffect, useState } from "react";
import { Card } from "./card.jsx";
import { SearchInput } from "./searchInput.jsx";
import Image from "next/image.js";
// import { ComboboxDemo } from "./autoCompleteSearchBox.jsx";
const API_KEY = "eb7323f19ada4471b0072607241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("London");
  const [dayWeather, setDayWeather] = useState({
    tempDay: 0,
    condition: "",
    city: "",
    lastUpdated: "",
  });
  const [nightWeather, setNightWeather] = useState({
    tempDay: 0,
    condition: "",
    city: "",
    lastUpdated: "",
  });
  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
  const onKeyDown = (event) => {
    if (event.code === "Enter") {
      setCity(search);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.forecast.forecastday[0].day.maxtemp_c);
        // console.log(data.forecast.forecastday[0].day.condition.text);
        // console.log(data.current.last_updated);
        // console.log(data.location.name);
        setDayWeather({
          tempDay: Math.floor(data.forecast.forecastday[0].day.maxtemp_c),
          condition: data.forecast.forecastday[0].day.condition.text,
          city: data.location.name,
          lastUpdated: data.current.last_updated,
        });
        setNightWeather({
          tempDay: Math.floor(data.forecast.forecastday[0].day.mintemp_c),
          condition: data.forecast.forecastday[0].hour[0].condition.text,
          city: data.location.name,
          lastUpdated: data.current.last_updated,
        });
      });
  }, [city]);

  return (
    <div className="w-[100rem] flex m-auto bg-white relative justify-center items-center overflow-hidden">
      <div className="w-[50rem] h-[75rem] bg-[#F3F4F6]">
        <SearchInput
          search={search}
          onChangeText={onChangeText}
          onKeyDown={onKeyDown}
        />
        {/* <ComboboxDemo /> */}
        <Card weather={dayWeather} city={city} />
      </div>
      <div className="w-[50rem] h-[75rem] rounded-lg relative bg-[#F3F4F6]">
        <Card weather={nightWeather} city={city} value="night" />

        <div className="w-full h-[550px] rounded-bl-[80px] bg-[#0F141E]"></div>
        <div className="w-[46.89rem] h-[100px] ml-[50px] bg-[#0F141E]"></div>
        <div className="w-full h-[550px] rounded-tl-[80px] bg-[#0F141E]"></div>

        <div className="h-[180px] w-[90px] bg-[#0F141E] absolute top-[500px] left-[40px]"></div>
      </div>
      <div className="rounded-full size-[145px] absolute z-[3] bg-[#F3F4F6] ">
        <div className="flex justify-center gap-[16px] content-center mt-[30px] ml-[10px] ">
          <div className="logoLeft">
            <svg
              width="43"
              height="86"
              viewBox="0 0 43 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z"
                fill="#111111"
              />
            </svg>
          </div>
          <div className="logoRight">
            <svg
              width="44"
              height="86"
              viewBox="0 0 44 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.7442 32.882L27.1599 7.58993C24.6554 2.91778 19.7591 0 14.43 0H0V7.16486H0.00510914C2.66726 7.16486 5.11563 8.62166 6.36732 10.9572L19.9469 36.2543C21.0827 38.3633 21.647 40.679 21.647 42.9999C21.647 45.3211 21.0827 47.6368 19.9469 49.7454L6.36732 75.0423C5.11563 77.3783 2.66726 78.8345 0.00510914 78.8345H0V85.9999H14.43C19.7591 85.9999 24.6554 83.0821 27.1599 78.41L40.7442 53.1177C42.4388 49.9526 43.2889 46.4785 43.2889 42.9999C43.2889 39.5211 42.4388 36.0475 40.7442 32.882Z"
                fill="#111111"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="rounded-tl-full rounded-bl-full rounded-r-none  border h-[147px] w-[77px] mr-[70px] absolute"></div>

      <div className="size-[340px] rounded-full  opacity-[12%] absolute border-[#535353] border-[1px]"></div>
      <div className="size-[540px] rounded-full  opacity-[12%] absolute border-[#535353] border-[1px]"></div>
      <div className="size-[940px] rounded-full  opacity-[12%]  absolute border-[#535353] border-[1px]"></div>
      <div className="size-[1340px] rounded-full opacity-[12%] absolute border-[#535353] border-[1px]"></div>
      <div className="size-[1740px] rounded-full opacity-[12%] absolute border-[#535353] border-[1px]"></div>
      <div className="absolute mt-[-48rem] ml-[-76rem]">
        <Image
          alt="ellipse"
          width={176}
          height={176}
          src={"/yellowEllipse.png"}
          className="drop-shadow-[0px_15px_45px_rgba(255,255,255,0.3)]"
        />
      </div>
      <div className="absolute mb-[-55rem] mr-[-74rem]">
        <Image
          alt="ellipse"
          width={176}
          height={176}
          src={"/nightEllipse.png"}
          className="drop-shadow-[-3px_-15px_45px_rgba(255,255,255,0.2)]"
        />
      </div>
    </div>
  );
}
