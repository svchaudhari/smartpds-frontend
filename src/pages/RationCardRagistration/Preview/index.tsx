import CustomButton from '../../../components/CustomButton';
import RationCardContainerCard from '../../../components/RationCardLayout/Card';
import DetailsContentContainer from '../../../components/RationCardLayout/DetailsContentContainer';
import RationCardTitle from '../../../components/RationCardLayout/Title';
import './Preview.css';

const Preview = () => {
  return (
    <section className="ration-card-registration-preview hide-scrollbar">
      <RationCardTitle
        subTitle={
          'Kindly review your application to ensure all the details are acccurate before submitting it'
        }
        applicationNumber=""
        memberId=""
      >
        Preview
      </RationCardTitle>
      <RationCardContainerCard
        title="Head of Family Details"
        columns={2}
        rightChild={
          <CustomButton type="outlined" variant="error">
            Edit
          </CustomButton>
        }
      >
        <div className="details-container">
          <div className="1 details-content-container">
            <p className="property">s</p>
            <p className="value">b</p>
          </div>
          <div className="2 details-content-container">
            <p className="property">ss</p>
            <p className="value">bb</p>
          </div>
          <div className="3 details-content-container">
            <p className="property">sss</p>
            <p className="value">bbb</p>
          </div>
          <DetailsContentContainer property="sss" value="ff" />
        </div>
      </RationCardContainerCard>
    </section>
  );
};

export default Preview;
