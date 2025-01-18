import { FC } from 'react';
import { formatNumber } from '../../../utilities/number.utils';
import './CarouselCard.css';

interface CarouselCardProps {
  title: string;
  num: string | number | bigint;
  percentage: string | number;
  isIncreased: boolean;
  subtitle?: string;
}
const CarouselCard: FC<CarouselCardProps> = ({
  title,
  num,
  percentage,
  isIncreased,
  subtitle,
}) => {
  const color = isIncreased ? '#14E544' : '#e02626';
  return (
    <section className="carousel-card-container">
      <h3>{title}</h3>
      <div className="counter-container flex">
        <div>
          <strong>{formatNumber(num)}</strong>
        </div>
        <div
          className={`percentage-status ${isIncreased ? 'increase' : 'decrease'} flex`}
        >
          {isIncreased ? (
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#97c4e0d9ia)">
                <path
                  d="m16.868 11.246 8.434 8.434H8.434l8.434-8.434z"
                  fill={color}
                />
              </g>
              <defs>
                <clipPath id="97c4e0d9ia">
                  <path fill="#fff" d="M0 0h33.736v33.736H0z" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <></>
          )}
          <span>{percentage}%</span>
        </div>
      </div>
      {subtitle && <p>compared to last year</p>}
    </section>
  );
};

export default CarouselCard;
