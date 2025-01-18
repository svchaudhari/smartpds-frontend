import {
  AdditionalDetails,
  AddressDetails,
  HofDetails,
  MemberDetails,
  OtherDetails,
} from '../../Fixtures/Constants/RationCardRegistration/validationSchema.fixture';

export function hofDetailsDto(data: any): HofDetails {
  return {
    hofName: data.fullNameEn || '',
    hofSpousesName: data.spouseName || '',
    hofProfilePic: undefined,
    hofMothersName: data.motherNameEn || '',
    hofFathersName: data.fatherNameEn || '',
    hofMobileNumber: data.mobileNumber || '',
    hofUIdRefNo: data.rcId?.toString() || '',
    hofElectionIdCardNo: data.epicNumber || '',
    hofGender: data.gender || '',
    hofDob: data.dob
      ? {
          day: new Date(data.dob).getDate().toString(),
          month: (new Date(data.dob).getMonth() + 1).toString(),
          year: new Date(data.dob).getFullYear().toString(),
        }
      : {},
    hofAge: data.age || '',
    hofEmail: data.emailId || '',
    hofRationLiftingEligibility: '',
    hofOccupation: data.occupationStatus || '',
    hofTotalAnnualIncome: data.annualIncome?.toString() || '',
    hofIncomeCertificateIdPANId: data.incomeCertificateId || '',
    hofFamilyTotalAnnualIncome: data.totalAnnualIncome?.toString() || '',
    hofIdentityProof: '',
    hofIdentityProofFile: undefined,
    hofAddressProof: '',
    hofAddressProofFile: undefined,
    hofOthersProof: '',
    hofOthersProofFile: undefined,
    hofAnyDisability: data.doYouHaveAnyDisability || '',
    hofDisabilityType: data.disabilityType || '',
    hofDisabilitybyBirth: '',
    hofDisabilitySince: data.disabilitySince || '',
    hofDisabilityDueTo: '',
    hofPercentage: data.disabilityPercentage || '',
    hofDisabilityCertificateNo: data.uploadCertificateOfDisability || '',
    hofCertificateOfDisability: undefined,
  };
}

/**
    {

      "fullNameEn": "string",
      "fullNamell": "string",
      "dob": "2025-01-17T11:55:23.212Z",
      "age": "string",
      "gender": "string",
      "motherNameEn": "string",
      "motherNameLl": "string",
      "fatherNameEn": "string",
      "fatherNameLl": "string",
      "maritalStatus": "string",
      "spouseNameEn": "string",
      "spouseNameLl": "string",
      "mobileNumber": "string",
      "relationshipId": 0,
      "emailId": "string",
      "nationality": "string",
      "photograph": 0,
      "schemeId": 0,
      "groupId": 0,
      "isHof": true,
      "uidReferenceNumber": "string",
      "epicNumber": "string",
      "rationLiftingEligibility": true,
      "occupation": "string",
      "totalAnnualIncome": 0,
      "incomeCertificateId": "string",
      "familyTotalAnnualIncome": 0,
      "doYouHaveAnyDisability": "string",
      "disabilityId": 0,
      "disabilityType": "string",
      "disabilityPercentage": "string",
      "disabilitySince": "string",
      "disabilitySinceYear": "string",
      "uploadCertificateOfDisability": "string",
      "rcId": 0
    } */

