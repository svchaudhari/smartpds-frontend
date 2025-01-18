import './RationCardRegistrationFooter.css';
import CustomButton from '../../CustomButton';
import { useLocation, useNavigate, useSearchParams } from 'react-router';
import {
  completionPercentagesObj,
  HashValue,
} from '../../../Fixtures/Constants/RationCardRegistration';
import _ from 'lodash';
interface FooterProps {
  formSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const RationCardRegistrationFooter = ({ formSubmit }: FooterProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const hashValue = location.pathname.split('/').pop() as HashValue;
  const filledFormIndex = completionPercentagesObj.findIndex(
    (e) => e === hashValue
  );
  const [searchParams] = useSearchParams();
  const rcId = searchParams.get('rcId');

  function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (filledFormIndex >= 6) return;
    formSubmit(e);

    const nextPath = completionPercentagesObj[filledFormIndex + 1];
    if (
      nextPath &&
      !_.isEmpty(rcId) &&
      typeof rcId === 'string' &&
      rcId !== 'undefined'
    ) {
      navigate(`${nextPath}?rcId=${rcId}`);
    }
  }
  return (
    <footer className="ration-card-registration-footer-container">
      <div className="ration-card-registration-footer-content-container">
        <CustomButton type="outlined" variant="secondary" buttonType="submit">
          Save
        </CustomButton>
        <CustomButton
          type="contained"
          variant="primary"
          buttonType="submit"
          // disabled={true}
          onClick={onClickHandler}
        >
          Next
        </CustomButton>
      </div>
    </footer>
  );
};

export default RationCardRegistrationFooter;
