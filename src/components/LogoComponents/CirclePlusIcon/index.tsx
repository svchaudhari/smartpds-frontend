import React from 'react';
import { IconProps } from '..';

const CirclePlusIcon: React.FC<IconProps> = ({
  width = 21,
  height = 21,
  fill = '#011A5A',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.643 4.607A8.333 8.333 0 1 1 4.857 16.392 8.333 8.333 0 0 1 16.643 4.607zM7.214 9.458a1.042 1.042 0 1 0 0 2.083h2.494v2.494a1.042 1.042 0 1 0 2.084 0v-2.494h2.494a1.042 1.042 0 0 0 0-2.083h-2.494V6.964a1.042 1.042 0 0 0-2.084 0v2.494H7.214z"
      fill={fill}
    />
  </svg>
);

export default CirclePlusIcon;
