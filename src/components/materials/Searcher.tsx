import React, { FC } from "react";
import Image from "next/image";
import Icon from "./Icon";

export interface SearcherProps {
  width?: string;
  height?: string;
}

const Searcher: FC<SearcherProps> = () => {
  const forest_glasses = "bg-forest-glass/[.12]"
  return (
    <div
      className={`w-full h-full rounded-full ${forest_glasses} flex items-center px-4`}
    >
      <Icon type="discover" ></Icon>
      <input
        type="text"
        placeholder="Search"
        color="white"
        className="flex-1 pl-5 text-white outline-none placeholder:text-white bg-transparent"
      />
    </div>
  );
};

export default Searcher;