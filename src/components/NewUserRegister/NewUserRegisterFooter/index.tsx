import './NewUserRegisterFooter.css';
import CustomButton from '../../CustomButton';
import { useLocation, useNavigate } from 'react-router';
import {
  completionPercentagesObj,
  HashValue,
} from '../../../Fixtures/Constants/RationCardRegistration';

const NewUserRegisterFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hashValue = location.pathname.split('/').pop() as HashValue;
  const filledFormIndex = completionPercentagesObj.findIndex(
    (e) => e === hashValue
  );

  function onClickHandler() {
    if (filledFormIndex >= 6) return;
    navigate('' + completionPercentagesObj[filledFormIndex + 1]);
  }
  return (
    <footer className="ration-card-registration-footer-container">
      <div className="ration-card-registration-footer-content-container">
        <CustomButton
          type="contained"
          variant="secondary"
          buttonType="submit"
          // disabled={true}
          onClick={onClickHandler}
        >
          Reset
        </CustomButton>
        <CustomButton type="contained" variant="primary" buttonType="submit">
          Save
        </CustomButton>
        <CustomButton
          type="contained"
          variant="secondary"
          buttonType="submit"
          // disabled={true}
          // onClick={onClickHandler}
        >
          Back
        </CustomButton>
      </div>
    </footer>
  );
};

export default NewUserRegisterFooter;
