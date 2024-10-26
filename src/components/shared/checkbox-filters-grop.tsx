"use client";
import React, { FC } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Button, Input } from "../ui";

import { buttonVariants } from "@/components/ui/button";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  defaultValue?: string;
  className?: string;
}

export const CheckboxFiltersGroup: FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const onShowAll = () => {
    setShowAll(!showAll);
  };
  const [searchValue, setSearchValue] = React.useState("");
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : defaultItems?.slice(0, limit);
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={className}>
      <h2 className={"font-bold text-xl pb-3"}>{title}</h2>
      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            onChange={onChangeSearchInput}
            value={searchValue}
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => {
          return (
            <FilterCheckbox
              key={item.value}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
              checked={false}
              onCheckedChange={(ids) => console.log(ids)}
            />
          );
        })}
      </div>
      {items.length >= limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={() => onShowAll()} className="text-primary mt-3">
            {!showAll ? "+ Показать всё" : "Скрыть"}
          </button>
        </div>
      )}
    </div>
  );
};
