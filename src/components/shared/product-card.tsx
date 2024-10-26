import Link from "next/link";
import { FC } from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface ProductCartProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCart: FC<ProductCartProps> = ({
  className,
  imageUrl,
  id,
  price,
  name,
}) => {
  return (
    <div className={cn(className, "w-[31%] mb-6")}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img
            src={imageUrl}
            className="min-w-[215px] h-[215px] p-3"
            alt={name}
          />
        </div>
        <Title text={name} className="mt-6" />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус альфредо,
          чеснок
        </p>
        <div className="flex justify-between items-center mt-8">
          <span className="text-[20px]">
            от <b>{price} р.</b>
          </span>
          <Button className="bg-secondary text-orange-500 transition duration-300 hover:text-white">
            <Plus size={20} className=" mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
