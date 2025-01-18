import { Route, Routes } from 'react-router';
import './App.css';
import './variables.css';
import HomePage from './pages/Home';
import Login from './pages/Login';
import UnverifiedUserAuthLayout from './layout/AuthLayout/UnverifiedUser';
import VerifiedUserLayout from './layout/AuthLayout/VerifiedUser';
import NotFound from './pages/404';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RationCardRegistrationLayout from './layout/RationCardRegistrationLayout';
import RationCardRegistration from './pages/RationCardRagistration';
import AadharCardLogin from './pages/Login/Aadhar';
import LoginIdLogin from './pages/Login/LoginId';
import RationCardLogin from './pages/Login/RationCard';
import OtpVerification from './pages/Login/OTP/OtpVerification';
import MemberDetails from './pages/RationCardRagistration/MemberDetails';
import AddressDetails from './pages/RationCardRagistration/AddressDetails';
import OtherDetails from './pages/RationCardRagistration/OtherDetails';
import RationCardRegistrationHof from './pages/RationCardRagistration/HeadOfFamilyRegistration';
import AdditionalDetails from './pages/RationCardRagistration/AdditionalDetails';
import Preview from './pages/RationCardRagistration/Preview';
import TrackApplication from './pages/RationCardRagistration/TrackApplication';
import Inbox from './pages/Inbox';
import MasterManagement from './pages/MasterManagement';
import { IsOpenProvider } from './pages/MasterManagement/MasterContext';
import CustomDataTable from './components/CustomDataTable';
import DistrictDataTable from './components/DistrictDataTable';
import SubDistrictDataTable from './components/SubDistrictDataTable';
import VillageDataTable from './components/VillageDataTable';
import NewUserInvitation from './components/UserManagement/NewUserInvitation';
import NewUserRegister from './components/NewUserRegister';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layout/DashboardLayout';
import DashboardComponents from './pages/Dashboard/DashboardComponents';

function App() {
  return (
    <IsOpenProvider>
      <Routes>
        <Route path="/" element={<VerifiedUserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="pending" element={<DashboardComponents />} />
            <Route path="verified" element={<DashboardComponents />} />
            <Route path="queryBack" element={<DashboardComponents />} />
            <Route path="rejected" element={<DashboardComponents />} />
          </Route>
          <Route
            path="ration-card-registration"
            element={<RationCardRegistrationLayout />}
          >
            <Route index element={<RationCardRegistration />} />
            <Route path="hof-details" element={<RationCardRegistrationHof />} />
            <Route path="member-details" element={<MemberDetails />} />
            <Route path="address-details" element={<AddressDetails />} />
            <Route path="other-details" element={<OtherDetails />} />
            <Route path="additional-details" element={<AdditionalDetails />} />
            <Route path="preview" element={<Preview />} />
            <Route path="track-application" element={<TrackApplication />} />
          </Route>

          <Route path="inbox" element={<Inbox />}></Route>
          <Route path="master" element={<MasterManagement />}>
            <Route index element={<CustomDataTable />} />
            <Route path="National/State" element={<CustomDataTable />} />
            <Route path="National/District" element={<DistrictDataTable />} />
            <Route
              path="National/Sub-District"
              element={<SubDistrictDataTable />}
            />
            <Route path="National/Village" element={<VillageDataTable />} />
          </Route>
          <Route path="user-management" element={<MasterManagement />}>
            <Route index element={<NewUserInvitation />} />
            <Route
              path="new-user-invitations"
              element={<NewUserInvitation />}
            />
          </Route>
          <Route path="new-user-register" element={<NewUserRegister />}></Route>
        </Route>
        <Route path="login" element={<UnverifiedUserAuthLayout />}>
          <Route index element={<Login />} />
          <Route path="aadhar-login" element={<AadharCardLogin />} />
          <Route path="otp-verify" element={<OtpVerification />} />
          <Route path="id-login" element={<LoginIdLogin />} />
          <Route path="ration-card-login" element={<RationCardLogin />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </IsOpenProvider>
  );
}

export default App;
