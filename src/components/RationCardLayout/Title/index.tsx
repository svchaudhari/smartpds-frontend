import React, { FC } from 'react';
import './RationCardTitle.css';

interface RationCardTitleProps {
  children: React.ReactNode;
  applicationNumber?: string | number;
  memberId?: string | number;
}
const RationCardTitle: FC<RationCardTitleProps> = ({
  children,
  applicationNumber = 0,
  memberId = 0,
}) => {
  return (
    <header className="ration-card-container-card-header">
      <h1>
        <strong>{children}</strong>
      </h1>
      <div className="counter-container">
        <div>
          <p>
            <span>RC Application Number:</span> <b>{applicationNumber}</b>
          </p>
        </div>
        <div>
          <p>
            <span>Member ID:</span> <b>{memberId}</b>
          </p>
        </div>
      </div>
    </header>
  );
};

export default RationCardTitle;
