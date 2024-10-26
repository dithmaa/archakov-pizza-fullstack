"use client";
import { FC } from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-grop";
import { useFilterIngredients } from "../../../hooks/useFilterIngredients";

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  const { ingredients } = useFilterIngredients();
  console.log("ingredients=", ingredients);
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));
  return (
    <div className={className}>
      <Title text="Фильтрация" size={"sm"} className="mb-5 font-bold" />
      {/*Верхние чекбоксы*/}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Фильтры */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" placeholder="3000" min={100} max={30000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 6)}
        items={items}
      />
    </div>
  );
};
