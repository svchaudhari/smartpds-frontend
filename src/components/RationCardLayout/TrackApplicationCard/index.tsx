import React from 'react';
import './TrackApplicationCard.css';
import _ from 'lodash';

interface TrackApplicationCardProps {
  readonly label: string;
  readonly value: string;
  readonly icon: React.ReactNode;
}

const TrackApplicationCard: React.FC<TrackApplicationCardProps> = ({
  label,
  value,
  icon,
}) => {
  return (
    <section className="track-application-card-wrapper">
      <div className="left">
        <sub>{label}</sub>
        <strong>{value}</strong>
      </div>
      {_.isEmpty(icon) ? <></> : <div className="right">{icon}</div>}
    </section>
  );
};

export default TrackApplicationCard;
