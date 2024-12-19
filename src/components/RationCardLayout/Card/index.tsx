import { FC } from 'react';
import './RationCardContainerCard.css';

interface RationCardContainerCard {
  title: string;
  columns?: number | string;
  children: React.ReactNode;
}

const RationCardContainerCard: FC<RationCardContainerCard> = ({
  title,
  children,
  columns = 3,
}) => {
  return (
    <section className="ration-card-container-card-wrapper ">
      <header>
        <span>{title}</span>
      </header>
      <div className={`ration-card-container-card-main columns-${columns}`}>
        {children}
      </div>
    </section>
  );
};

export default RationCardContainerCard;
