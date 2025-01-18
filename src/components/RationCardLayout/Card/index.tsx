import { FC } from 'react';
import './RationCardContainerCard.css';
import _ from 'lodash';

interface RationCardContainerCard {
  title: string;
  subTitle?: string;
  columns?: number | string;
  children: React.ReactNode;
  rightChild?: React.ReactNode;
}

const RationCardContainerCard: FC<RationCardContainerCard> = ({
  title,
  subTitle,
  children,
  columns = 3,
  rightChild,
}) => {
  return (
    <section className="ration-card-container-card-wrapper ">
      <div className="head-container">
        <div className={`${!_.isEmpty(rightChild) ? 'left' : ''}`}>
          <header className="flex items-baseline">
            <span>{title}</span>
            {subTitle && <sub className="align-baseline">{subTitle}</sub>}
          </header>
        </div>
        {!_.isEmpty(rightChild) && <div className="right">{rightChild}</div>}
      </div>
      <div className={`ration-card-container-card-main columns-${columns}`}>
        {children}
      </div>
    </section>
  );
};

export default RationCardContainerCard;
