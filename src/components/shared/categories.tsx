"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useCategoryStore } from "../../../store/category";

interface Props {
  className?: string;
  activeIndex: number;
  onSetActiveIndex: (index: number) => void;
}

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
];
// const activeIndex = 0;

export const Categories: React.FC<Props> = ({
  className,
  activeIndex,
  onSetActiveIndex,
}) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const onSetUrl = (index: number) => {
    setActiveCategoryId(index);

    // console.log(cats[index]);
  };
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          href={`/#${cat.name}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-4",
            categoryActiveId === cat.id &&
              "bg-white text-primary rounded-2xl shadow-md"
          )}
          key={index}
          onClick={() => onSetUrl(cat.id)}
        >
          <button>{cat.name}</button>
        </a>
      ))}
    </div>
  );
};
