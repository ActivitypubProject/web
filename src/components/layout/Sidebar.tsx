import { basicProps } from "@/types/reactNode";
import { FC } from "react";
import SidebarItem, { SidebarItemProps } from "../materials/SidebarItem";

const Sidebar: FC<basicProps> = ({ children }) => {
  return (
    <div className="h-full w-full border-white border-solid">
      {children}
    </div>
  )
}

export default Sidebar;