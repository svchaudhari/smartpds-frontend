import React from 'react';
import { IconProps } from '..';

const CheckmarkIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = '#4FA394',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.483 3.517A9.167 9.167 0 1 1 3.519 16.48 9.167 9.167 0 0 1 16.483 3.518zm-1.745 4.468a1.042 1.042 0 0 0-1.474-1.474l-4.763 4.764L6.738 9.51a1.042 1.042 0 0 0-1.474 1.474l2.5 2.5a1.042 1.042 0 0 0 1.474 0l5.5-5.5z"
      fill={fill}
    />
  </svg>
);

export default CheckmarkIcon;
