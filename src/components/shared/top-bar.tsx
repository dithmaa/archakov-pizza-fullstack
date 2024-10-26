import { cn } from "@/lib/utils";
import { FC } from "react";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Container } from "./container";

interface Props {
  className?: string;
  activeIndex: number;
  onSetActiveIndex: (index: number) => void;
}

export const TopBar: FC<Props> = ({ className, activeIndex, onSetActiveIndex }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories onSetActiveIndex={onSetActiveIndex} activeIndex={activeIndex} />
        <SortPopup />
      </Container>
    </div>
  );
};
