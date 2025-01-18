import React from 'react';
import { IconProps } from '..';

const DocumentOutlinedIcon: React.FC<IconProps> = ({
  width = 16,
  height = 16,
  fill = '#9C9C9C',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#yn0ri2dcra)" fill={fill} stroke={fill}>
      <path
        d="m14.027 3.817-3.75-3.75A.57.57 0 0 0 9.875-.1H3.312c-.83 0-1.506.676-1.506 1.506v13.188c0 .83.676 1.506 1.506 1.506h9.376c.83 0 1.506-.676 1.506-1.506V4.219c0-.156-.065-.3-.167-.402zm-3.583-.536v-1.44l1.808 1.809h-1.44a.37.37 0 0 1-.368-.369zm2.243 11.681H3.313a.37.37 0 0 1-.37-.368V1.406a.37.37 0 0 1 .37-.368h5.993V3.28c0 .83.676 1.506 1.507 1.506h2.243v9.807a.37.37 0 0 1-.368.369z"
        strokeWidth=".2"
      />
      <path
        d="M5.188 6.64h5.625a.453.453 0 0 1 0 .907H5.186a.453.453 0 0 1 0-.906zM5.188 8.516h5.625a.453.453 0 0 1 0 .906H5.186a.453.453 0 0 1 0-.906zM5.188 10.39h5.625a.453.453 0 0 1 0 .907H5.186a.453.453 0 0 1 0-.906zM5.188 12.266h3.75a.453.453 0 0 1 0 .906h-3.75a.453.453 0 0 1 0-.906z"
        strokeWidth=".031"
      />
    </g>
    <defs>
      <clipPath id="yn0ri2dcra">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default DocumentOutlinedIcon;
