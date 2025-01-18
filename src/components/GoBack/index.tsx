import { useNavigate } from 'react-router';
import './GoBack.css';
import ArrowLeftIcon from '../LogoComponents/ArrowLeftIcon';
import CustomButton from '../CustomButton';

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="go-back-button" onClick={handleGoBack}>
      <CustomButton type="default" iconLeft={<ArrowLeftIcon />}>
        <span className="go-back-text">Go Back</span>
      </CustomButton>
    </div>
  );
};

export default GoBack;
