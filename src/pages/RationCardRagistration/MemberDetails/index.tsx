import './MemberDetails.css';
import RationCardTitle from '../../../components/RationCardLayout/Title';
import RationCardContainerCard from '../../../components/RationCardLayout/Card';
import Controller from '../../../components/FormController';
import RationCardSubSection from '../../../components/RationCardLayout/RationCardSubSection';
import {
  addMemberOption,
  disabilityOptions,
  idProofOptions,
  addressProofOptions,
} from '../../../Fixtures/Constants/RationCardRegistration';
import { CirclePlusIcon } from '../../../components/LogoComponents';
import BinIcon from '../../../components/LogoComponents/BinIcon';
import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { getPersonalDetailsMemberDetailsById } from '../../../services/rationCardRegistration.services';
import _ from 'lodash';
const GenderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'other', value: 'other' },
];
const rationLiftingAllowedOptions = [
  { label: '5 kg', value: '5 kg' },
  { label: '10 kg', value: '10 kg' },
  { label: '15 kg', value: '15 kg' },
];
const occupationOptions = [
  { label: 'Student', value: 'student' },
  { label: 'Farmer', value: 'Farmer' },
  { label: 'Developer', value: 'Developer' },
];

interface Member {
  id: number;
  name: string;
  relationship: string;
  avatar: File | null;
  motherName: string;
  fatherName: string;
  gender: string;
  mobileNo: string;
  dob: string;
  age: string;
  email: string;
  uId: string;
  electionId: string;
  rationLift: string;
  occupation: string;
  totalIncome: string;
  incomeId: string;
  idProof: string;
  idFile: File | null;
  addressProof: string;
  addressFile: File | null;
  others: string;
  othersFile: File | null;
  disabilityRadio: string;
  disability: string;
  disabilityType: string;
  disabilityBirth: string;
  disabilitySince: string;
  disabilityDueTo: string;
  disabilityPercent: string;
  disabilityFile: File | null;
}

