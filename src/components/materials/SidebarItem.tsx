import { FC } from "react";
import { sidebarItem } from "../layout/Sidebar";


const SidebarItem: FC<sidebarItem> = ({
  icon,
  text,
  clickHandler = () => { }
}) => {
  return (
    <div>

    </div>
  )
}

export default SidebarItem;