"use client";

import Image from "next/image";

export function WeatherImgs({ DayWeather, value }) {
  const imgSun = "/sun.png";
  const imgRain = "/DayRain.png";
  const imgStorm = "/DayStorm.png";
  const imgSnow = "/DaySnow.png";
  const imgWind = "/Wind.png";
  const imgCloud = "/Clouds.png";
  const imgNightRain = "/NightRain.png";
  const imgNightStorm = "/NightStorm.png";
  const imgNightSnow = "/NightSnow.png";
  const imgNightWind = "/NightWind.png";
  const imgNightMoon = "/nigth.png";
  const imgNightCloud = "/NightClouds.png";

  let imgSource = imgSun;
  const conditionText = DayWeather.condition;

  if (value === "night") {
    if (conditionText?.includes("rain")) {
      imgSource = imgNightRain;
    } else if (conditionText?.includes("snow")) {
      imgSource = imgNightSnow;
    } else if (
      conditionText?.includes("cloud") ||
      conditionText === "overcast" ||
      conditionText === "mist" ||
      conditionText === "fog"
    ) {
      imgSource = imgNightCloud;
    } else if (conditionText?.includes("thunderstorm")) {
      imgSource = imgNightStorm;
    } else if (conditionText?.includes("hail")) {
      imgSource = imgNightStorm;
    } else if (conditionText == "windy" || conditionText == "blustery") {
      imgSource = imgNightWind;
    } else {
      imgSource = imgNightMoon;
    }
  } else {
    if (conditionText?.includes("rain")) {
      imgSource = imgRain;
    } else if (conditionText?.includes("snow")) {
      imgSource = imgSnow;
    } else if (
      conditionText?.includes("cloud") ||
      conditionText?.includes("overcast") ||
      conditionText === "mist" ||
      conditionText === "fog"
    ) {
      imgSource = imgCloud;
    } else if (conditionText?.includes("thunderstorm")) {
      imgSource = imgStorm;
    } else if (conditionText?.includes("hail")) {
      imgSource = imgStorm;
    } else if (conditionText === "windy" || conditionText == "blustery") {
      imgSource = imgWind;
    }
  }
  return (
    <Image
      className="mx-auto mt-[40px] drop-shadow-[0px_15px_45px_rgba(255,255,255,0.3)]"
      width={265}
      height={265}
      alt="Weather condition"
      src={imgSource}
    />
  );
}
