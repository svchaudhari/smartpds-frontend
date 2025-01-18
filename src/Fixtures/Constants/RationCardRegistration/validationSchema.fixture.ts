import * as z from 'zod';
import { DateOfBirth } from '../../../components/FormController/CustomDateOfBirthDropDown';
// Check file size
// const MIN_FILE_SIZE = 50 * 1024; // 50KB
// const MAX_FILE_SIZE = 300 * 1024; // 300KB
// const ACCEPTED_MIME_TYPES = [
//   'image/jpeg',
//   'image/jpg',
//   'image/png',
//   'image/webp',
// ];
/**
 * Head of Family Form Schema
 */
export const hofNameSchema = z
  .string()
  .min(3, 'HOF Name must be at least 3 characters')
  .max(20, 'HOF Name cannot exceed 20 characters')
  .refine((value) => value !== 'Invalid Name', {
    message: 'Custom validation: Invalid Name is not allowed',
  });
export const spouseNameSchema = z
  .string()
  .min(3, `Spouse’s Name must be at least 3 characters`)
  .max(20, `Spouse’s Name cannot exceed 20 characters`)
  .refine((value) => value !== 'Invalid Name', {
    message: 'Custom validation: Invalid Name is not allowed',
  });

export const profilePicSchema = z.any();
// .instanceof(File)
// .optional()
// .superRefine((f, ctx) => {
//   if (!f) {
//     ctx.addIssue({
//       code: z.ZodIssueCode.custom,
//       message: `${ctx.path[0]} is empty`,
//     });
//     return;
//   }

//   if (!ACCEPTED_MIME_TYPES.includes(f.type)) {
//     ctx.addIssue({
//       code: z.ZodIssueCode.custom,
//       message: `File must be one of [${ACCEPTED_MIME_TYPES.join(
//         ', '
//       )}] but was ${f.type}`,
//     });
//   }

//   if (f.size < MIN_FILE_SIZE) {
//     ctx.addIssue({
//       code: z.ZodIssueCode.too_small,
//       type: 'array',
//       message: `File must be at least ${MIN_FILE_SIZE} bytes, but was ${f.size}`,
//       minimum: MIN_FILE_SIZE,
//       inclusive: true,
//     });
//   }

//   if (f.size > MAX_FILE_SIZE) {
//     ctx.addIssue({
//       code: z.ZodIssueCode.too_big,
//       type: 'array',
//       message: `File must not be larger than ${MAX_FILE_SIZE} bytes: ${f.size}`,
//       maximum: MAX_FILE_SIZE,
//       inclusive: true,
//     });
//   }
// });

export const mothersNameSchema = z
  .string()
  .min(3, 'Mother’s Name must be at least 3 characters')
  .max(30, 'Mother’s Name cannot exceed 30 characters')
  .refine((value) => value !== 'Invalid Name', {
    message: 'Custom validation: Invalid Name is not allowed',
  });
export const fathersNameSchema = z
  .string()
  .min(3, 'Father’s Name must be at least 3 characters')
  .max(30, 'Father’s Name cannot exceed 30 characters')
  .refine((value) => value !== 'Invalid Name', {
    message: 'Custom validation: Invalid Name is not allowed',
  });

export const memberNameSchema = z
  .string()
  .min(3, 'Member Name must be at least 3 characters')
  .max(20, 'Member Name cannot exceed 20 characters')
  .refine((value) => value !== 'Invalid Name', {
    message: 'Custom validation: Invalid Name is not allowed',
  });

export const relationshipWithHOFSchema = z
  .string()
  .min(3, 'Relationship must be specified')
  .max(20, 'Relationship cannot exceed 20 characters')
  .refine((value) => value !== 'Invalid Name', {
    message: 'Custom validation: Invalid Name is not allowed',
  });

export const genderSchema = z
  .string()
  .min(1, 'Gender is required')
  .refine((value) => value !== 'Select', {
    message: 'Please select a valid gender',
  });

export const ageSchema = z
  .string()
  .min(1, 'Age is required')
  .max(100, 'Age cannot exceed the limit')
  .refine((value) => !isNaN(Number(value)), {
    message: 'Age must be a valid number',
  })
  .refine((value) => value !== 'Select', {
    message: 'Enter a valid age',
  });

export const mobileNumberSchema = z
  .string()
  .min(10, 'Mobile Number must be at least 10 digits')
  .max(15, 'Mobile Number cannot exceed 15 digits')
  .regex(/^[0-9]{10,15}$/, 'Mobile Number must be a valid number')
  .refine((value) => value !== 'Invalid Number', {
    message: 'Custom validation: Invalid Mobile Number is not allowed',
  });

