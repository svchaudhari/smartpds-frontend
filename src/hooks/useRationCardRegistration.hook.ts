import {
  additionalDetailsDefaultValues,
  addressDetailsDefaultValues,
  hofSchema,
  memberDetailsDefaultValues,
  otherDetailsDefaultValues,
  additionalDetailsSchema,
  addressDetailsSchema,
  hofDefaultValues,
  membersDetailsSchema,
  otherDetailsSchema,
  MemberDetails,
  AddressDetails,
  OtherDetails,
  AdditionalDetails,
} from '../Fixtures/Constants/RationCardRegistration/validationSchema.fixture';
import * as z from 'zod';
import { HashValue } from '../Fixtures/Constants/RationCardRegistration';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postPersonalDetailsCreateUpdateHof } from '../services/rationCardRegistration.services';
import { useSearchParams } from 'react-router';
import _ from 'lodash';

export function useRationCardRegistrationHook(route: HashValue) {
  const [searchParams, setSearchParams] = useSearchParams();
  const rcId = searchParams.get('rcId');

  const methods: UseFormReturn<any> =
    route === 'hof-details'
      ? useForm<z.infer<typeof hofSchema>>({
          resolver: zodResolver(hofSchema),
          mode: 'all',
          defaultValues: hofDefaultValues,
        })
      : route === 'member-details'
        ? useForm<z.infer<typeof membersDetailsSchema>>({
            resolver: zodResolver(membersDetailsSchema),
            mode: 'all',
            defaultValues: memberDetailsDefaultValues,
          })
        : route === 'address-details'
          ? useForm<z.infer<typeof addressDetailsSchema>>({
              resolver: zodResolver(addressDetailsSchema),
              mode: 'all',
              defaultValues: addressDetailsDefaultValues,
            })
          : route === 'other-details'
            ? useForm<z.infer<typeof otherDetailsSchema>>({
                resolver: zodResolver(otherDetailsSchema),
                mode: 'all',
                defaultValues: otherDetailsDefaultValues,
              })
            : useForm<z.infer<typeof additionalDetailsSchema>>({
                resolver: zodResolver(additionalDetailsSchema),
                mode: 'all',
                defaultValues: additionalDetailsDefaultValues,
              });

  /**
               * 
               {
    "hofName": "ho 12",
    "hofSpousesName": "",
    "hofMothersName": "",
    "hofFathersName": "",
    "hofMobileNumber": "",
    "hofUIdRefNo": "",
    "hofElectionIdCardNo": "",
    "hofGender": "",
    "hofDob": {},
    "hofAge": "",
    "hofEmail": "",
    "hofRationLiftingEligibility": "",
    "hofOccupation": "",
    "hofTotalAnnualIncome": "",
    "hofIncomeCertificateIdPANId": "",
    "hofFamilyTotalAnnualIncome": "",
    "hofIdentityProof": "",
    "hofAddressProof": "",
    "hofOthersProof": "",
    "hofAnyDisability": "",
    "hofDisabilityType": "",
    "hofDisabilitybyBirth": "",
    "hofDisabilitySince": "",
    "hofDisabilityDueTo": "",
    "hofPercentage": "",
    "hofDisabilityCertificateNo": ""
}
               */
  async function hofSubmitHandler(data: any) {
    debugger;
    const reqObj: any = {
      fullNameEn: data.hofName,
      age: data.hofAge,
      gender: data.hofGender,
      motherNameEn: data.hofMothersName,
      fatherNameEn: data.hofFathersName,
      mobileNumber: data.hofMobileNumber,
      emailId: data.hofEmail,
      occupationStatus: data.hofOccupation,
      annualIncome: data.hofTotalAnnualIncome,
      totalAnnualIncome: data.hofFamilyTotalAnnualIncome,
      incomeCertificateId: data.hofIncomeCertificateIdPANId,
      doYouHaveAnyDisability: data.hofAnyDisability,
      disabilityType: data.hofDisabilityType,
      disabilityPercentage: data.hofPercentage,
      disabilitySince: data.hofDisabilitySince,
      disabilitySinceYear: data.hofDisabilitySince,
      uploadCertificateOfDisability: data.hofDisabilityCertificateNo,
      isHof: true,
    };
    if (!_.isEmpty(data.hofDob)) {
      reqObj.dob =
        data.hofDob.year + '-' + data.hofDob.month + '-' + data.hofDob.day;
    }
    if (data.hofSpousesName) {
      reqObj.spouseNameEn = data.hofSpousesName;
    }
    if (!_.isEmpty(rcId) && typeof rcId === 'string' && rcId !== 'undefined') {
      reqObj.rcId = rcId;
    }

    try {
      const res = await postPersonalDetailsCreateUpdateHof(reqObj);
      if (_.isEmpty(rcId) || (rcId && rcId != res.id)) {
        searchParams.set('rcId', res.id);
        setSearchParams(searchParams);
      }
    } catch (error: any) {
      console.log('error', error);
    }
  }

  async function memberDetailsSubmitHandler(data: MemberDetails) {
    const dataInArr = [data];
    const reqObj = dataInArr.map((member) => ({
      active: true,
      deleted: false,
      createdBy: 0,
      createdOn: new Date().toISOString(),
      updatedBy: 0,
      updatedOn: new Date().toISOString(),
      id: 0,
      fullNameEn: member.memberName,
      fullNamell: member.memberName,
      dob: member.memberDob?.toString() || null,
      age: '',
      gender: member.memberGender,
      motherNameEn: member.memberMothersName,
      fatherNameEn: member.memberFathersName,
      maritalStatus: '',
      spouseName: '',
      mobileNumber: member.memberMobileNumber,
      otp: '',
      emailId: member.memberEmail,
      nationality: '',
      photograph: 0,
      schemeId: 0,
      disabilityId: 0,
      groupId: '',
      epicNumber: member.memberElectionIdCardNo,
      occupationStatus: member.memberOccupation,
      annualIncome: parseFloat(member.memberTotalAnnualIncome) || 0,
      totalAnnualIncome: parseFloat(member.memberTotalAnnualIncome) || 0,
      incomeCertificateId: member.memberIncomeCertificateIdPANId,
      doYouHaveAnyDisability: member.memberAnyDisability,
      disabilityType: member.memberDisabilityType,
      disabilityPercentage: member.memberPercentage,
      disabilitySince: member.memberDisabilitySince,
      disabilitySinceYear: '',
      uploadCertificateOfDisability: member.memberCertificateOfDisability || '',
      hof: false,
    }));

    console.log(reqObj);
  }

  async function addressDetailsSubmitHandler(addressDetails: AddressDetails) {
    const reqObj = {
      active: true,
      deleted: false,
      createdBy: 0,
      createdOn: new Date().toISOString(),
      updatedBy: 0,
      updatedOn: new Date().toISOString(),
      id: 0,
      rcId: 0,
      addressType: 'Permanent',
      houseNo: addressDetails.addressHouseNo,
      street: addressDetails.addressVillageName,
      landmark: addressDetails.addressLandmark,
      area: addressDetails.addressWard,
      city: addressDetails.addressTaluka,
      postOffice: '',
      tehsilId: 0,
      districtId: 0,
      stateId: 0,
      villageId: 0,
      pincode: addressDetails.addressPincode,
      gramPanchayat: '',
      block: addressDetails.addressBlock,
      nagarPalika: '',
      permanentAddressType: 'Current',
      permanentHouseNo: addressDetails.sameAsPermanentAddress
        ? addressDetails.addressHouseNo
        : addressDetails.addressHouseNo2,
      permanentStreet: addressDetails.sameAsPermanentAddress
        ? addressDetails.addressVillageName
        : addressDetails.addressVillageName2,
      permanentLandmark: addressDetails.sameAsPermanentAddress
        ? addressDetails.addressLandmark
        : addressDetails.addressLandmark2,
      permanentWardNumber: addressDetails.sameAsPermanentAddress
        ? addressDetails.addressWard
        : addressDetails.addressWard2,
      permanentArea: '',
      permanentCity: addressDetails.sameAsPermanentAddress
        ? addressDetails.addressTaluka
        : addressDetails.addressTaluka2,
      permanentPostOffice: '',
      permanentTehsilId: 0,
      permanentDistrictId: 0,
      permanentStateId: 0,
      permanentVillageId: 0,
      permanentPincode: addressDetails.sameAsPermanentAddress
        ? addressDetails.addressPincode
        : addressDetails.addressPincode2,
      permanentGramPanchayat: '',
      permanentBlock: addressDetails.sameAsPermanentAddress
        ? addressDetails.addressBlock
        : addressDetails.addressBlock2,
      permanentNagarPalika: '',
    };

    console.log(reqObj);
  }

  async function otherDetailsSubmitHandler(otherDetails: OtherDetails) {
    const reqObj = {
      active: true,
      deleted: false,
      createdBy: 0,
      createdOn: new Date().toISOString(),
      updatedBy: 0,
      updatedOn: new Date().toISOString(),
      id: 0,
      rcId: 0,
      qualification: '',
      farmerRegistrationDetails: '',
      eshramId: '',
      isPanNumberAvailable: '',
      panNumber: '',
      isGovtEmployee: '',
      gasConnectionStatus: otherDetails.gasConnectionStatus,
      gasConsumerNumber: otherDetails.gasConsumerNo,
      gasConsumerName1: otherDetails.gasConsumerName1,
      gasConsumerName2: otherDetails.gasConsumerName2,
      gasCompanyId: otherDetails.gasCompanyNo,
      gasAgencyId: otherDetails.gasAgencyName,
      numbersOfGasCylinders: otherDetails.noOfGasCylinders,
      nationalPopulationRegisterNumber: '',
      casteCategoryId: otherDetails.casteCategory,
      casteCategoryCertificate: otherDetails.uploadCasteCertificate || '',
      criticalIllness: '',
      criticalIllnessType: '',
      criticalIllnessSince: '',
      criticalIllnessSinceYear: '',
      uploadIllnessDocument: '',
      specialCategory: otherDetails.specialCategory,
      mgnregaStatus: otherDetails.MGNREGAStatus,
      mgnregaId: '',
      remarks: otherDetails.remarks,
      bankId: 0,
      branchId: 0,
      bankAccountNumber: '',
      ifscCode: '',
      govWaterSupply: '',
      gotHomeUsingGovScheme: '',
      govtPension: '',
      electricityConsumerNo: '',
      currentBill: '',
      wetLandDetails: '',
      dryLandDetails: '',
    };

    console.log(reqObj);
  }

  async function additionalDetailsSubmitHandler(
    additionalDetails: AdditionalDetails
  ) {
    const reqObj = {
      active: true,
      deleted: false,
      createdBy: 0,
      createdOn: new Date().toISOString(),
      updatedBy: 0,
      updatedOn: new Date().toISOString(),
      id: 0,
      rcId: 0,
      qualification: '',
      farmerRegistrationDetails: '',
      eshramId: '',
      isPanNumberAvailable: '',
      panNumber: '',
      isGovtEmployee: '',
      gasConnectionStatus: '',
      gasConsumerNumber: '',
      gasConsumerName1: '',
      gasConsumerName2: '',
      gasCompanyId: '',
      gasAgencyId: '',
      numbersOfGasCylinders: '',
      nationalPopulationRegisterNumber: '',
      casteCategoryId: 0,
      casteCategoryCertificate: '',
      criticalIllness: '',
      criticalIllnessType: '',
      criticalIllnessSince: '',
      criticalIllnessSinceYear: '',
      uploadIllnessDocument: '',
      specialCategory: '',
      mgnregaStatus: '',
      mgnregaId: '',
      remarks: '',
      bankId: additionalDetails.bankName,
      branchId: additionalDetails.branchName,
      bankAccountNumber: additionalDetails.bankACNo,
      ifscCode: additionalDetails.ifscCode,
      govWaterSupply: additionalDetails.hasGovtWaterSupply ? 'Yes' : 'No',
      gotHomeUsingGovScheme: additionalDetails.hasGovtHousingScheme
        ? 'Yes'
        : 'No',
      govtPension: additionalDetails.receivingGovtPension ? 'Yes' : 'No',
      electricityConsumerNo: additionalDetails.electricityConsumerNo,
      currentBill: additionalDetails.currentBill,
      wetLandDetails: additionalDetails.wetLandDetails,
      dryLandDetails: additionalDetails.dryLandDetails,
    };

    console.log(reqObj);
  }

  const onSubmitHandler =
    route === 'hof-details'
      ? hofSubmitHandler
      : route === 'member-details'
        ? memberDetailsSubmitHandler
        : route === 'address-details'
          ? addressDetailsSubmitHandler
          : route === 'other-details'
            ? otherDetailsSubmitHandler
            : additionalDetailsSubmitHandler;

  return { methods, onSubmitHandler };
}

export default useRationCardRegistrationHook;
