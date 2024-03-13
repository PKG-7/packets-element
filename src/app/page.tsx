import Image from "next/image";
import locationSvg from "./images/location.svg";
import timeSvg from "./images/time.svg";
import arrowSvg from "./images/arrow.svg";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["cyrillic"], weight: "400" });

interface ExcursionData {
  start: string;
  route: {
    from: string;
    to: string;
  };
  duration: string;
  description: string;
}

interface StartProps {
  text: string;
}

interface LocationProps {
  route: {
    from: string;
    to: string;
  };
}

interface DurationProps {
  duration: string;
}

interface DescriptionProps {
  description: string;
}

// Define the data object
const excursionData: ExcursionData = {
  start: "Начало: 08:10",
  route: {
    from: "Аэропорт Фьюмичино, Рим, Италия",
    to: "Александрия, Египет",
  },
  duration: "4 часа",
  description:
    "Описание: Экскурсия в Мечеть Абу аль-Аббаса аль-Мурси в Александрии. На комфортабельном минивэне Toyota с кондиционером.",
};

const Home: React.FC = () => {
  return (
    <div className={roboto.className}>
      <div className="place-content-center grid h-screen">
        <ExcursionCard data={excursionData} />
      </div>
    </div>
  );
};

const ExcursionCard: React.FC<{ data: ExcursionData }> = ({ data }) => {
  return (
    <div className="w-[690px] bg-[#FFFFFF] p-[16px] rounded-[4px] text-black text-[14px]">
      <Start text={data.start} />
      <Location route={data.route} />
      <Duration duration={data.duration} />
      <div className="border-b border-[#CFD3D5] pt-[8px]" />
      <Description description={data.description} />
    </div>
  );
};

const Duration: React.FC<DurationProps> = ({ duration }) => {
  return (
    <div className="flex">
      <Image src={timeSvg} width={16} height={16} alt="time" />
      <div className="pl-[8px]">{duration}</div>
    </div>
  );
};

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return <div className="pt-[8px]">{description}</div>;
};

const Start: React.FC<StartProps> = ({ text }) => {
  return (
    <div className="font-bold flex">
      <Image src={locationSvg} width={16} height={16} alt="location" />
      <div className="pl-[8px]">{text}</div>
    </div>
  );
};

const Location: React.FC<LocationProps> = ({ route }) => {
  return (
    <div className="flex items-start gap-[20px]">
      <div className="pl-[24px] max-w-[278px]">
        <span className="font-bold">Маршрут: {route.from},</span>
      </div>

      <div className="pt-[6px]">
        <Image src={arrowSvg} height={16} width={16} alt={"arrow"} />
      </div>

      <div className="flex items-center max-w-[278px]">
        <Image src={locationSvg} width={16} height={16} alt="location" />
        <div>
          <span className="font-bold pl-[8px]">{route.to}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
