import { useEffect } from 'react';
import './RationCardRagistration.css';
import {
  completionPercentagesObj,
  HashValue,
} from '../../Fixtures/Constants/RationCardRegistration';
import { useLocation, useNavigate } from 'react-router';

const RationCardRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hashValue = location.hash.substring(1) as HashValue;
  const filledFormIndex = completionPercentagesObj.findIndex(
    (e) => e === hashValue
  );

  useEffect(() => {
    if (filledFormIndex === -1) {
      navigate('/ration-card-registration/' + completionPercentagesObj[0]);
    } else {
      navigate('' + completionPercentagesObj[filledFormIndex + 1]);
    }
  }, [filledFormIndex]);
  return (
    <section className="ration-card-registration hide-scrollbar"></section>
  );
};

export default RationCardRegistration;