export const uIdRefNoSchema = z
  .string()
  .min(12, 'UID Reference No must be at least 12 characters')
  .max(12, 'UID Reference No cannot exceed 12 characters')
  .regex(/^[A-Za-z0-9]+$/, 'UID Reference No must be alphanumeric')
  .refine((value) => value !== 'Invalid UID', {
    message: 'Custom validation: Invalid UID Reference No is not allowed',
  });
export const electionIdCardNoSchema = z
  .string()
  .min(10, 'Election ID Card No must be at least 10 characters')
  .max(20, 'Election ID Card No cannot exceed 20 characters')
  .regex(/^[A-Za-z0-9]+$/, 'Election ID Card No must be alphanumeric')
  .refine((value) => value !== 'Invalid Election ID', {
    message: 'Custom validation: Invalid Election ID Card No is not allowed',
  });
// export const electionIdCardNoSchema = z
//   .string()
//   .min(10, 'Election ID Card No must be at least 10 characters')
//   .max(20, 'Election ID Card No cannot exceed 20 characters')
//   .regex(/^[A-Za-z0-9]+$/, 'Election ID Card No must be alphanumeric')
//   .refine((value) => value !== 'Invalid Election ID', {
//     message: 'Custom validation: Invalid Election ID Card No is not allowed',
//   });

export const dobSchema = z
  .string()
  .min(1, 'Date of birth is required')
  .refine((value) => value !== 'Select', {
    message: 'Please select a valid date of birth',
  });

export const emailSchema = z
  .string()
  .email('Please provide a valid email address')
  .min(5, 'Email address must be at least 5 characters')
  .max(100, 'Email address cannot exceed 100 characters');

export const rationLiftingEligibilitySchema = z
  .string()
  .min(1, 'Ration lifting ability is required')
  .refine((value) => value !== 'Select', {
    message: 'Please select a valid ration lifting ability',
  });

export const occupationSchema = z
  .string()
  .min(1, 'Occupation is required')
  .refine((value) => value !== 'Select', {
    message: 'Please select a valid occupation',
  });

export const totalAnnualIncomeSchema = z
  .string()
  .min(1, 'Total annual income must be a positive number')
  .max(1000000000, 'Total annual income cannot exceed ₹100 crore')
  .refine((value) => !isNaN(Number(value)), {
    message: 'Total annual income must be a valid number',
  });

export const familyTotalAnnualIncomeSchema = z
  .string()
  .min(1, 'Family total annual income must be a positive number')
  .max(1000000000, 'Family total annual income cannot exceed 100 crore')
  .refine((value) => !isNaN(Number(value)), {
    message: 'Family total annual income must be a valid number',
  });

export const identityProofSchema = z
  .string()
  .min(1, 'Identity proof is required')
  .refine((value) => value !== 'Select', {
    message: 'Please select a valid identity proof',
  });

export const addressProofSchema = z
  .string()
  .min(1, 'Address proof is required')
  .refine((value) => value !== 'Select', {
    message: 'Please select a valid address proof',
  });

export const anyDisabilitySchema = z
  .string()
  .min(1, 'Disability status is required')
  .refine((value) => value !== 'Select', {
    message: 'Please select whether you have a disability',
  });

export const hofSchema = z.object({
  hofName: z.string().optional(),
  hofSpousesName: z.string().optional(),
  hofProfilePic: z.any(),
  hofMothersName: z.string().optional(),
  hofFathersName: z.string().optional(),
  hofMobileNumber: z.string().optional(),
  hofUIdRefNo: z.string().optional(),
  hofElectionIdCardNo: z.string().optional(),
  hofGender: z.string().optional(),
  hofDob: z
    .object({
      day: z.string().optional(),
      month: z.string().optional(),
      year: z.string().optional(),
    })
    .optional()
    .default({}),
  hofAge: z.string().optional(),
  hofEmail: z.string().optional(),
  hofRationLiftingEligibility: z.string().optional(),

  hofOccupation: z.string().optional(),
  hofTotalAnnualIncome: z.string().optional(),
  hofIncomeCertificateIdPANId: z.string().optional(),
  hofFamilyTotalAnnualIncome: z.string().optional(),

  hofIdentityProof: z.string().optional(),
  hofIdentityProofFile: z.array(z.instanceof(File)).optional(),
  hofAddressProof: z.string().optional(),
  hofAddressProofFile: z.array(z.instanceof(File)).optional(),
  hofOthersProof: z.string().optional(),
  hofOthersProofFile: z.array(z.instanceof(File)).optional(),

  hofAnyDisability: z.string().optional(),
  hofDisabilityType: z.string().optional(),
  hofDisabilitybyBirth: z.string().optional(),
  hofDisabilitySince: z.string().optional(),
  hofDisabilityDueTo: z.string().optional(),
  hofPercentage: z.string().optional(),
  hofDisabilityCertificateNo: z.string().optional(),
  hofCertificateOfDisability: z.array(z.instanceof(File)).optional(),
});