const createDefaultMember = (id: number): Member => {
  return {
    id,
    name: '',
    relationship: '',
    avatar: null,
    motherName: '',
    fatherName: '',
    gender: '',
    mobileNo: '',
    dob: '',
    age: '',
    email: '',
    uId: '',
    electionId: '',
    rationLift: '',
    occupation: '',
    totalIncome: '',
    incomeId: '',
    idProof: '',
    idFile: null,
    addressProof: '',
    addressFile: null,
    others: '',
    othersFile: null,
    disabilityRadio: '',
    disability: '',
    disabilityType: '',
    disabilityBirth: '',
    disabilitySince: '',
    disabilityDueTo: '',
    disabilityPercent: '',
    disabilityFile: null,
  };
};
const MemberDetails = () => {
  const { control } = useFormContext();
  const [searchParams] = useSearchParams();
  const rcId = searchParams.get('rcId');

  const idProofUploadStatus = useWatch({
    control,
    name: 'memberIdentityProof',
  });
  const addressProofUploadStatus = useWatch({
    control,
    name: 'memberAddressProof',
  });
  const othersProofUploadStatus = useWatch({
    control,
    name: 'memberOthersProof',
  });

  const [members, setMembers] = useState<Member[]>([createDefaultMember(1)]);

  const addMember = () => {
    const newId =
      members.length > 0
        ? Math.max(...members.map((member) => member.id)) + 1
        : 1;

    setMembers((prevMembers) => [...prevMembers, createDefaultMember(newId)]);
  };

  const removeMember = (id: number) => {
    setMembers((prevMembers) =>
      prevMembers.filter((member) => member.id !== id)
    );
  };

  const disabilityDetails = useWatch({
    control,
    name: members.map((member) => `memberAddDisabilityDetails-${member.id}`),
  });

  async function getMembersDetailsById(rcId: string) {
    // const resData =
    await getPersonalDetailsMemberDetailsById(rcId);
    debugger;
    // resData.forEach((data: any) => {
    //   // setValue('hofName', resData.fullNameEn || '');
    // });
  }
  useEffect(() => {
    if (!_.isEmpty(rcId) && typeof rcId === 'string' && rcId !== 'undefined') {
      getMembersDetailsById(rcId);
    } else {
      // navigate('/ration-card-registration/hof-details');
    }
  }, [rcId]);

  return (
    <section className="ration-card-registration-member-registration hide-scrollbar">
      <RationCardTitle applicationNumber={'RC014673'}>
        Add Member Details
      </RationCardTitle>
      {members.map((member, index) => {
        const currentDisabilityDetails = disabilityDetails[index];
        return (
          <RationCardContainerCard
            key={member.id}
            title={`Member-${member.id}`}
            rightChild={
              members.length > 1 && (
                <div
                  className="bin-icon-container"
                  onClick={() => removeMember(member.id)}
                >
                  <BinIcon />
                </div>
              )
            }
          >
            <Controller
              label="Member Name"
              required={true}
              name={`members[${index}].memberName`}
              type="text"
              value={member.name}
              placeholder="Please enter name"
            />
            <Controller
              label="Relationship with Head of Family"
              required={true}
              name={`members[${index}].memberRelationshipWithHOF`}
              type="text"
              value={member.relationship}
              placeholder="Please enter name"
            />
            <Controller
              name={`members[${index}].memberProfilePic`}
              label="​"
              type="avatar-upload"
              rowSpan={3}
            />
            <Controller
              label="Mother’s Name"
              required={true}
              name={`members[${index}].memberMothersName`}
              value={member.motherName}
              type="text"
            />
            <Controller
              label="Father’s Name"
              required={true}
              name={`members[${index}].memberFathersName`}
              value={member.fatherName}
              type="text"
            />
            <Controller
              label="Gender"
              required={true}
              name={`members[${index}].memberGender`}
              value={member.gender}
              type="dropdown"
              options={GenderOptions}
            />
            <Controller
              label="Mobile Number"
              required={true}
              name={`members[${index}].memberMobileNumber`}
              value={member.mobileNo}
              type="text"
            />
            <Controller
              label="Date of Birth"
              required={true}
              name={`members[${index}].memberDob`}
              value={member.dob}
              type="date-of-birth"
            />
            <Controller
              label="(OR) Age"
              name={`members[${index}].memberAge`}
              value={member.age}
              type="text"
            />
            <Controller
              label="Email Address"
              required={true}
              name={`members[${index}].memberEmail`}
              value={member.email}
              type="email"
            />
            <Controller
              label="UID Reference No"
              required={true}
              name={`members[${index}].memberUIdRefNo`}
              value={member.uId}
              type="text"
            />
            <Controller
              label="Election ID Card No"
              required={true}
              name={`members[${index}].memberElectionIdCardNo`}
              value={member.electionId}
              type="text"
            />
            <Controller
              label="Ration Lifting Eligibility"
              required={true}
              name={`members[${index}].memberRationLiftingEligibility`}
              value={member.rationLift}
              type="dropdown"
              options={rationLiftingAllowedOptions}
            />

            <RationCardSubSection
              colSpan={3}
              title="Occupation Details"
              columns={3}
            >
              <Controller
                label="Occupation"
                required={true}
                name={`members[${index}].memberOccupation`}
                type="dropdown"
                value={member.occupation}
                options={occupationOptions}
              />
              <Controller
                label="Total Annual Income ( in Rs.)"
                required={true}
                name={`members[${index}].memberTotalAnnualIncome`}
                type="text"
                value={member.totalIncome}
              />
              <Controller
                label="Income Certificate ID / PAN ID"
                name={`members[${index}].memberIncomeCertificateIdPANId`}
                type="text"
                value={member.incomeId}
              />
            </RationCardSubSection>
            <RationCardSubSection
              colSpan={3}
              title="Upload Photo & Documents"
              columns={2}
            >
              <Controller
                label="Identity Proof"
                required={true}
                name={`members[${index}].memberIdentityProof`}
                type="dropdown"
                options={idProofOptions}
                value={member.idProof}
              />
              <Controller
                type="file-upload"
                name={`members[${index}].memberIdentityProofFile`}
                disabled={!idProofUploadStatus}
                rowSpan={1}
              />
              <Controller
                label="Address Proof"
                required={true}
                name={`members[${index}].memberAddressProof`}
                type="dropdown"
                options={addressProofOptions}
                value={member.addressProof}
              />
              <Controller
                type="file-upload"
                name={`members[${index}].memberAddressProofFile`}
                disabled={!addressProofUploadStatus}
                rowSpan={1}
              />
              <Controller
                label="Others"
                name={`members[${index}].memberOthersProof`}
                type="dropdown"
                options={addressProofOptions}
                value={member.others}
              />
              <Controller
                type="file-upload"
                name={`members[${index}].memberOthersProofFile`}
                disabled={!othersProofUploadStatus}
                rowSpan={1}
              />
            </RationCardSubSection>
            <RationCardSubSection
              colSpan={3}
              title="Disability Details *"
              columns={2}
            >
              <Controller
                required={true}
                name={`members[${index}].memberAddDisabilityDetails`}
                type="radio"
                options={addMemberOption}
                colSpan={3}
                value={member.disabilityRadio}
              />
              {currentDisabilityDetails === 'yes' && (
                <>
                  <Controller
                    label="Any Disability"
                    required={true}
                    name={`members[${index}].memberAnyDisability`}
                    type="dropdown"
                    options={disabilityOptions}
                    value={member.disability}
                  />
                  <Controller
                    label="Disability Type"
                    required={true}
                    name={`members[${index}].memberDisabilityType`}
                    type="text"
                    value={member.disabilityType}
                  />
                  <Controller
                    label="Disability Since / Disability by Birth"
                    name={`members[${index}].memberDisabilityByBirth`}
                    type="text"
                    value={member.disabilityBirth}
                  />
                  <Controller
                    label="Disability Since"
                    required={true}
                    name={`members[${index}].memberDisabilitySince`}
                    type="text"
                    value={member.disabilitySince}
                  />
                  <Controller
                    label="Disability Due to"
                    required={true}
                    name={`members[${index}].memberDisabilityDueTo`}
                    type="text"
                    value={member.disabilityDueTo}
                  />
                  <Controller
                    label="Percentage Option%"
                    required={true}
                    name={`members[${index}].memberPercentage`}
                    type="text"
                    value={member.disabilityPercent}
                  />
                  <Controller
                    type="file-upload"
                    name={`members[${index}].memberCertificateOfDisability`}
                    label="Upload Certificate of Disability (Issued by CMO)​"
                    rowSpan={2}
                    colSpan={3}
                  />
                </>
              )}
            </RationCardSubSection>
          </RationCardContainerCard>
        );
      })}

      <div className="mt-6 add-member-button-section">
        <button className="" onClick={addMember}>
          <div className="icon-container">
            <CirclePlusIcon />
          </div>
          <p>Add Member</p>
        </button>
      </div>
    </section>
  );
};

export default MemberDetails;
