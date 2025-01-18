import { useState } from 'react';
import { useNavigate } from 'react-router'; // Example icons from React Icons
import DashboardIcon from '../../LogoComponents/DashboardIcon';
import './Sidebar.css';
import { SearchIcon } from '../../LogoComponents';
const support = [
  {
    name: 'Help & Support',
    icon: <SearchIcon />,
  },
  {
    name: 'Settings',
    icon: <SearchIcon />,
  },
];
const sections = {
  Dashboard: {
    icon: <DashboardIcon />,
    // url: 'master/national/state',
    values: [],
  },
  'RC Application': {
    icon: <DashboardIcon />,
    // url: 'user-management/new-user-invitations',
    values: [
      {
        name: 'New User Invitations',
        // url: 'user-management/new-user-invitations',
      },
    ],
  },
  'FPS Application': {
    icon: <DashboardIcon />,
    // url: 'user-management/new-user-invitations',
    values: [
      {
        name: 'New User Invitations',
        // url: 'user-management/new-user-invitations',
      },
    ],
  },
};

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    Dashboard: true,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ [key]: !prev[key] }));
  };

  const handleNavigate = (url: string) => {
    if (url) {
      navigate(`/${url}`);
    }
  };

  const renderSections = (
    items:
      | Array<{
          name: string;
          url: string;
          children?: Array<{ name: string; url: string; children?: any }>;
        }>
      | any
  ) => {
    return items.map((item: any) => (
      <div key={item.name} className="ml-4">
        <button
          onClick={() =>
            item.children ? toggleSection(item.name) : handleNavigate(item.url)
          }
          className={`w-full text-left p-2 rounded flex justify-between items-center`}
        >
          <span>{item.name}</span>
          {item.children && (
            <span>
              {openSections[item.name] ? (
                <SearchIcon className="text-sm" />
              ) : (
                <SearchIcon className="text-sm" />
              )}
            </span>
          )}
        </button>
        {item.children && openSections[item.name] && (
          <div className="ml-4">{renderSections(item.children)}</div>
        )}
      </div>
    ));
  };

  return (
    <aside className="h-screen flex flex-col gap-2 p-4 shadow-200 rounded-r-3xl">
      {Object.entries(sections).map(([key, value]) => (
        <div key={key}>
          <button
            onClick={() => toggleSection(key)}
            className={`w-full text-left text-md font-medium p-2 rounded flex justify-between items-center ${openSections[key] ? 'sidebar-bg-color' : ''}`}
          >
            <div className="flex items-center gap-2">
              {value.icon} {/* Icon on the left */}
              {key}
            </div>
            {key !== 'Dashboard' && (
              <span>
                {openSections[key] ? (
                  <SearchIcon className="text-sm" />
                ) : (
                  <SearchIcon className="text-sm" />
                )}
              </span>
            )}
          </button>
          {openSections[key] && (
            <div className="ml-4">{renderSections(value.values)}</div>
          )}
        </div>
      ))}
      <div className="flex flex-col gap-5 mt-5">
        <div className="support">Support</div>
        <div className="flex gap-2 flex-col cursor-pointer">
          {Array.isArray(support) &&
            support.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => toggleSection(item.name)}
                  className={`flex gap-2 ${openSections[item.name] ? 'sidebar-bg-color' : ''} rounded p-2`}
                >
                  {item.icon}
                  {item.name}
                </div>
              );
            })}
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
