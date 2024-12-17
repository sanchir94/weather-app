import Image from "next/image";

const WeatherCard = ({ city, date }) => {
  return (
    <div className="flex gap-[100px] items-center  mt-[64px] w-[300px]:">
      <div>
        <div className="text-[18px] text-gray-500 ">{date}</div>
        <div className="text-[48px] text-black w-[200px]">{city}</div>
      </div>
      <div>
        <Image src={"/Pin.png"} alt="" width={32} height={32} />
      </div>
    </div>
  );
};

export { WeatherCard };