export const schema = z.object({
  hofName: z
    .string()
    .nonempty('HOF Name is required')
    .min(3, 'HOF Name must be at least 3 characters')
    .max(20, 'HOF Name must be at most 20 characters')
    .refine((value) => value !== 'Invalid Name', {
      message: "HOF Name cannot be 'Invalid Name'",
    }),
});

// Schema type
export type FormSchema = z.infer<typeof schema>;

/**
 * Family Members Form Schema
 */
export const membersDetailsSchema = z.object({
  members: z
    .array(
      z.object({
        memberName: z.string().optional(),
        memberRelationshipWithHOF: z.string().optional(),
        memberProfilePic: z.array(z.instanceof(File)).optional(),
        memberMothersName: z.string().optional(),
        memberFathersName: z.string().optional(),
        memberGender: z.string().optional(),
        memberMobileNumber: z.string().optional(),
        memberDob: z
          .object({
            day: z.string().optional(),
            month: z.string().optional(),
            year: z.string().optional(),
          })
          .optional()
          .default({}),

        memberEmail: z.string().optional(),
        memberUIdRefNo: z.string().optional(),
        memberElectionIdCardNo: z.string().optional(),
        memberRationLiftingEligibility: z.string().optional(),
        memberOccupation: z.string().optional(),
        memberTotalAnnualIncome: z.string().optional(),
        memberIncomeCertificateIdPANId: z.string().optional(),

        memberIdentityProof: z.string().optional(),
        memberAddressProof: z.string().optional(),
        memberOthersProof: z.string().optional(),
        memberIdentityProofFile: z.array(z.instanceof(File)).optional(),
        memberAddressProofFile: z.array(z.instanceof(File)).optional(),
        memberOthersProofFile: z.array(z.instanceof(File)).optional(),

        memberAddDisabilityDetails: z.enum(['yes', 'no']).optional(),
        memberAnyDisability: z.string().optional(),
        memberDisabilityType: z.string().optional(),
        memberDisabilitybyBirth: z.string().optional(),
        memberDisabilitySince: z.string().optional(),
        memberDisabilityDueTo: z.string().optional(),
        memberPercentage: z.string().optional(),
        memberDisabilityCertificateNo: z.string().optional(),
        memberCertificateOfDisability: z.array(z.instanceof(File)).optional(),
      })
    )
    .nonempty(),
});

/**
 * Address Details Form Schema
 */
export const addressDetailsSchema = z.object({
  addressHouseNo: z.string().optional(),
  addressVillageName: z.string().optional(),
  addressLandmark: z.string().optional(),
  addressTaluka: z.string().optional(),
  addressDistrict: z.string().optional(),
  addressBlock: z.string().optional(),
  addressWard: z.string().optional(),
  addressPincode: z.string().optional(),

  sameAsPresentAddress: z.boolean().optional(),

  addressHouseNo2: z.string().optional(),
  addressVillageName2: z.string().optional(),
  addressLandmark2: z.string().optional(),
  addressTaluka2: z.string().optional(),
  addressDistrict2: z.string().optional(),
  addressBlock2: z.string().optional(),
  addressWard2: z.string().optional(),
  addressPincode2: z.string().optional(),
});
/**
 * Other Details Form Schema
 */
export const otherDetailsSchema = z.object({
  casteCategory: z.string().optional(),
  certificationNo: z.string().optional(),
  uploadCasteCertificate: z.array(z.instanceof(File)).optional(),

  gasConnectionStatus: z.string().optional(),
  gasConsumerNo: z.string().optional(),
  gasCompanyNo: z.string().optional(),
  gasAgencyName: z.string().optional(),
  gasConsumerName1: z.string().optional(),
  gasConsumerName2: z.string().optional(),
  noOfGasCylinders: z.string().optional(),
  kOilEligibility: z.string().optional(),

  specialCategory: z.string().optional(),
  MGNREGAStatus: z.string().optional(),
  cardType: z.string().optional(),

  fPSMapping: z.string().optional(),
  modeOfApplication: z.string().optional(),
  remarks: z.string().optional(),
});

/**
 * Additional Details Form Schema
 */
