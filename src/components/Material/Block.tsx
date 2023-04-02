import { FCprops } from "@/utils/typs";
import { FC } from "react";

const Block: FC<FCprops> = ({ children }) => {
  return (
    <div className=" bg-red-400 bg-opacity-50 backdrop-blur-md rounded-lg p-4  shadow-xl " >
      {children}
    </div>
  )
}

export default Block;