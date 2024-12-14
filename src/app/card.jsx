import Image from "next/image";

export function Card({ value }) {
  const sun = "sun.png";
  const img = value === "day" ? sun : "nigth.png";
  const nightCardColors =
    "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";

  const colors = value === "day" ? "bg-[#ffffff]" : nightCardColors;

  return (
    <div className="w-[414px] h-[828px] rounded-[48px]  bg-[#1F2937] flex flex-col justify-between mt-[5px]">
      <div
        className={`w-[414px] h-[828px] rounded-[48px] ${colors} flex flex-col justify-between `}
      >
        <div className="flex flex-col items-center mt-8">
          <p className="text-black text-lg opacity-55">September 10, 2021</p>
          <h2 className="text-5xl font-extrabold">Krakow</h2>
        </div>

        <div className="flex items-center justify-center mt-4">
          <img className="w-[275px] h-[275px]" src={img} alt="Sun/Moon" />
        </div>
        <div className="ml-[48px]">
          <div className="font-extrabold text-[144px] leading-[144px] text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6B7280]">
            27°
          </div>
          <p className="font-extrabold text-[24px]">Bright</p>
        </div>
        <div className="flex justify-around items-center mb-6 text-[24px] opacity-60">
          <Image src="/Home.png" alt="" width={32} height={32} />
          <Image src="/Pin.png" alt="" width={32} height={32} />
          <Image src="/Heart.png" alt="" width={32} height={32} />
          <Image src="/User.png" alt="" width={32} height={32} />
        </div>
      </div>
    </div>
  );
}