export const additionalDetailsSchema = z.object({
  bankName: z.string().optional(),
  bankState: z.string().optional(),
  bankDistrict: z.string().optional(),
  branchName: z.string().optional(),
  bankACNo: z.string().optional(),
  ifscCode: z.string().optional(),

  hasGovtWaterSupply: z.enum(['yes', 'no']).optional(),
  hasGovtHousingScheme: z.enum(['yes', 'no']).optional(),
  receivingGovtPension: z.enum(['yes', 'no']).optional(),

  electricityConsumerNo: z.string().optional(),
  currentBill: z.string().optional(),
  wetLandDetails: z.string().optional(),
  dryLandDetails: z.string().optional(),
});

/**
 * @name defaultValues Default Values for RCMS pages
 */

/**
 * Head of Family Default Values
 */
export const hofDefaultValues: z.infer<typeof hofSchema> = {
  hofName: '',
  hofSpousesName: '',
  hofProfilePic: undefined,
  hofMothersName: '',
  hofFathersName: '',
  hofMobileNumber: '',
  hofUIdRefNo: '',
  hofElectionIdCardNo: '',
  hofGender: '',
  hofDob: {},
  hofAge: '',
  hofEmail: '',
  hofRationLiftingEligibility: '',

  hofOccupation: '',
  hofTotalAnnualIncome: '',
  hofIncomeCertificateIdPANId: '',
  hofFamilyTotalAnnualIncome: '',

  hofIdentityProof: '',
  hofIdentityProofFile: undefined,
  hofAddressProof: '',
  hofAddressProofFile: undefined,
  hofOthersProof: '',
  hofOthersProofFile: undefined,

  hofAnyDisability: '',
  hofDisabilityType: '',
  hofDisabilitybyBirth: '',
  hofDisabilitySince: '',
  hofDisabilityDueTo: '',
  hofPercentage: '',
  hofDisabilityCertificateNo: '',
  hofCertificateOfDisability: undefined,
};

/**
 * Family Members Default Values
 */
export const memberDetailsDefaultValues: z.infer<typeof membersDetailsSchema> =
  {
    members: [
      {
        memberName: '',
        memberRelationshipWithHOF: '',
        memberProfilePic: undefined,
        memberMothersName: '',
        memberFathersName: '',
        memberGender: '',
        memberMobileNumber: '',
        memberDob: {},
        memberEmail: '',
        memberUIdRefNo: '',
        memberElectionIdCardNo: '',
        memberRationLiftingEligibility: '',
        memberOccupation: '',
        memberTotalAnnualIncome: '',
        memberIncomeCertificateIdPANId: '',
        memberIdentityProof: '',
        memberAddressProof: '',
        memberOthersProof: '',
        memberIdentityProofFile: undefined,
        memberAddressProofFile: undefined,
        memberOthersProofFile: undefined,
        memberAddDisabilityDetails: undefined,
        memberAnyDisability: '',
        memberDisabilityType: '',
        memberDisabilitybyBirth: '',
        memberDisabilitySince: '',
        memberDisabilityDueTo: '',
        memberPercentage: '',
        memberDisabilityCertificateNo: '',
        memberCertificateOfDisability: undefined,
      },
    ],
  };

/**
 * Address Details Default Values
 */
export const addressDetailsDefaultValues: z.infer<typeof addressDetailsSchema> =
  {
    addressHouseNo: '',
    addressVillageName: '',
    addressLandmark: '',
    addressTaluka: '',
    addressDistrict: '',
    addressBlock: '',
    addressWard: '',
    addressPincode: '',

    sameAsPresentAddress: false,

    addressHouseNo2: '',
    addressVillageName2: '',
    addressLandmark2: '',
    addressTaluka2: '',
    addressDistrict2: '',
    addressBlock2: '',
    addressWard2: '',
    addressPincode2: '',
  };

/**
 * Other Details Default Values
 */
export const otherDetailsDefaultValues: z.infer<typeof otherDetailsSchema> = {
  casteCategory: '',
  certificationNo: '',
  uploadCasteCertificate: undefined,

  gasConnectionStatus: '',
  gasConsumerNo: '',
  gasCompanyNo: '',
  gasAgencyName: '',
  gasConsumerName1: '',
  gasConsumerName2: '',
  noOfGasCylinders: '',
  kOilEligibility: '',

  specialCategory: '',
  MGNREGAStatus: '',
  cardType: '',

  fPSMapping: '',
  modeOfApplication: '',
  remarks: '',
};

/**
 * Additional Details Default Values
 */
export const additionalDetailsDefaultValues: z.infer<
  typeof additionalDetailsSchema
