import { useEffect, useState } from 'react';
import './RationCardRegistrationSidebar.css';
import {
  UserIcon,
  UserChangeIcon,
  LocationPinIcon,
  DetailsCardIcon,
  DocumentOutlinedIcon,
  CheckmarkIcon,
} from '../../LogoComponents';
import { NavLink, useLocation, useNavigate } from 'react-router';
import {
  completionPercentagesObj,
  HashValue,
} from '../../../Fixtures/Constants/RationCardRegistration';
import { sidebarHiddenRoutes } from '../../../configs/RationCardRegistration';

const ICONS = [
  UserIcon,
  UserChangeIcon,
  LocationPinIcon,
  DetailsCardIcon,
  DocumentOutlinedIcon,
];

const RationCardRegistrationSidebar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  const hashValue = location.pathname.split('/').pop() as HashValue;
  useEffect(() => {
    const stepIndex = completionPercentagesObj.findIndex(
      (e) => e === hashValue
    );

    if (stepIndex === -1) {
      if (sidebarHiddenRoutes.includes(hashValue)) return;
      setCurrentStep(1);
      navigate(`/ration-card-registration/${completionPercentagesObj[0]}`);
    } else {
      setCurrentStep(stepIndex + 1);
    }
  }, [location.pathname, navigate]);

  const getIconFill = (step: number) =>
    step === currentStep ? '#4FA394' : '#757575';

  return (
    <aside
      className={`ration-card-registration-sidebar-container ${sidebarHiddenRoutes.includes(hashValue) && 'hidden'}`}
    >
      <h2>
        <b>{currentStep}</b>/5 Complete
      </h2>
      <div className="completion-slider">
        <div
          className="completion-slider-completed"
          style={{ width: `${currentStep * 20}%` }}
        ></div>
      </div>
      <ul className="nav-container">
        <nav>
          {' '}
          {completionPercentagesObj
            .filter((_, i) => i < 5)
            .map((path, index) => {
              const Icon = ICONS[index];
              const isActive = index + 1 === currentStep;
              const isCompleted = index + 1 < currentStep;
              return (
                <li key={path} className={isActive ? 'active' : ''}>
                  <NavLink to={path}>
                    <div className="icon-container">
                      <div>
                        {isCompleted ? (
                          <CheckmarkIcon fill="#4FA394" className="completed" />
                        ) : (
                          <Icon fill={getIconFill(index + 1)} />
                        )}
                      </div>
                    </div>
                    <div className="title-container">
                      {
                        [
                          'HOF Details',
                          'Member Details',
                          'Address Details',
                          'Other Details',
                          'Additional Details',
                        ][index]
                      }
                    </div>
                  </NavLink>
                </li>
              );
            })}
        </nav>
      </ul>
    </aside>
  );
};

export default RationCardRegistrationSidebar;
