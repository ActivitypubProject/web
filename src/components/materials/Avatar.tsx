import Image from 'next/image';
import React from 'react';

export type AvatarProps = {
  src: string;
  alt?: string;
  width?: number | string;
  borderColor?: string;
  borderWidth?: number;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'User avatar',
  width = 40,
  borderColor = 'gray-200',
  borderWidth = 2,
}) => {
  const imageSize = typeof width === 'number' ? width : parseInt(width, 10);
  const imageBorderColor = `border-${borderColor}`;
  const imageBorderWidth = `border-${borderWidth}`;

  return (
    <div className="relative rounded-full">
      <Image
        src={src}
        alt={alt}
        width={imageSize}
        height={imageSize}
        className={`rounded-full ${imageBorderWidth} ${imageBorderColor}`}
      />
    </div>
  );
};

export default Avatar;
