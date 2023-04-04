import Image from 'next/image';
import React from 'react';

interface IconProps {
  size?: 'large' | 'medium' | 'small';
  icon: string;
}

const Icon: React.FC<IconProps> = ({ size = "medium", icon }) => {
  let iconSize;
  const getSize = (size: string) => {
    switch (size) {
      case 'large':
        iconSize = 32;
        return 'w-8 h-8';
      case 'medium':
        iconSize = 24;
        return 'w-6 h-6';
        iconSize = 16;
      case 'small':
        return 'w-4 h-4';
    }
  };

  return (
    <div className={`inline-block ${getSize(size)}`}>
      <Image src={`/icons/${icon}.svg`} width={iconSize} height={iconSize} alt={icon} />
    </div>
  );
};

export default Icon;