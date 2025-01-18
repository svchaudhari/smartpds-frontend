import './OtherDetails.css';
import RationCardTitle from '../../../components/RationCardLayout/Title';
import RationCardContainerCard from '../../../components/RationCardLayout/Card';
import Controller from '../../../components/FormController';
import {
  cardTypeOptions,
  CasteOptions,
  GasAgencyNameOptions,
  GasConnectionStatusOptions,
  gasCylinderNumberOptions,
  keroseneOilEligibilityOptions,
  mnregaStatusOptions,
  specialCateoryOptions,
} from '../../../Fixtures/Constants/RationCardRegistration';
import RationCardSubSection from '../../../components/RationCardLayout/RationCardSubSection';
// import { useForm } from 'react-hook-form';
// import { useSearchParams } from 'react-router';
// import { useEffect } from 'react';

const OtherDetails = () => {
  // const methods = useForm();
  // const [searchParams] = useSearchParams();
  // const rcId = searchParams.get('rcId');

  // async function getHOfDetailsById(rcId: string) {
  //   const resData = await getPersonalDetailsById(rcId);
  //   methods.setValue('hofName', resData.fullNameEn || '');
  //   methods.setValue('hofSpousesName', resData.spouseName || '');
  //   methods.setValue('hofProfilePic', resData.photograph);
  //   methods.setValue('hofMothersName', resData.motherNameEn || '');
  //   methods.setValue('hofFathersName', resData.fatherNameEn || '');
  //   methods.setValue('hofMobileNumber', resData.mobileNumber || '');
  //   methods.setValue('hofUIdRefNo', resData.id ? resData.id.toString() : '');
  //   methods.setValue('hofElectionIdCardNo', resData.epicNumber || '');
  //   methods.setValue('hofGender', resData.gender || '');
  //   const dob = resData.dob ? new Date(resData.dob) : null;
  //   methods.setValue(
  //     'hofDob',
  //     dob
  //       ? {
  //           day: dob.getDate().toString().padStart(2, '0'),
  //           month: (dob.getMonth() + 1).toString().padStart(2, '0'),
  //           year: dob.getFullYear().toString(),
  //         }
  //       : {}
  //   );
  //   methods.setValue('hofAge', resData.age || '');
  //   methods.setValue('hofEmail', resData.emailId || '');
  //   methods.setValue('hofRationLiftingEligibility', resData.hof ? 'Yes' : 'No');
  //   methods.setValue('hofOccupation', resData.occupationStatus || '');
  //   methods.setValue(
  //     'hofTotalAnnualIncome',
  //     resData.annualIncome ? resData.annualIncome.toString() : ''
  //   );
  //   methods.setValue(
  //     'hofIncomeCertificateIdPANId',
  //     resData.incomeCertificateId || ''
  //   );
  //   methods.setValue(
  //     'hofFamilyTotalAnnualIncome',
  //     resData.totalAnnualIncome ? resData.totalAnnualIncome.toString() : ''
  //   );
  //   methods.setValue('hofIdentityProof', '');
  //   methods.setValue('hofIdentityProofFile', []);
  //   methods.setValue('hofAddressProof', '');
  //   methods.setValue('hofAddressProofFile', []);
  //   methods.setValue('hofOthersProof', '');
  //   methods.setValue('hofOthersProofFile', []);
  //   methods.setValue('hofAnyDisability', resData.doYouHaveAnyDisability || '');
  //   methods.setValue('hofDisabilityType', resData.disabilityType || '');
  //   methods.setValue('hofDisabilitybyBirth', '');
  //   methods.setValue('hofDisabilitySince', resData.disabilitySince || '');
  //   methods.setValue('hofDisabilityDueTo', '');
  //   methods.setValue('hofPercentage', resData.disabilityPercentage || '');
  //   methods.setValue(
  //     'hofDisabilityCertificateNo',
  //     resData.uploadCertificateOfDisability || ''
  //   );
  //   methods.setValue('hofCertificateOfDisability', []);
  // }

  // useEffect(() => {
  //   if (!_.isEmpty(rcId) && typeof rcId === 'string') {
  //     getHOfDetailsById(rcId);
  //   }
  // }, [rcId]);

  return (
    <section className="ration-card-registration-other-details hide-scrollbar">
      <RationCardTitle applicationNumber={'RC014673'}>
        Other Details
      </RationCardTitle>
      <RationCardContainerCard title="Caste Category" columns={4}>
        <Controller
          label="Caste Category"
          required={true}
          name="casteCategory"
          type="dropdown"
          options={CasteOptions}
        />
        <Controller
          label="Certification No."
          required={true}
          name="certificationNo"
          type="text"
          disabled={true}
        />
        <Controller
          type="file-upload"
          name="uploadCasteCertificate"
          disabled={true}
          rowSpan={1}
          colSpan={2}
        />
      </RationCardContainerCard>
      <RationCardContainerCard title="Gas & Kerosene Oil Details">
        <Controller
          label="Gas Connection Status"
          required={true}
          name="gasConnectionStatus"
          type="dropdown"
          options={GasConnectionStatusOptions}
        />
        <Controller
          label="Gas Consumer Number"
          required={true}
          name="gasConsumerNo"
          type="text"
          disabled={true}
        />
        <Controller
          label="Gas Company Number"
          required={true}
          name="gasCompanyNo"
          type="text"
          disabled={true}
        />
        <Controller
          label="Gas Agency Name"
          required={true}
          name="gasAgencyName"
          type="dropdown"
          options={GasAgencyNameOptions}
        />
        <Controller
          label="Gas Consumer Name 1"
          required={true}
          name="gasConsumerName1"
          type="text"
          disabled={true}
        />
        <Controller
          label="Gas Consumer Name 2"
          required={true}
          name="gasConsumerName2"
          type="text"
          disabled={true}
        />
        <Controller
          label="No. of Gas Cylinders"
          required={true}
          name="noOfGasCylinders"
          type="dropdown"
          options={gasCylinderNumberOptions}
        />
        <Controller
          label="K. Oil Eligibility"
          required={true}
          name="kOilEligibility"
          type="dropdown"
          options={keroseneOilEligibilityOptions}
        />
      </RationCardContainerCard>
      <RationCardSubSection title="​" columns={3}>
        <Controller
          label="Special Category"
          required={true}
          name="specialCategory"
          type="dropdown"
          options={specialCateoryOptions}
        />
        <Controller
          label="MGNREGA Status"
          required={true}
          name="MGNREGAStatus"
          type="dropdown"
          options={mnregaStatusOptions}
        />
        <Controller
          label="Card Type"
          required={true}
          name="cardType"
          type="dropdown"
          options={cardTypeOptions}
        />
      </RationCardSubSection>
      <RationCardSubSection title="" columns={2}>
        <Controller
          label="FPS Mapping (Recommended)"
          required={true}
          name="fPSMapping"
          type="dropdown"
          options={cardTypeOptions}
        />
        <Controller
          label="Mode of Application (Applied By)"
          required={true}
          name="modeOfApplication"
          type="dropdown"
          options={cardTypeOptions}
        />
      </RationCardSubSection>
      <RationCardSubSection title="" columns={1} rows={3}>
        <Controller
          label="Remarks"
          required={true}
          name="remarks"
          type="textbox"
          colSpan={3}
          rowSpan={3}
        />
      </RationCardSubSection>
    </section>
  );
};

export default OtherDetails;
