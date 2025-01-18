import React from 'react';
import { IconProps } from '..';

const UserIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill = '#757575',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10.594a3.563 3.563 0 1 1 0-7.126 3.563 3.563 0 0 1 0 7.126zm0-5.938a2.375 2.375 0 1 0 0 4.75 2.375 2.375 0 0 0 0-4.75z"
      fill={fill}
    />
    <path
      d="M10 18.907a8.906 8.906 0 0 1-6.882-3.26l-.308-.38.308-.374a8.907 8.907 0 0 1 13.763 0l.31.374-.31.38A8.906 8.906 0 0 1 10 18.907zm-5.635-3.634a7.718 7.718 0 0 0 11.281 0 7.717 7.717 0 0 0-11.28 0z"
      fill={fill}
    />
    <path
      d="M10 18.906a8.906 8.906 0 1 1-.012-17.812A8.906 8.906 0 0 1 10 18.906zm0-16.625a7.719 7.719 0 1 0 0 15.438A7.719 7.719 0 0 0 10 2.28z"
      fill={fill}
    />
    <path
      d="M3.575 15.272s5.98 6.68 12.065.665l.784-.665S11.34 9.999 6.182 13.164l-2.607 2.108zM10 10a2.969 2.969 0 1 0 0-5.938A2.969 2.969 0 0 0 10 10z"
      fill={fill}
    />
  </svg>
);

export default UserIcon;
