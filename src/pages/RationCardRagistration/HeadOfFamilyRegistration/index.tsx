import { useSearchParams } from 'react-router';
import Controller from '../../../components/FormController';
import RationCardContainerCard from '../../../components/RationCardLayout/Card';
import RationCardTitle from '../../../components/RationCardLayout/Title';
import {
  addressProofOptions,
  disabilityOptions,
  GenderOptions,
  idProofOptions,
  occupationOptions,
  rationLiftingAllowedOptions,
} from '../../../Fixtures/Constants/RationCardRegistration';
import './RationCardRagistrationHof.css';
import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import _ from 'lodash';
import { getPersonalDetailsHofById } from '../../../services/rationCardRegistration.services';

const RationCardRegistrationHof = () => {
  const { control, setValue } = useFormContext();
  const [searchParams] = useSearchParams();
  const rcId = searchParams.get('rcId');
  const disabilityStatus = useWatch({ control, name: 'hofAnyDisability' });
  const idProofUploadStatus = useWatch({ control, name: 'hofIdentityProof' });
  const addressProofUploadStatus = useWatch({
    control,
    name: 'hofAddressProof',
  });
  const othersProofUploadStatus = useWatch({ control, name: 'hofOthersProof' });

  async function getHOfDetailsById(rcId: string) {
    const resData = await getPersonalDetailsHofById(rcId);
    debugger;
    setValue('hofName', resData.fullNameEn || '');
    setValue('hofSpousesName', resData.spouseName || '');
    setValue('hofProfilePic', resData.photograph);
    setValue('hofMothersName', resData.motherNameEn || '');
    setValue('hofFathersName', resData.fatherNameEn || '');
    setValue('hofMobileNumber', resData.mobileNumber || '');
    setValue('hofUIdRefNo', resData.id ? resData.id.toString() : '');
    setValue('hofElectionIdCardNo', resData.epicNumber || '');
    setValue('hofGender', resData.gender || '');
    const dob = resData.dob ? new Date(resData.dob) : null;
    setValue(
      'hofDob',
      dob
        ? {
            day: dob.getDate().toString().padStart(2, '0'),
            month: (dob.getMonth() + 1).toString().padStart(2, '0'),
            year: dob.getFullYear().toString(),
          }
        : {}
    );
    setValue('hofAge', resData.age || '');
    setValue('hofEmail', resData.emailId || '');
    setValue('hofRationLiftingEligibility', resData.hof ? 'Yes' : 'No');
    setValue('hofOccupation', resData.occupationStatus || '');
    setValue(
      'hofTotalAnnualIncome',
      resData.annualIncome ? resData.annualIncome.toString() : ''
    );
    setValue('hofIncomeCertificateIdPANId', resData.incomeCertificateId || '');
    setValue(
      'hofFamilyTotalAnnualIncome',
      resData.totalAnnualIncome ? resData.totalAnnualIncome.toString() : ''
    );
    setValue('hofIdentityProof', '');
    setValue('hofIdentityProofFile', []);
    setValue('hofAddressProof', '');
    setValue('hofAddressProofFile', []);
    setValue('hofOthersProof', '');
    setValue('hofOthersProofFile', []);
    setValue('hofAnyDisability', resData.doYouHaveAnyDisability || '');
    setValue('hofDisabilityType', resData.disabilityType || '');
    setValue('hofDisabilitybyBirth', '');
    setValue('hofDisabilitySince', resData.disabilitySince || '');
    setValue('hofDisabilityDueTo', '');
    setValue('hofPercentage', resData.disabilityPercentage || '');
    setValue(
      'hofDisabilityCertificateNo',
      resData.uploadCertificateOfDisability || ''
    );
    setValue('hofCertificateOfDisability', []);
  }

  useEffect(() => {
    if (!_.isEmpty(rcId) && typeof rcId === 'string' && rcId !== 'undefined') {
      getHOfDetailsById(rcId);
    }
  }, [rcId]);

  return (
    <section className="ration-card-registration-hof hide-scrollbar">
      <RationCardTitle applicationNumber={'RC014673'}>
        Head of Family Details
      </RationCardTitle>
      <RationCardContainerCard title="Personal & Professional Details">
        <Controller
          label="HOF Name"
          required={true}
          name="hofName"
          type="text"
          placeholder="Please enter name"
        />
        <Controller
          label="Spouse’s Name"
          required={true}
          name="hofSpousesName"
          type="text"
        />
        <Controller
          name="hofProfilePic"
          label="​"
          type="avatar-upload"
          rowSpan={3}
        />
        <Controller
          label="Mother’s Name"
          required={true}
          name="hofMothersName"
          type="text"
        />
        <Controller
          label="Father’s Name"
          required={true}
          name="hofFathersName"
          type="text"
        />
        <Controller
          label="Gender"
          required={true}
          name="hofGender"
          type="dropdown"
          options={GenderOptions}
        />
        <Controller
          label="Mobile Number"
          required={true}
          name="hofMobileNumber"
          type="text"
        />
        <Controller
          label="Date of Birth"
          required={true}
          name="hofDob"
          type="date-of-birth"
        />
        <Controller label="(OR) Age" name="hofAge" type="text" />
        <Controller
          label="Email Address"
          required={true}
          name="hofEmail"
          type="email"
        />
        <Controller
          label="UID Reference No"
          required={true}
          name="hofUIdRefNo"
          type="text"
        />
        <Controller
          label="Election ID Card No"
          required={true}
          name="hofElectionIdCardNo"
          type="text"
        />
        <Controller
          label="Ration Lifting Eligibility"
          required={true}
          name="hofRationLiftingEligibility"
          type="dropdown"
          options={rationLiftingAllowedOptions}
        >
          Ration Lifting Eligibility
        </Controller>
      </RationCardContainerCard>
      <RationCardContainerCard title="Occupation Details" columns={4}>
        <Controller
          label="Occupation"
          required={true}
          name="hofOccupation"
          type="dropdown"
          options={occupationOptions}
        />
        <Controller
          label="Total Annual Income ( in Rs.)"
          required={true}
          name="hofTotalAnnualIncome"
          type="text"
        />
        <Controller
          label="Income Certificate ID / PAN ID"
          name="hofIncomeCertificateIdPANId"
          type="text"
        />
        <Controller
          label="Family Total Annual Income"
          required={true}
          name="hofFamilyTotalAnnualIncome"
          type="text"
        />
      </RationCardContainerCard>
      <RationCardContainerCard title="Upload Photo & Documents" columns={2}>
        <Controller
          label="Identity Proof"
          required={true}
          name="hofIdentityProof"
          type="dropdown"
          options={idProofOptions}
        />
        <Controller
          type="file-upload"
          name="hofIdentityProofFile"
          disabled={!idProofUploadStatus}
          rowSpan={1}
        />
        <Controller
          label="Address Proof"
          required={true}
          name="hofAddressProof"
          type="dropdown"
          options={addressProofOptions}
        />
        <Controller
          type="file-upload"
          name="hofAddressProofFile"
          disabled={!addressProofUploadStatus}
          rowSpan={1}
        />
        <Controller
          label="Others"
          name="hofOthersProof"
          type="dropdown"
          options={addressProofOptions}
        />
        <Controller
          type="file-upload"
          name="hofOthersProofFile"
          disabled={!othersProofUploadStatus}
          rowSpan={1}
        />
      </RationCardContainerCard>
      <RationCardContainerCard title="Disability Details">
        <Controller
          label="Any Disability"
          required={true}
          name="hofAnyDisability"
          type="dropdown"
          options={disabilityOptions}
        />
        <Controller
          label="Disability Type"
          // required={true}
          name="hofDisabilityType"
          type="text"
          disabled={!disabilityStatus}
        />
        <Controller
          label="Disability Since / Disability by Birth"
          name="hofDisabilitybyBirth"
          type="text"
          disabled={!disabilityStatus}
        />
        <Controller
          label="Disability Since"
          // required={true}
          name="hofDisabilitySince"
          type="text"
          disabled={!disabilityStatus}
        />
        <Controller
          label="Disability Due to"
          // required={true}
          name="hofDisabilityDueTo"
          type="text"
          disabled={!disabilityStatus}
        />
        <Controller
          label="Percentage Option%"
          // required={true}
          name="hofPercentage"
          type="text"
          disabled={!disabilityStatus}
        />
        <Controller
          label="Disability Certificate Number"
          // required={true}
          name="hofDisabilityCertificateNo"
          type="text"
          disabled={!disabilityStatus}
        />
        <Controller
          type="file-upload"
          name="hofCertificateOfDisability"
          label="Upload Certificate of Disability (Issued by CMO)"
          rowSpan={2}
          colSpan={2}
          disabled={!disabilityStatus}
        />
      </RationCardContainerCard>
    </section>
  );
};

export default RationCardRegistrationHof;
