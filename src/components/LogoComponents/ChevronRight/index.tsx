import React from 'react';
import { IconProps } from '..';

const ChevronRight: React.FC<IconProps> = ({
  width = 28,
  height = 28,
  fill = '#31B079',
}) => (
  <svg
    width= {width}
    height= {height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="12uh8ot7wa"
      style= {{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="32"
      height="32"
    >
      <path fill="#D9D9D9" d="M0 0h32v32H0z" />
    </mask>
    <g mask="url(#12uh8ot7wa)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.667 16.001c0 7.364 5.97 13.334 13.333 13.334 7.364 0 13.333-5.97 13.333-13.334 0-7.363-5.97-13.333-13.333-13.333-7.364 0-13.333 5.97-13.333 13.333zm13.178 6.512 5.333-5.333c.651-.651.651-1.706 0-2.357l-5.333-5.334a1.667 1.667 0 1 0-2.357 2.357l4.155 4.155-4.155 4.155a1.667 1.667 0 1 0 2.357 2.357z"
        fill= {fill}
      />
    </g>
  </svg>
);

export default ChevronRight;
