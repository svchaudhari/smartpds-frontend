import { useState } from 'react';
import BreadCrumbs from '../../components/Breadcrumbs';
import SidebarAccordion from '../../components/Accordian';
import CustomButton from '../../components/CustomButton';
import * as z from 'zod';
import { useIsOpen } from './MasterContext';

import _ from 'lodash';
import { Outlet } from 'react-router';

export type UpdateMyData = (
  rowIndex: number,
  columnId: string,
  value: any
) => void;

export const stateSchema = z.object({
  id: z.any().optional(),
  stateName: z.string(),
  stateNameLl: z.string(),
  stateShortName: z.string(),
  ut: z.boolean(),
  availableFpsMobile: z.boolean(),
  centralPgrmsState: z.boolean(),
  code: z.string(),
});

const MasterManagement = () => {
  const { setIsOpen } = useIsOpen();
  const [currentTitle, setCurrentTitle] = useState('');
  const path = ['Home', 'Master', currentTitle].filter(Boolean);

  const sections = {
    Master: {
      url: 'master/national/state',
      values: [
        {
          name: 'National',
          url: 'master/national/state',
          children: [
            { name: 'State', url: 'master/national/state' },
            { name: 'District', url: 'master/national/district' },
            {
              name: 'Sub-District',
              url: 'master/national/sub-district',
            },
            { name: 'Village', url: 'master/national/village' },
          ],
        },
      ],
    },
    UserManagement: {
      url: 'user-management/new-user-invitations',
      values: [
        {
          name: 'New User Invitations',
          url: 'user-management/new-user-invitations',
        },
      ],
    },
  };

  return (
    <>
      <div className="verified-user-content-container flex items-center justify-center">
        <div className="max-w-default w-full h-full">
          <section
            className={`w-full h-full grid grid-cols-[calc(var(--space)_*15)_1fr]`}
          >
            <section className="shadow-200">
              <SidebarAccordion
                sections={sections}
                setCurrentTitle={setCurrentTitle}
              />
            </section>
            <section className="w-full p-4">
              <div className="flex-1 p-6">
                <div className="flex justify-between items-center">
                  {/* <h1 className="text-[var(--text-large)] mt-2 text-[1.5rem] font-bold"> */}
                  <h1 className="mt-2 text-[1.5rem] font-bold">
                    {(currentTitle + ' ' || '') + 'Mangement System'}
                  </h1>
                  <section className="flex flex-col gap-4 ">
                    <BreadCrumbs path={path} />
                    <CustomButton
                      type="contained"
                      variant="primary"
                      onClick={() => setIsOpen('State')}
                      className="full-width"
                    >
                      Add {currentTitle}
                    </CustomButton>
                  </section>
                </div>
                <Outlet />
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default MasterManagement;
