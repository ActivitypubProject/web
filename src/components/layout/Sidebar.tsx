import { FC } from "react";
import SidebarItem, { SidebarItemProps } from "../materials/SidebarItem";

interface sidebarProps {
  items: SidebarItemProps[];
}

const Sidebar: FC<sidebarProps> = ({ items }) => {
  return (<div className="h-full w-full">
    {
      items.map((item, index) => {
        return <SidebarItem key={index} {...item} />
      })
    }
  </div>)
}

export default Sidebar;