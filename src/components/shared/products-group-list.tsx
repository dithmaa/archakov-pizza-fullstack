"use client";

import React, { FC } from "react";
import { Title } from "./title";
import { ProductCart } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "../../../store/category";
import { cn } from "@/lib/utils";

type itemsItemsType = {
  price: number;
};

type itemsType = {
  id: number;
  name: string;
  imageUrl: string;
  items: Array<itemsItemsType>;
};

interface Props {
  className?: string;
  title: string;
  items: Array<itemsType>;
  listClassName?: string;
  categoryId: number;
  onSetActiveIndex: (index: number) => void;
  activeIndex: number;
}

export const ProductsGroupList: FC<Props> = ({
  className,
  title,
  items,
  listClassName,
  categoryId,
  activeIndex,
  onSetActiveIndex,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      // onSetActiveIndex(categoryId - 1);
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);
  return (
    <div className={cn(className, "pt-[1px]")} id={title} ref={intersectionRef}>
      <Title className="font-extrabold mb-5 text-[30px]" text={title} />

      <div className="flex justify-start flex-wrap gap-5">
        {items.map((item, key) => {
          return (
            <ProductCart
              name={item.name}
              id={item.id}
              price={item.items[0].price}
              imageUrl={item.imageUrl}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};