export function memberDetailsDto(data: any[]): MemberDetails[] {
  return data.map((resData: any) => ({
    memberName: resData.fullNameEn,
    memberRelationshipWithHOF: 'string',
    memberProfilePic: 'string',
    memberMothersName: 'string',
    memberFathersName: 'string',
    memberGender: 'string',
    memberMobileNumber: 'string',
    memberDob: {},
    memberEmail: 'string',
    memberUIdRefNo: 'string',
    memberElectionIdCardNo: 'string',
    memberRationLiftingEligibility: 'string',
    memberOccupation: 'string',
    memberTotalAnnualIncome: 'string',
    memberIncomeCertificateIdPANId: 'string',
    memberIdentityProof: 'string',
    memberAddressProof: 'string',
    memberOthersProof: 'string',
    memberIdentityProofFile: 'string',
    memberAddressProofFile: 'string',
    memberOthersProofFile: 'string',
    memberAddDisabilityDetails: 'string',
    memberAnyDisability: 'string',
    memberDisabilityType: 'string',
    memberDisabilitybyBirth: 'string',
    memberDisabilitySince: 'string',
    memberDisabilityDueTo: 'string',
    memberPercentage: 'string',
    memberDisabilityCertificateNo: 'string',
    memberCertificateOfDisability: 'string',
  }));
  return [
    {
      memberName: 'string',
      memberRelationshipWithHOF: 'string',
      memberProfilePic: 'string',
      memberMothersName: 'string',
      memberFathersName: 'string',
      memberGender: 'string',
      memberMobileNumber: 'string',
      memberDob: {},
      memberEmail: 'string',
      memberUIdRefNo: 'string',
      memberElectionIdCardNo: 'string',
      memberRationLiftingEligibility: 'string',
      memberOccupation: 'string',
      memberTotalAnnualIncome: 'string',
      memberIncomeCertificateIdPANId: 'string',
      memberIdentityProof: 'string',
      memberAddressProof: 'string',
      memberOthersProof: 'string',
      memberIdentityProofFile: 'string',
      memberAddressProofFile: 'string',
      memberOthersProofFile: 'string',
      memberAddDisabilityDetails: 'string',
      memberAnyDisability: 'string',
      memberDisabilityType: 'string',
      memberDisabilitybyBirth: 'string',
      memberDisabilitySince: 'string',
      memberDisabilityDueTo: 'string',
      memberPercentage: 'string',
      memberDisabilityCertificateNo: 'string',
      memberCertificateOfDisability: 'string',
    },
  ];
}

export function otherDetailsDto(data: any): OtherDetails {
  return {
    casteCategory: data.casteCategoryId.toString(), // Assuming that `casteCategoryId` can be mapped directly
    certificationNo: data.casteCategoryCertificate,
    uploadCasteCertificate: data.casteCategoryCertificate, // If needed, this can be conditionally assigned

    gasConnectionStatus: data.gasConnectionStatus,
    gasConsumerNo: data.gasConsumerNumber,
    gasCompanyNo: data.gasCompanyId,
    gasAgencyName: data.gasAgencyId,
    gasConsumerName1: data.gasConsumerName1,
    gasConsumerName2: data.gasConsumerName2,
    noOfGasCylinders: data.numbersOfGasCylinders,
    kOilEligibility: data.gasConnectionStatus, // This can be mapped based on further details or another attribute

    specialCategory: data.specialCategory,
    MGNREGAStatus: data.mgnregaStatus,
    cardType: data.mgnregaId, // Assuming this is the card type

    fPSMapping: data.fpsMapping || 'string', // Assuming this needs to be added or mapped
    modeOfApplication: 'string', // Placeholder for the mode of application if it's not in the response
    remarks: data.remarks,
  };
}

export function addressDetailsDto(data: any): AddressDetails {
  return {
    addressHouseNo: data.houseNo || 'string',
    addressVillageName: data.area || 'string',
    addressLandmark: data.landmark || 'string',
    addressTaluka: data.tehsilId?.toString() || 'string',
    addressDistrict: data.districtId?.toString() || 'string',
    addressBlock: data.block || 'string',
    addressWard: data.pincode || 'string',
    addressPincode: data.pincode || 'string',

    sameAsPermanentAddress: data.addressType === data.permanentAddressType,

    addressHouseNo2: data.permanentHouseNo || 'string',
    addressVillageName2: data.permanentArea || 'string',
    addressLandmark2: data.permanentLandmark || 'string',
    addressTaluka2: data.permanentTehsilId?.toString() || 'string',
    addressDistrict2: data.permanentDistrictId?.toString() || 'string',
    addressBlock2: data.permanentBlock || 'string',
    addressWard2: data.permanentPincode || 'string',
    addressPincode2: data.permanentPincode || 'string',
  };
}

export function addtionalDetailsDto(data: any): AdditionalDetails {
  return {
    bankName: 'string',
    bankState: 'string',
    bankDistrict: 'string',
    branchName: 'string',
    bankACNo: data.bankAccountNumber,
    ifscCode: data.ifscCode,

    hasGovtWaterSupply: data.govWaterSupply || false,
    hasGovtHousingScheme: data.gotHomeUsingGovScheme || false,
    receivingGovtPension: data.govtPension || false,

    electricityConsumerNo: data.electricityConsumerNo,
    currentBill: data.currentBill,
    wetLandDetails: data.wetLandDetails,
    dryLandDetails: data.dryLandDetails,
  };
}

export default {
  hofDetailsDto,
};
