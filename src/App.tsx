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

function App() {
  return (
    <Routes>
      <Route path="/" element={<VerifiedUserLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/ration-card-registration"
          element={<RationCardRegistrationLayout />}
        >
          <Route index element={<RationCardRegistration />} />
        </Route>
      </Route>
      <Route path="login" element={<UnverifiedUserAuthLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
