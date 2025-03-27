import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
export function Card({ value, city, weather }) {
  const nightColor =
    "bg-gradient-to-t from-[#111827] from-0% to-[#1F2937] to-200%";
  const dayColor =
    "bg-gradient-to-t from-[#F9FAFB00] from-200% to-[#F9FAFB] to-0%";
  const marginTopNight = "mt-[13.5rem]";
  const marginTopDay = "mt-[6rem]";
  const color = value === "night" ? nightColor : dayColor;
  const marginTop = value === "night" ? marginTopNight : marginTopDay;

  const imgSun = "/Sun.png";
  const imgRain = "/Rain.png";
  const imgStorm = "/storm.png";
  const imgSnow = "/snow.png";
  const imgWind = "/Wind.png";
  const imgCloud = "/Clouds.png";
  const imgNightRain = "/nightRain.png";
  const imgNightStorm = "/nightStorm.png";
  const imgNightSnow = "/nightSnow.png";
  const imgNightWind = "/nightWind.png";
  const imgNightMoon = "/nightMoon.png";
  const imgNightCloud = "/nightClouds.png";

  let imgSource = imgSun;
  const conditionText = weather.condition;

  if (value == "night") {
    if (conditionText == "Clear ") {
      imgSource = imgNightMoon;
    } else if (conditionText == "Partly Cloudy ") {
      imgSource = imgNightCloud;
    } else if (conditionText == "Cloudy " || conditionText == "Overcast ") {
      imgSource = imgNightCloud;
    } else if (conditionText == "Patchy rain nearby") {
      imgSource = imgNightRain;
    } else if (
      conditionText == "Rain showers" ||
      conditionText == "Light rain" ||
      conditionText == "Moderate rain" ||
      conditionText == "Heavy rain" ||
      conditionText == "Light rain shower"
    ) {
      imgSource = imgNightRain;
    } else if (conditionText == "Thunderstorm") {
      imgSource = imgNightStorm;
    } else if (
      conditionText == "Snow showers" ||
      conditionText == "Light snow" ||
      conditionText == "Moderate snow" ||
      conditionText == "Heavy snow"
    ) {
      imgSource = imgNightSnow;
    } else if (conditionText == "Sleet") {
      imgSource = imgNightSnow;
    } else if (conditionText == "Hail") {
      imgSource = imgNightStorm;
    } else if (conditionText == "Windy" || conditionText == "Blustery") {
      imgSource = imgNightWind;
    } else if (conditionText == "Mist" || conditionText == "Fog") {
      imgSource = imgNightCloud;
    }
  } else {
    if (conditionText == "Clear") {
      imgSource = imgSun;
    } else if (conditionText == "Partly Cloudy ") {
      imgSource = imgCloud;
    } else if (conditionText == "Cloudy " || conditionText == "Overcast ") {
      imgSource = imgCloud;
    } else if (conditionText == "Patchy rain nearby") {
      imgSource = imgRain;
    } else if (
      conditionText == "Rain showers" ||
      conditionText == "Light rain" ||
      conditionText == "Moderate rain" ||
      conditionText == "Heavy rain"
    ) {
      imgSource = imgRain;
    } else if (conditionText == "Thunderstorm") {
      imgSource = imgStorm;
    } else if (
      conditionText == "Snow showers" ||
      conditionText == "Light snow" ||
      conditionText == "Moderate snow" ||
      conditionText == "Heavy snow" ||
      conditionText == "Moderate or heavy snow showers"
    ) {
      imgSource = imgSnow;
    } else if (conditionText == "Sleet") {
      imgSource = imgSnow;
    } else if (conditionText == "Hail") {
      imgSource = imgStorm;
    } else if (conditionText == "Windy" || conditionText == "Blustery") {
      imgSource = imgWind;
    } else if (conditionText == "Mist" || conditionText == "Fog") {
      imgSource = imgCloud;
    }
  }

  const cityTextDay = "text-[#111827]";
  const cityTextNight = "text-[#fff]";
  const cityTextColor = value === "night" ? cityTextNight : cityTextDay;

  const degreeTextColorNight =
    "bg-gradient-to-t from-[#F9FAFB00] from-0% to-[#F9FAFB] to-100%";
  const degreeTextColorDay =
    "bg-gradient-to-t from-[#6B7280] from-0% to-[#111827] to-600%";
  const degreetextColor =
    value === "night" ? degreeTextColorNight : degreeTextColorDay;

  const moodTextColorNight = "text-[#777CCE]";
  const moodTextColorDay = "text-[#FF8E27]";
  const moodTextColor =
    value === "night" ? moodTextColorNight : moodTextColorDay;

  const locationColorDay = "opacity-50";
  const locationColorNight = "text-[#fff] opacity-50";
  const locationColor =
    value === "night" ? locationColorNight : locationColorDay;

  return (
    <div
      className={`w-[26rem] h-[52rem] ${color} mx-auto ${marginTop} rounded-[2rem] bg-blur-[200px] absolute left-[12rem] z-[10] opacity-90 blur-[0.1px] `}
    >
      <div className="w-fit h-fit pt-[64px] pl-10 ">
        <p className="text-[#9CA3AF] font-medium text-[18px]">
          {weather.lastUpdated}
        </p>
        <h1 className={`${cityTextColor} text-[44px] font-extrabold`}>
          {city}
        </h1>
      </div>
      <CiLocationOn
        className={`ml-[21rem] mt-[-60px] ${locationColor} text-[28px] font-extrabold`}
      />
      <Image
        className="mx-auto mt-[40px] drop-shadow-[0px_15px_45px_rgba(255,255,255,0.3)]"
        width={265}
        height={265}
        alt="Weather condition"
        src={imgSource}
      />
      <div className="pl-10">
        <h1
          className={`font-extrabold text-[8.5rem] leading-[197px] ${degreetextColor} inline-block text-transparent bg-clip-text`}
        >
          {weather.tempDay}°
        </h1>
        <h4 className={`${moodTextColor} text-[24px] font-extrabold `}>
          {weather.condition}
        </h4>
      </div>
      <div className="flex w-[318px] h-[32px] justify-between mt-[3rem] mx-auto">
        <CiHome className="w-[2rem] h-[2rem] text-[#9CA3AF]" />
        <CiLocationOn className="w-[2rem] h-[2rem] text-[#9CA3AF]" />
        <CiHeart className="w-[2rem] h-[2rem] text-[#9CA3AF]" />
        <CiUser className="w-[2rem] h-[2rem] text-[#9CA3AF]" />
      </div>
    </div>
  );
}
