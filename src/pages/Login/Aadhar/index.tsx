import GoBack from '../../../components/GoBack';
import data from '../../../data/JSON/loginCards.json';
import './AadharLogin.css';
import '../../../variables.css';
import Controller from '../../../components/FormController';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router';
import CustomButton from '../../../components/CustomButton';

const AadharCardLogin = () => {
  const pageData = data.pages.find((page) => page.id === 'aadhar-login');

  if (!pageData) {
    return <div>Page not found!</div>;
  }

  const methods = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    debugger
    console.log(data);
    navigate('/login/otp-verify');
  };

  return (
    <div>
      <GoBack />
      <div className="aadhar-login-container">
        <h2>{pageData.title}</h2>
        <p>
          <strong>Note:</strong>
          {pageData.description}
        </p>
        <FormProvider {...methods}>
          <form
            className="login-form"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <Controller
              required={true}
              name="Aadhar Number"
              type="text"
              placeholder={pageData.inputPlaceholder}
            ></Controller>
            <Controller
              required={true}
              name="Captcha"
              type="text"
              placeholder="Enter Captcha"
            ></Controller>
            <CustomButton
              type="contained"
              variant="primary"
              buttonType="submit"
              width="full"
            >
              {pageData.buttonText}
            </CustomButton>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AadharCardLogin;
