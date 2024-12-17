"use cilent";

import Image from "next/image";

export function FooterButtons() {
  return (
    <div className="flex justify-between w-[318px] h-[32px] mt-[40px]">
      <Image src={"/Home.png"} alt="" width={32} height={32} />
      <Image src={"/Pin.png"} alt="" width={32} height={32} />
      <Image src={"/Heart.png"} alt="" width={32} height={32} />
      <Image src={"/User.png"} alt="" width={32} height={32} />
    </div>
  );
}
