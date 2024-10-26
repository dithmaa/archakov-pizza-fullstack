import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "@/components/ui/";
import {
  Aperture,
  Apple,
  ArrowRight,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {
          //Левая часть
        }
        <Link href="/">
          <div className="flex items-center gap-4 group cursor-pointer hover:opacity-55">
            <Image
              className="group-hover:rotate-180 group-hover:opacity-55 transition "
              src={"/logo.png"}
              alt="logo"
              width={35}
              height={35}
            />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        {
          //Left side
        }
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
          <div className="flex">
            <Button className="group relative">
              <b>520 р</b>{" "}
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
            <Button className="group relative ml-4">
              <Apple
                size={18}
                className="transition duration-300 group-hover:opacity-0 group-hover:translate-x-2"
              />
              <Aperture
                size={18}
                className="opacity-0 absolute transition duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
