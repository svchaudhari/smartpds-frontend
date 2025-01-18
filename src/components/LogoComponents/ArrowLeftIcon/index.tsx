import React from 'react';
import { IconProps } from '..';

const ArrowLeftIcon: React.FC<IconProps> = ({
  width = 15,
  height = 16,
  fill = '#ED5C41',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m2.5 8 3.75-3.75M2.5 8l3.75 3.75M2.5 8h6.563M12.5 8h-1.563"
      stroke={fill}
      strokeWidth=".938"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowLeftIcon;
