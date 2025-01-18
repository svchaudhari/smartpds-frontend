import {FC} from 'react';
import CustomButton from '../../CustomButton';
import './Tabs.css'

interface TabProps {
  label: string;
}

const Tabs: FC<{ tabs: TabProps[] }> = ({ tabs }) => {

  return (
    <div className='tabs-container'>
      {tabs.map((tab, index) => (
        <button key={index}>
          {tab.label}
        </button>
      ))}
      <CustomButton></CustomButton>
    </div>
  )
};

export default Tabs;