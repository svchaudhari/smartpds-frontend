import React from 'react';
import { IconProps } from '..';

export const BinIcon: React.FC<IconProps> = ({
  width = 12,
  height = 12,
  fill = '#DA2F2F',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 2.625a.375.375 0 0 1-.375.375H9.75v6.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3h-.375a.375.375 0 1 1 0-.75h8.25a.375.375 0 0 1 .375.375zM4.125 1.5h3.75a.375.375 0 0 0 0-.75h-3.75a.375.375 0 1 0 0 .75z"
      fill={fill}
    />
  </svg>
);

export default BinIcon;

