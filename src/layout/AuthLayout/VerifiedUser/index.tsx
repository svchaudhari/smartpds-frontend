import { Outlet, useNavigate } from 'react-router';
import { useSessionStorage } from '../../../hooks';
import _ from 'lodash';
import { useEffect } from 'react';
import './VerifiedUser.css';
import VerifiedUserLayoutHeader from '../../../components/VerifiedUserLayout/Header';


const VerifiedUserLayout = () => {
  const [storedValue] = useSessionStorage('auth-token', '');
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!(storedValue)){
      // navigate('/login');
    }
    console.log('storedValue', storedValue)  
  }, [])
  

  return (
    <section className="verified-user-container">
      <div className="verified-user-header-container">
        <VerifiedUserLayoutHeader />
      </div>
      <div className="verified-user-content-container">
        <Outlet />
      </div>
    </section>
  );
};

export default VerifiedUserLayout;
