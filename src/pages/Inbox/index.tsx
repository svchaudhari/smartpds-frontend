import {useState} from "react";
import './Inbox.css';
import Sidebar from '../../components/InboxLayout/Sidebar';
// import Tabs from '../../components/InboxLayout/Tabs';
import Table from '../../components/InboxLayout/Table';
import Details from '../../components/InboxLayout/Details';
import dummyData from "../../data/api/inboxDummy";

// const tabsData = [{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }];

export type DummyDataType = {
  acknowledgementNo: string;
  name: string;
  date: string;
}

const PendingDetails = () => {
  
  const [selectedRow, setSelectedRow] = useState<DummyDataType | null>(null);

  const handleGoBack = () => {
    setSelectedRow(null);
  }

  return (
    <div className="inbox-container">
      <Sidebar />
      <div className="main-content">
        {/* <Tabs tabs={tabsData} /> */}
        <div className="content-area">
          { !selectedRow ? (
            <Table data={dummyData} setSelectedRow={setSelectedRow}/>
          ) : (
            <Details data={selectedRow} goBack={handleGoBack}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default PendingDetails;
