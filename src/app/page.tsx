import { Roboto } from "next/font/google";
import {
  ExcursionCard,
  ExcursionData,
} from "../components/ExcursionCard/ExcursionCard";

const roboto = Roboto({ subsets: ["cyrillic"], weight: "400" });

export default function Home() {
  return (
    <div className={roboto.className}>
      <div className="place-content-center grid h-screen">
        <ExcursionCard data={excursionData} />
        <div className="py-4"></div>
      </div>
    </div>
  );
}

const excursionData: ExcursionData = {
  start: "08:10",
  route: {
    from: "Аэропорт Фьюмичино, Рим, Италия",
    to: "Александрия, Египет",
  },
  duration: "4 часа",
  description:
    "Описание: Экскурсия в Мечеть Абу аль-Аббаса аль-Мурси в Александрии. На комфортабельном минивэне Toyota с кондиционером.",
};
