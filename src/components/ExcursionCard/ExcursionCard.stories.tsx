import type { Meta, StoryObj } from "@storybook/react";
import { ExcursionCard } from "./ExcursionCard";
import { ExcursionData } from "@/data/excursionData";

const meta: Meta<typeof ExcursionCard> = {
  title: "Components/ExcursionCard",
  component: ExcursionCard,
};

export default meta;
type Story = StoryObj<typeof ExcursionCard>;

const sampleData: ExcursionData = {
  start: "Начало: 08:10",
  route: {
    from: "Аэропорт Фьюмичино, Рим, Италия",
    to: "Александрия, Египет",
  },
  duration: "4 часа",
  description:
    "Описание: Экскурсия в Мечеть Абу аль-Аббаса аль-Мурси в Александрии. На комфортабельном минивэне Toyota с кондиционером.",
};

export const Default: Story = {
  args: {
    data: sampleData,
  },
};
