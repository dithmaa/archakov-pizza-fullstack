"use client";

import {
  Container,
  Filters,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";
import { Button } from "@/components/ui/";
import { Categories } from "../components/shared/";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import React, { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onSetActiveIndex = (i: number) => {
    setActiveIndex(i);
  };
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        activeIndex={activeIndex}
        onSetActiveIndex={(i) => onSetActiveIndex(i)}
      />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {
            //  Filtration
          }
          <div className="w-[250px]">
            <Filters />
          </div>
          {
            // Goods
          }
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                onSetActiveIndex={(i) => onSetActiveIndex(i)}
                activeIndex={activeIndex}
                items={[
                  {
                    id: 1,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 2,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 3,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 4,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 5,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 6,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 7,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 8,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                onSetActiveIndex={(i) => onSetActiveIndex(i)}
                activeIndex={activeIndex}
                items={[
                  {
                    id: 1,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 2,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                ]}
              />
              <ProductsGroupList
                title="Закуски"
                categoryId={3}
                onSetActiveIndex={(i) => onSetActiveIndex(i)}
                activeIndex={activeIndex}
                items={[
                  {
                    id: 1,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 2,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 3,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                  {
                    id: 4,
                    name: "Баварская",
                    items: [
                      {
                        price: 329,
                      },
                      {
                        price: 352,
                      },
                    ],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
