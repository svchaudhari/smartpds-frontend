import { Outlet, useLocation } from 'react-router';
import RationCardRegistrationFooter from '../../components/RationCardLayout/Footer';
import './RationCardRegistrationLayout.css';
import RationCardRegistrationSidebar from '../../components/RationCardLayout/Sidebar';
import { FormProvider } from 'react-hook-form';
import { HashValue } from '../../Fixtures/Constants/RationCardRegistration';
import { useRationCardRegistrationHook } from '../../hooks';
import _ from 'lodash';

const RationCardRegistrationLayout = () => {
  const location = useLocation();
  const hashValue = location.pathname.split('/').pop() as HashValue;
  const { methods, onSubmitHandler } = useRationCardRegistrationHook(hashValue);

  function onError(errors: any) {
    console.log('Form submission failed. Errors:', errors);
  }

  const formSubmit = methods.handleSubmit(
    (data) => {
      debugger;
      onSubmitHandler(data);
    },
    (errors) => {
      onError(errors);
    }
  );

  return (
    <section className="ration-card-registration-layout-container">
      <FormProvider {...methods}>
        <form onSubmit={formSubmit}>
          <div className="ration-card-registration-sidebar-and-main-container">
            <div className="ration-card-registration-content-container">
              <div className="left">
                <RationCardRegistrationSidebar />
              </div>
              <div className="main overflow-y-auto hide-scrollbar">
                <Outlet />
              </div>
            </div>
            <div className="bg-color-div"></div>
          </div>

          {hashValue === 'track-application' ? (
            <></>
          ) : (
            <div>
              <RationCardRegistrationFooter formSubmit={formSubmit} />
            </div>
          )}
        </form>
      </FormProvider>
    </section>
  );
};

export default RationCardRegistrationLayout;
