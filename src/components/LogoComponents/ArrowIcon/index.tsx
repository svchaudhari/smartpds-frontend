import React from 'react';
import { IconProps } from '..';

const ArrowIcon: React.FC<IconProps> = ({
  width = 32,
  height = 32,
  fill = '#757575',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0zm-16.439-7.94L14.5 8.624V19a1.5 1.5 0 1 0 3 0V8.624l2.439 2.44a1.503 1.503 0 0 0 2.125-2.125l-5-5a1.5 1.5 0 0 0-2.125 0l-5 5a1.502 1.502 0 1 0 2.125 2.125l-.003-.004z"
      fill={fill}
    />
  </svg>
);

export default ArrowIcon;
