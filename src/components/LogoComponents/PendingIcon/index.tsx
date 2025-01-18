

// LocationPinLogo;
import React from 'react';
import { IconProps } from '..';

const PendingIcon: React.FC<IconProps> = ({
    width = 50,
    height = 50,
    fill = '#9C9C9C',
}) => (
    <svg width={width} height={height} viewBox="0 0 66 60" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path opacity=".21" fill-rule="evenodd" clip-rule="evenodd" d="M32.781 60c18.105 0 32.782-13.431 32.782-30 0-16.569-14.677-30-32.782-30C14.677 0 0 13.431 0 30c0 16.569 14.677 30 32.781 30z" fill="#693B17" />
        <g clip-path="url(#u7r2c5buba)">
            <path d="m47.854 32.803-4.886-6.406a.602.602 0 0 0-.948-.007l-5.05 6.405a.589.589 0 0 0 .47.951h3.264c-.846 4.988-5.249 8.802-10.54 8.802-5.895 0-10.69-4.731-10.69-10.548 0-5.816 4.795-10.547 10.69-10.547 3.222 0 6.241 1.414 8.283 3.88a1.766 1.766 0 0 0 2.462.245 1.71 1.71 0 0 0 .247-2.43c-2.708-3.27-6.715-5.147-10.992-5.147-7.824 0-14.189 6.28-14.189 14s6.365 14 14.188 14c7.225 0 13.2-5.356 14.075-12.255h3.14a.589.589 0 0 0 .476-.943z" fill="#693B17" />
        </g>
        <defs>
            <clipPath id="u7r2c5buba">
                <path fill="#fff" transform="translate(15.975 18)" d="M0 0h32v28H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default PendingIcon;
