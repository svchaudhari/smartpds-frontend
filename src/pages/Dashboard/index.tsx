import DashboardTable from '../../components/DashboardTable';
import './dashboard.css';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
