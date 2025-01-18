import GoBack from '../../../components/GoBack';
import data from '../../../data/JSON/loginCards.json';
import './OtpVerification.css';
import '../../../variables.css';
import Controller from '../../../components/FormController';
import { useForm, FormProvider } from 'react-hook-form';

const OtpVerification = () => {
  const pageData = data.pages.find((page) => page.id === 'otp-verify');

  if (!pageData) {
    return <div>Page not found!</div>;
  }

  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <GoBack />
      <div className="otp-container">
        <h2>{pageData.title}</h2>
        <p>
          {pageData.description1} number. {pageData.description2}
        </p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Controller
              required={true}
              name=""
              type="otp"
              length={4}
              value={6}
            ></Controller>
          </form>
        </FormProvider>
        <div className="description">
          <span>{pageData.confirmationText} </span>
          <a href="">{pageData.resendText}</a>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
