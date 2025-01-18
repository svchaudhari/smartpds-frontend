import React from 'react';
import _ from 'lodash';
import './RationCardSubSection.css';

interface RationCardSubSectionProps {
  readonly colSpan?: number | string;
  readonly rowSpan?: number | string;
  readonly children?: React.ReactNode;
  readonly title?: string;
  readonly columns?: number | string;
  readonly rows?: number | string;
}

const RationCardSubSection: React.FC<RationCardSubSectionProps> = ({
  colSpan = 1,
  rowSpan = 1,
  children,
  title = '',
  columns,
  rows,
}) => {
  return (
    <section
      className={`ration-card-sub-section column column-${colSpan} row-${rowSpan}`}
    >
      {title && <h3>{title}</h3>}
      {!_.isEmpty(children) && (
        <section
          className={`ration-card-sub-section-body-container column-${columns} row-${rows}`}
        >
          {children}
        </section>
      )}
    </section>
  );
};

export default RationCardSubSection;
