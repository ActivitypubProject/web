import React, { FC } from "react";
import Image from "next/image";

export interface SearcherProps {
  width?: string;
  height?: string;
}

const Searcher: FC<SearcherProps> = ({ width = "w-80", height = "h-10" }) => {
  const forest_glasses = "bg-forest-glass/[.12]"
  return (
    <div
      className={`${width} ${height} rounded-full ${forest_glasses} flex items-center px-4`}
    >
      <Image
        src="/icons/search.svg"
        alt="search"
        width={16}
        height={16}
        className="mr-2"
      />
      <input
        type="text"
        placeholder="Search"
        color="white"
        className="flex-1 text-white outline-none bg-transparent"
      />
    </div>
  );
};

export default Searcher;