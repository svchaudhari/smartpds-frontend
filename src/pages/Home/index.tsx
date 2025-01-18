import { useNavigate } from 'react-router';
import CustomButton from '../../components/CustomButton';
import { useEffect } from 'react';

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('dashboard');
  }, []);

  const onLoginClick = () => {
    navigate('login');
  };
  const onRationCardClick = () => {
    navigate('ration-card-registration');
  };
  const onMasterMangementClick = () => {
    navigate('master-management');
  };
  return (
    <div className="flex justify-center items-center w-full h-full">
      <section className="gap-8 flex w-[60%] ">
        <CustomButton
          type="outlined"
          variant="success"
          buttonType="submit"
          onClick={onLoginClick}
        >
          Login
        </CustomButton>
        <section className="flex justify-center items-center gap-8 w-[60%]">
          <CustomButton
            type="contained"
            variant="info"
            buttonType="submit"
            width="full"
            onClick={onRationCardClick}
          >
            New Ration Card
          </CustomButton>
          <CustomButton
            type="contained"
            variant="secondary"
            buttonType="submit"
            width="full"
            onClick={onMasterMangementClick}
          >
            <span className="whitespace-nowrap">Master Management</span>
          </CustomButton>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
