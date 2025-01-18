import './AdditionalDetails.css';
import RationCardTitle from '../../../components/RationCardLayout/Title';
import RationCardContainerCard from '../../../components/RationCardLayout/Card';
import Controller from '../../../components/FormController';
import {
  bankNameOptions,
  branchNameOptions,
  cardTypeOptions,
  districtNameOptions,
  stateNameOptions,
} from '../../../Fixtures/Constants/RationCardRegistration';

const AdditionalDetails = () => {
  return (
    <section className="ration-card-registration-addtional-details hide-scrollbar">
      <RationCardTitle applicationNumber={'RC014673'}>
        Additional Details
      </RationCardTitle>
      <RationCardContainerCard title="Bank Details">
        <Controller
          label="Bank Name"
          required={true}
          name="bankName"
          type="dropdown"
          options={bankNameOptions}
        />
        <Controller
          label="State"
          required={true}
          name="bankState"
          type="dropdown"
          options={stateNameOptions}
        />
        <Controller
          label="Bank District"
          required={true}
          name="bankDistrict"
          type="dropdown"
          options={districtNameOptions}
        />
        <Controller
          label="Branch Name"
          required={true}
          name="branchName"
          type="dropdown"
          options={branchNameOptions}
        />
        <Controller
          label="Bank A/C No."
          required={true}
          name="bankACNo."
          type="text"
        />
        <Controller
          label="IFSC Code"
          required={true}
          name="ifscCode"
          type="text"
        />
      </RationCardContainerCard>
      <RationCardContainerCard title="Water Connection / House Project / Pension Details">
        <Controller
          label="Bringing Water Supply by the Govt.?"
          required={true}
          name="hasGovtWaterSupply"
          type="radio"
          options={cardTypeOptions}
        />
        <Controller
          label="Got any home using scheme of Govt.?"
          required={true}
          name="hasGovtHousingScheme"
          type="radio"
          options={cardTypeOptions}
        />
        <Controller
          label="Getting any Govt. Pension"
          required={true}
          name="receivingGovtPension"
          type="radio"
          options={cardTypeOptions}
        />
      </RationCardContainerCard>
      <RationCardContainerCard title="Electricity / Land Details" columns={2}>
        <Controller
          label="Electricity Consumer No."
          required={true}
          name="electricityConsumerNo"
          type="text"
        />
        <Controller
          label="Current Bill (Avg Monthly Bill)"
          name="currentBill"
          placeholder="Enter"
          type="text"
        />
        <Controller
          label="Wet Land Details"
          name="wetLandDetails"
          placeholder="Enter"
          type="text"
        />
        <Controller
          label="Dry Land Details"
          name="dryLandDetails"
          placeholder="Enter"
          type="text"
        />
      </RationCardContainerCard>
    </section>
  );
};

export default AdditionalDetails;
