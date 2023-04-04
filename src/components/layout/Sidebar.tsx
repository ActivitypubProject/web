import { FC } from "react";

export type sidebarItem = {
  icon: string;
  text: string;
  clickHandler?: any;
}

interface sidebarProps {
  items: sidebarItem[];
}

const Sidebar: FC<sidebarProps> = ({ items }) => {
  return (<div className="h-full w-full">
    {/* {
      items.map((item) => {

      })
    } */}
  </div>)
}

export default Sidebar;