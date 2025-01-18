import RationCardTitle from '../../../components/RationCardLayout/Title';
import './TrackApplication.css';
import languageData from '../../../Fixtures/Mock/RationCardRegistation/languagePack.mock.json';
import {
  CalenderIcon,
  DocumentIcon,
  UserChangeIcon,
  UserProfileIcon,
} from '../../../components/LogoComponents';
import TrackApplicationCard from '../../../components/RationCardLayout/TrackApplicationCard';
import _ from 'lodash';
const applicationDetailsIcons = [
  <DocumentIcon />,
  <CalenderIcon />,
  <UserProfileIcon />,
] as const;

const TrackApplication = () => {
  const trackApplicationData = languageData.find(
    (data) => data.id === 'language-pack-english'
  );
  {
    console.log('ds', trackApplicationData);
  }

  return (
    <section className="ration-card-registration-track-application hide-scrollbar">
      <RationCardTitle
        subTitle={'New Ration Card Application'}
        applicationNumber=""
        memberId=""
      >
        Current Status of the Application
      </RationCardTitle>
      <section className="application-meta-details-wrapper">
        {trackApplicationData?.trackApplication.trackApplicationDetails.map(
          (data, index) => (
            <TrackApplicationCard
              key={'data.id ' + index}
              label={data.title}
              value={data.value}
              icon={applicationDetailsIcons[index]}
            />
          )
        )}
      </section>
      <section className="application-meta-status-wrapper">
        <div className="icon-container">
          <UserChangeIcon />
        </div>
        <div className="status-details-container">
          <div className="status-container">
            <h3>
              {
                trackApplicationData?.trackApplication.applicationStatusDetails
                  .title
              }
            </h3>
            <b>
              {
                trackApplicationData?.trackApplication.applicationStatusDetails
                  .status
              }
            </b>
            <p>
              <span className="note">
                {
                  trackApplicationData?.trackApplication
                    .applicationStatusDetails.note
                }
                :
              </span>
              <span className="status">
                {
                  trackApplicationData?.trackApplication
                    .applicationStatusDetails.statusDescription
                }
              </span>
            </p>
          </div>
          <div className="file-icon-container">{<UserChangeIcon />}</div>
        </div>
      </section>
    </section>
  );
};

export default TrackApplication;
