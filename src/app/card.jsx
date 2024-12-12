import Image from "next/image";

const DayCard = () => {
  return (
    <div>
      <div>
        <div>
          <div>September 10,2021</div>
          <div>Krakow</div>
        </div>
        <div>
          <Image src={"/location.png"} alt="" width={32} height={32} />
        </div>
      </div>
      <div>
        <Image src={"/Sun.png"} alt={""} width={200} height={200} />
      </div>
    </div>
  );
};
export { DayCard };
