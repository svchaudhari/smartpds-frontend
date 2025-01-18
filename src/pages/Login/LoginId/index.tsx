import GoBack from '../../../components/GoBack';
import data from '../../../data/JSON/loginCards.json';
import './LoginId.css';
import '../../../variables.css';
import Controller from '../../../components/FormController';
import { useForm, FormProvider } from 'react-hook-form';
import CustomButton from '../../../components/CustomButton';
import { postLogin } from '../../../services/auth.services';
import { useNavigate } from 'react-router';

const LoginIdLogin = () => {
  const pageData = data.pages.find((page) => page.id === 'id-login');
  const navigate = useNavigate();

  if (!pageData) {
    return <div>Page not found!</div>;
  }

  const methods = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);

    const reqObj = {
      userName: data.LoginID,
      password: data.LoginPassword,
    };
    const res = await postLogin(reqObj);
    debugger;
    if (res.token && res.refreshToken) {
      sessionStorage.setItem('auth-token', res.token);
      sessionStorage.setItem('refresh-token', res.refreshToken);
      navigate('/');
    }
  };

  return (
    <div>
      <GoBack />
      <div className="id-login-container">
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
              name="LoginID"
              type="text"
              placeholder={pageData.inputPlaceholder}
            ></Controller>
            <Controller
              required={true}
              name="LoginPassword"
              type="text"
              placeholder={pageData.passwordPlaceholder}
            ></Controller>
            <div className="actions">
              <div className="toggle-wrapper">
                <Controller name="Remember Me" type="toggle"></Controller>
                <span className="action-text">Remember Me</span>
              </div>
              <a href="">Forgot Password</a>
            </div>
            <Controller
              required={true}
              name="Captcha"
              type="text"
              placeholder="Enter Captcha"
            ></Controller>
            <CustomButton
              type="contained"
              buttonType="submit"
              variant="primary"
              width="full"
            >
              {pageData.buttonText}
            </CustomButton>
            <div className="description">
              <span>{pageData.confirmationText}</span>
              <a href="">{pageData.linkText}</a>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default LoginIdLogin;
