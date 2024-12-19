import { Outlet } from 'react-router';
import RationCardRegistrationFooter from '../../components/RationCardLayout/Footer';
import './RationCardRegistrationLayout.css';
import RationCardRegistrationSidebar from '../../components/RationCardLayout/Sidebar';

const RationCardRegistrationLayout = () => {
  return (
    <section className="ration-card-registration-layout-container">
      <div className="ration-card-registration-sidebar-and-main-container">
        <div className="ration-card-registration-content-container">
          <div className="left">
            <RationCardRegistrationSidebar />
          </div>
          <div className="main">
            <Outlet />
          </div>
        </div>
        <div className="bg-color-div"></div>
      </div>
      <div>
        <RationCardRegistrationFooter />
      </div>
    </section>
  );
};

export default RationCardRegistrationLayout;
