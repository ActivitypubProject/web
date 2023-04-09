import React from 'react';
import Icon from './Icon';

export interface SidebarItemProps {
  icon: string;
  text: string;
  clickHandler: () => void;
  color?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, clickHandler, color = "white" }) => {
  const active = false;
  const activeColor = "green"
  return (
    <div
      className="flex items-center gap-6 text-center cursor-pointer text-white rounded p-5"
      onClick={clickHandler}
    >
      <Icon type={icon} size="large"></Icon>
      <span className={`text-lg font-semibold text-${color}`}>{text}</span>
    </div>
  );
};

export default SidebarItem;