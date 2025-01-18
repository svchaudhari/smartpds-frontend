import React, { FC } from 'react';
import './RationCardTitle.css';

interface RationCardTitleProps {
  children: React.ReactNode;
  applicationNumber?: string | number;
  memberId?: string | number;
  subTitle?: string;
}
const RationCardTitle: FC<RationCardTitleProps> = ({
  children,
  applicationNumber = 0,
  memberId = 0,
  subTitle,
}) => {
  return (
    <header className="ration-card-container-card-header">
      <h1>
        <p>
          <strong>{children}</strong>
        </p>
        {subTitle && <p className="subtitle">{subTitle}</p>}
      </h1>
      <div className="counter-container">
        {applicationNumber === '' ? (
          <></>
        ) : (
          <>
            <div>
              <p>
                <span>RC Application Number:</span> <b>{applicationNumber}</b>
              </p>
            </div>
          </>
        )}
        {memberId === '' ? (
          <></>
        ) : (
          <>
            <div>
              <p>
                <span>Member ID:</span> <b>{memberId}</b>
              </p>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default RationCardTitle;
