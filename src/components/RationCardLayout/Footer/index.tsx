import React from 'react';
import './RationCardRegistrationFooter.css';
import CustomButton from '../../CustomButton';

const RationCardRegistrationFooter = () => {
  return (
    <footer className="ration-card-registration-footer-container">
      <div className="ration-card-registration-footer-content-container">
        <CustomButton type="outlined" variant="secondary">
          Save
        </CustomButton>
        <CustomButton type="contained" variant="primary" disabled={true}>
          Next
        </CustomButton>
      </div>
    </footer>
  );
};

export default RationCardRegistrationFooter;
