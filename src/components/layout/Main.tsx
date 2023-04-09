import { basicProps } from "@/types/reactNode";
import { FC } from "react";

const Main: FC<basicProps> = ({ children }) => {
  return (<div className="h-full w-full">{children}</div>)
}

export default Main;