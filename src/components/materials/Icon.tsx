import React from 'react';

interface IconProps {
  type: string;
  size?: "large" | "medium" | "small";
  color?: string
}

const Icon: React.FC<IconProps> = ({ type, size = "medium", color = "white" }) => {
  const getSize = (size: string) => {
    switch (size) {
      case 'large':
        return 'w-8 h-8';
      case 'medium':
        return 'w-6 h-6';
      case 'small':
        return 'w-4 h-4';
    }
  };

  return (
    <div>
      <svg className={`icon ${getSize(size)}`} fill={color} aria-hidden="true">
        <use xlinkHref={`#icon-${type}`} />
      </svg>
    </div>
  );
};

export default Icon;