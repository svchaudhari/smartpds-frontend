import { Outlet } from 'react-router';
import DashboardSidebar from '../../components/DashboardLayout/Sidebar';
import './Dashboard.layout.css';

const DashboardLayout = () => {
  return (
    <div className="verified-user-content-container flex items-center justify-center">
      <div className="max-w-default w-full h-full">
        <section
          className={`w-full h-full grid grid-cols-[calc(var(--space)_*15)_1fr]`}
        >
          <section className="shadow-200">
            <DashboardSidebar />
          </section>
          <section className="w-full p-4">
            <Outlet />
          </section>
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;
