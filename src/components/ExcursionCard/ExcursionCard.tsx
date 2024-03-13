import Image from "next/image";
import arrowSvg from "@/images/arrow.svg";
import locationSvg from "@/images/location.svg";
import timeSvg from "@/images/time.svg";

export function ExcursionCard({ data }: { data: ExcursionData }) {
  return (
    <Card>
      <Start startTime={data.start} />
      <Location from={data.route.from} to={data.route.to} />
      <Duration duration={data.duration} />
      <div className="border-b border-[#CFD3D5] pt-[8px]" />
      <Description description={data.description} />
    </Card>
  );
}

function Card({ children }: { children: React.ReactNode[] }) {
  return (
    <div className="w-[690px] bg-[#FFFFFF] p-[16px] rounded-[4px] text-black text-[14px]">
      {children}
    </div>
  );
}

function Duration({ duration }: { duration: string }) {
  return (
    <div className="flex">
      <Image src={timeSvg} width={16} height={16} alt="time" />
      <div className="pl-[8px]">{duration}</div>
    </div>
  );
}

function Description({ description }: { description: string }) {
  return <div className="pt-[8px]">{description}</div>;
}

function Start({ startTime }: { startTime: string }) {
  return (
    <div className="font-bold flex">
      <Image src={locationSvg} width={16} height={16} alt="location" />
      <div className="pl-[8px]">Начало: {startTime}</div>
    </div>
  );
}

function Location({ from, to }: { from: string; to: string }) {
  return (
    <div className="flex items-start gap-[20px]">
      <div className="pl-[24px] max-w-[278px]">
        <span className="font-bold">Маршрут: {from},</span>
      </div>
      <div className="pt-[6px]">
        <Image src={arrowSvg} height={16} width={16} alt="arrow" />
      </div>
      <div className="flex items-center max-w-[278px]">
        <Image src={locationSvg} width={16} height={16} alt="location" />
        <div>
          <span className="font-bold pl-[8px]">{to}</span>
        </div>
      </div>
    </div>
  );
}

export interface ExcursionData {
  start: string;
  route: {
    from: string;
    to: string;
  };
  duration: string;
  description: string;
}
