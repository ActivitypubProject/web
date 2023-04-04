import React from 'react';
import Icon from './Icon';

export interface SidebarItemProps {
  icon: string;
  text: string;
  clickHandler: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, clickHandler }) => {
  return (
    <div
      className="flex items-center gap-4 text-center p-2 cursor-pointer text-white  rounded"
      onClick={clickHandler}
    >
      <Icon size="medium" icon={icon} />
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
};

export default SidebarItem;