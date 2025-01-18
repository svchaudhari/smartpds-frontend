import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Controller from '../../../components/FormController';
import RationCardContainerCard from '../../../components/RationCardLayout/Card';
import RationCardTitle from '../../../components/RationCardLayout/Title';
import {
  BlockNameOptions,
  villageNameoptions,
} from '../../../Fixtures/Constants/RationCardRegistration';
import './AddressDetails.css';

const AddressDetails = () => {

  const { setValue, watch } = useFormContext();
  const sameAsPresentAddress = watch('sameAsPresentAddress');

  useEffect(() => {
    if (sameAsPresentAddress) {
      setValue('addressHouseNo2', watch('addressHouseNo'));
      setValue('addressVillageName2', watch('addressVillageName'));
      setValue('addressLandmark2', watch('addressLandmark'));
      setValue('addressTaluka2', watch('addressTaluka'));
      setValue('addressDistrict2', watch('addressDistrict'));
      setValue('addressBlock2', watch('addressBlock'));
      setValue('addressWard2', watch('addressWard'));
      setValue('addressPincode2', watch('addressPincode'));
    } else {
      setValue('addressHouseNo2', '');
      setValue('addressVillageName2', '');
      setValue('addressLandmark2', '');
      setValue('addressTaluka2', '');
      setValue('addressDistrict2', '');
      setValue('addressBlock2', '');
      setValue('addressWard2', '');
      setValue('addressPincode2', '');
    }
  }, [sameAsPresentAddress, setValue, watch]);

  return (
    <section className="ration-card-registration-member-registration hide-scrollbar">
      <RationCardTitle applicationNumber={'RC014673'}>
        Address Details
      </RationCardTitle>
      <RationCardContainerCard title="Present Residence Address">
        <Controller
          label="House No./Flat No."
          required={true}
          name="addressHouseNo"
          type="text"
          placeholder="Enter"
        />
        <Controller
          label="Village/Town Name"
          required={true}
          name="addressVillageName"
          type="dropdown"
          options={villageNameoptions}
        />
        <Controller
          label="Landmark/Moholla/Colony"
          required={true}
          name="addressLandmark"
          type="text"
          placeholder="Enter"
        />
        <Controller
          label="Taluka/Tehsil/Sub District"
          required={true}
          name="addressTaluka"
          type="text"
          placeholder="Enter"
        />
        <Controller
          label="District"
          required={true}
          name="addressDistrict"
          type="text"
          placeholder="Enter"
        />
        <Controller
          label="Block"
          required={true}
          name="addressBlock"
          type="dropdown"
          options={BlockNameOptions}
        />
        <Controller
          label="GP/Ward"
          required={true}
          name="addressWard"
          type="dropdown"
          options={BlockNameOptions}
        />
        <Controller
          label="Pincode"
          required={true}
          name="addressPincode"
          type="text"
        />
      </RationCardContainerCard>
      <RationCardContainerCard
        title="Permanent Residence Address"
        subTitle="Enter Permanent address as govt id proof"
      >
        <Controller
          name="sameAsPresentAddress"
          type="checkbox"
          colSpan={3}
          options={[
            {
              label: 'Same as Present address',
              value: 'same-as-present-address',
            },
          ]}
        />
        <Controller
          label="House No./Flat No."
          required={true}
          name="addressHouseNo2"
          type="text"
          placeholder="Enter"
        />
        <Controller
          label="Village/Town Name"
          required={true}
          name="addressVillageName2"
          type="dropdown"
          options={villageNameoptions}
        />
        <Controller
          label="Landmark/Moholla/Colony"
          required={true}
          name="addressLandmark2"
          type="text"
          placeholder="Enter"
        />
        <Controller
          label="Taluka/Tehsil/Sub District"
          required={true}
          name="addressTaluka2"
          type="text"
          placeholder="Enter"
        />
        <Controller
          label="District"
          required={true}
          name="addressDistrict2"
          type="text"
          placeholder="Enter"
        />
        <Controller
          label="Block"
          required={true}
          name="addressBlock2"
          type="dropdown"
          options={BlockNameOptions}
        />
        <Controller
          label="GP/Ward"
          required={true}
          name="addressWard2"
          type="dropdown"
          options={BlockNameOptions}
        />
        <Controller
          label="Pincode"
          required={true}
          name="addressPincode2"
          type="text"
        />
      </RationCardContainerCard>
    </section>
  );
};

export default AddressDetails;
