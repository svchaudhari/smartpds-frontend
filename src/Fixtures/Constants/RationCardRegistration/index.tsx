export const completionPercentagesObj = [
  'hof-details',
  'member-details',
  'address-details',
  'other-details',
  'additional-details',
  'preview',
  'track-application',
] as const;
export type HashValue = (typeof completionPercentagesObj)[number];
export type ModuleType = 'RCMS';

export const User_Status = [
  { label: 'Complete', value: 'complete' },
  { label: 'Pending', value: 'pending' },
  { label: 'Processing', value: 'processing' },
];
export const Nationalities = [
  { label: 'Indian', value: 'indian' },
  { label: 'American', value: 'american' },
  { label: 'British', value: 'british' },
  { label: 'Canadian', value: 'canadian' },
  { label: 'Australian', value: 'australian' },
  { label: 'Chinese', value: 'chinese' },
  { label: 'Japanese', value: 'japanese' },
  { label: 'German', value: 'german' },
  { label: 'French', value: 'french' },
  { label: 'Italian', value: 'italian' },
];
export const State_ID_Options = [
  { label: 'HR01', value: 'hr01' },
  { label: 'DL02', value: 'dl02' },
  { label: 'UP03', value: 'up03' },
];

export const GenderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'other', value: 'other' },
];

export const rationLiftingAllowedOptions = [
  { label: '5 kg', value: '5 kg' },
  { label: '10 kg', value: '10 kg' },
  { label: '15 kg', value: '15 kg' },
];

export const occupationOptions = [
  { label: 'Student', value: 'student' },
  { label: 'Farmer', value: 'Farmer' },
  { label: 'Developer', value: 'Developer' },
];

export const idProofOptions = [
  { label: 'Aadhar Card', value: 'aadhar-card' },
  { label: 'Pan Card', value: 'pan-card' },
  { label: 'Passport', value: 'passport' },
];

export const addressProofOptions = [
  { label: 'Aadhar Card', value: 'aadhar-card' },
  { label: 'Pan Card', value: 'pan-card' },
  { label: 'Passport', value: 'passport' },
];
export const disabilityOptions = [
  { label: 'No Disability', value: 'no-disability' },
  { label: 'Partial Disability', value: 'partial-disability' },
  { label: 'Visual Impairment', value: 'visual-impairment' },
  { label: 'Hearing Impairment', value: 'hearing-impairment' },
  { label: 'Speech Impairment', value: 'speech-impairment' },
  { label: 'Mobility Impairment', value: 'mobility-impairment' },
  { label: 'Cognitive Disability', value: 'cognitive-disability' },
  { label: 'Other', value: 'other' },
];
export const addMemberOption = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];
export const villageNameoptions = [
  { label: 'Village A', value: 'village-a' },
  { label: 'Village B', value: 'village-b' },
];
export const BlockNameOptions = [
  { label: 'Block A', value: 'block-a' },
  { label: 'Block B', value: 'block-b' },
];
export const CasteOptions = [
  { label: 'Caste A', value: 'caste-a' },
  { label: 'Caste B', value: 'caste-b' },
];
export const GasConnectionStatusOptions = [
  { label: 'Status A', value: 'status-a' },
  { label: 'Status B', value: 'status-b' },
];
export const GasAgencyNameOptions = [
  { label: 'Gas Agency A', value: 'gas-agency-a' },
  { label: 'Gas Agency B', value: 'gas-agency-b' },
];
export const gasCylinderNumberOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
];
export const keroseneOilEligibilityOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];
export const specialCateoryOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];
export const mnregaStatusOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];
export const cardTypeOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];
export const bankNameOptions = [
  { label: 'Bank A', value: 'bank-a' },
  { label: 'Bank B', value: 'bank-b' },
];
export const stateNameOptions = [
  { label: 'state A', value: 'state-a' },
  { label: 'state B', value: 'state-b' },
];
export const districtNameOptions = [
  { label: 'district A', value: 'district-a' },
  { label: 'district B', value: 'district-b' },
];
export const branchNameOptions = [
  { label: 'branch A', value: 'branch-a' },
  { label: 'branch B', value: 'branch-b' },
];
export default {
  GenderOptions,
  completionPercentagesObj,
  rationLiftingAllowedOptions,
  occupationOptions,
  idProofOptions,
  addressProofOptions,
  disabilityOptions,
  addMemberOption,
  villageNameoptions,
  BlockNameOptions,
  CasteOptions,
  GasConnectionStatusOptions,
  GasAgencyNameOptions,
  gasCylinderNumberOptions,
  keroseneOilEligibilityOptions,
  specialCateoryOptions,
  mnregaStatusOptions,
  cardTypeOptions,
  bankNameOptions,
  stateNameOptions,
  districtNameOptions,
  branchNameOptions,
};