> = {
  bankName: '',
  bankState: '',
  bankDistrict: '',
  branchName: '',
  bankACNo: '',
  ifscCode: '',

  hasGovtWaterSupply: undefined,
  hasGovtHousingScheme: undefined,
  receivingGovtPension: undefined,

  electricityConsumerNo: '',
  currentBill: '',
  wetLandDetails: '',
  dryLandDetails: '',
};
export type HofDetails = {
  hofName: string;
  hofSpousesName: string;
  hofProfilePic: File | undefined;
  hofMothersName: string;
  hofFathersName: string;
  hofMobileNumber: string;
  hofUIdRefNo: string;
  hofElectionIdCardNo: string;
  hofGender: string;
  hofDob: DateOfBirth;
  hofAge: string;
  hofEmail: string;
  hofRationLiftingEligibility: string;

  hofOccupation: string;
  hofTotalAnnualIncome: string;
  hofIncomeCertificateIdPANId: string;
  hofFamilyTotalAnnualIncome: string;

  hofIdentityProof: string;
  hofIdentityProofFile: File | undefined;
  hofAddressProof: string;
  hofAddressProofFile: File | undefined;
  hofOthersProof: string;
  hofOthersProofFile: File | undefined;

  hofAnyDisability: string;
  hofDisabilityType: string;
  hofDisabilitybyBirth: string;
  hofDisabilitySince: string;
  hofDisabilityDueTo: string;
  hofPercentage: string;
  hofDisabilityCertificateNo: string;
  hofCertificateOfDisability: File | undefined;
};

export type MemberDetails = {
  memberName: string;
  memberRelationshipWithHOF: string;
  memberProfilePic: string | undefined;
  memberMothersName: string;
  memberFathersName: string;
  memberGender: string;
  memberMobileNumber: string;
  memberDob: DateOfBirth;
  memberEmail: string;
  memberUIdRefNo: string;
  memberElectionIdCardNo: string;
  memberRationLiftingEligibility: string;
  memberOccupation: string;
  memberTotalAnnualIncome: string;
  memberIncomeCertificateIdPANId: string;
  memberIdentityProof: string;
  memberAddressProof: string;
  memberOthersProof: string;
  memberIdentityProofFile: string | undefined;
  memberAddressProofFile: string | undefined;
  memberOthersProofFile: string | undefined;
  memberAddDisabilityDetails: string | undefined;
  memberAnyDisability: string;
  memberDisabilityType: string;
  memberDisabilitybyBirth: string;
  memberDisabilitySince: string;
  memberDisabilityDueTo: string;
  memberPercentage: string;
  memberDisabilityCertificateNo: string;
  memberCertificateOfDisability: string | undefined;
};

export type AddressDetails = {
  addressHouseNo: string;
  addressVillageName: string;
  addressLandmark: string;
  addressTaluka: string;
  addressDistrict: string;
  addressBlock: string;
  addressWard: string;
  addressPincode: string;

  sameAsPermanentAddress: boolean;

  addressHouseNo2: string;
  addressVillageName2: string;
  addressLandmark2: string;
  addressTaluka2: string;
  addressDistrict2: string;
  addressBlock2: string;
  addressWard2: string;
  addressPincode2: string;
};

export type OtherDetails = {
  casteCategory: string;
  certificationNo: string;
  uploadCasteCertificate?: string;

  gasConnectionStatus: string;
  gasConsumerNo: string;
  gasCompanyNo: string;
  gasAgencyName: string;
  gasConsumerName1: string;
  gasConsumerName2: string;
  noOfGasCylinders: string;
  kOilEligibility: string;

  specialCategory: string;
  MGNREGAStatus: string;
  cardType: string;

  fPSMapping: string;
  modeOfApplication: string;
  remarks: string;
};

export type AdditionalDetails = {
  bankName: string;
  bankState: string;
  bankDistrict: string;
  branchName: string;
  bankACNo: string;
  ifscCode: string;

  hasGovtWaterSupply?: boolean;
  hasGovtHousingScheme?: boolean;
  receivingGovtPension?: boolean;

  electricityConsumerNo: string;
  currentBill: string;
  wetLandDetails: string;
  dryLandDetails: string;
};

export default {
  hofNameSchema,
  hofSchema,
  membersDetailsSchema,
  addressDetailsSchema,
  otherDetailsSchema,
  additionalDetailsSchema,
  hofDefaultValues,
  memberDetailsDefaultValues,
  addressDetailsDefaultValues,
  otherDetailsDefaultValues,
  additionalDetailsDefaultValues,
};
