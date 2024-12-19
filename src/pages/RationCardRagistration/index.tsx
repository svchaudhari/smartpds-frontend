import Controller from '../../components/FormController';
import RationCardContainerCard from '../../components/RationCardLayout/Card';
import RationCardTitle from '../../components/RationCardLayout/Title';
import './RationCardRagistration.css';
import { useForm, FormProvider } from 'react-hook-form';

const RationCardRegistration = () => {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <section className="ration-card-registration hide-scrollbar">
      <RationCardTitle applicationNumber={'RC014673'}>
        Head of Family Details
      </RationCardTitle>
      <RationCardContainerCard title="Personal & Professional Details">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Controller
              label="HOF Name"
              required={true}
              name="Head Of Family Name"
              type="text"
              placeholder="Please enter name"
            >
              HOF Name
            </Controller>
            <Controller
              label="Spouse’s Name"
              required={true}
              name="Spouse’s Name"
              type="text"
            >
              Spouse’s Name
            </Controller>

            <Controller
              name="file"
              label="​"
              type="avatar-upload"
              rowSpan={3}
            />
            <Controller
              label="Mother’s Name"
              required={true}
              name="Mother’s Name"
              type="text"
            >
              Mother’s Name
            </Controller>
            <Controller
              label="Father’s Name"
              required={true}
              name="Father’s Name"
              type="text"
            >
              Father’s Name
            </Controller>
            <Controller
              label="Gender"
              required={true}
              name="Gender"
              type="text"
            >
              Gender
            </Controller>
            <Controller
              label="Mobile Number"
              required={true}
              name="Mobile Number"
              type="text"
            >
              Mobile Number
            </Controller>
            <Controller
              label="Date of Birth"
              required={true}
              name="Date of Birth"
              type="text"
            >
              Date of Birth
            </Controller>
            <Controller label="(OR) Age" name="(OR) Age" type="text">
              (OR) Age
            </Controller>
            <Controller
              label="Email Address"
              required={true}
              name="Email Address"
              type="email"
            >
              Email Address
            </Controller>
            <Controller
              label="UID Reference No"
              required={true}
              name="UID Reference No"
              type="text"
            >
              UID Reference No
            </Controller>
            <Controller
              label="Election ID Card No"
              required={true}
              name="Election ID Card No"
              type="text"
            >
              Election ID Card No
            </Controller>
            <Controller
              label="Ration Lifting Eligibility"
              required={true}
              name="Ration Lifting Eligibility"
              type="text"
            >
              Ration Lifting Eligibility
            </Controller>
          </form>
        </FormProvider>
      </RationCardContainerCard>
      <RationCardContainerCard title="Occupation Details" columns={4}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Controller
              label="Occupation"
              required={true}
              name="Occupation"
              type="text"
            >
              Occupation
            </Controller>
            <Controller
              label="Total Annual Income ( in Rs.)"
              required={true}
              name="Total Annual Income ( in Rs.)"
              type="text"
            >
              Total Annual Income ( in Rs.)
            </Controller>

            <Controller
              label="Income Certificate ID / PAN ID"
              name="Income Certificate ID / PAN ID"
              type="text"
            >
              Income Certificate ID / PAN ID
            </Controller>
            <Controller
              label="Family Total Annual Income"
              required={true}
              name="Family Total Annual Income"
              type="text"
            >
              Family Total Annual Income
            </Controller>
          </form>
        </FormProvider>
      </RationCardContainerCard>
      <RationCardContainerCard title="Upload Photo & Documents" columns={2}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Controller
              label="Identity Proof"
              required={true}
              name="Identity Proof"
              type="text"
            >
              Identity Proof
            </Controller>
            <Controller
              type="file-upload"
              name="upload-id-proof"
              // label="​"
              rowSpan={1}
            />
            <Controller
              label="Address Proof"
              required={true}
              name="Address Proof"
              type="text"
            >
              Address Proof
            </Controller>
            <Controller
              type="file-upload"
              name="upload-address-proof"
              // label="​"
              rowSpan={1}
            />
            <Controller label="Others" name="Others" type="text">
              Others
            </Controller>
            <Controller
              type="file-upload"
              name="upload-address-proof"
              // label="​"
              rowSpan={1}
            />
          </form>
        </FormProvider>
      </RationCardContainerCard>
      <RationCardContainerCard title="Disability Details">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Controller
              label="Any Disability"
              required={true}
              name="Any Disability"
              type="text"
            >
              Any Disability
            </Controller>
            <Controller
              label="Disability Type"
              required={true}
              name="Disability Type"
              type="text"
            >
              Disability Type
            </Controller>

            <Controller
              label="Disability Since / Disability by Birth"
              name="Disability Since / Disability by Birth"
              type="text"
            >
              Disability Since / Disability by Birth
            </Controller>
            <Controller
              label="Disability Since"
              required={true}
              name="Disability Since"
              type="text"
            >
              Disability Since
            </Controller>
            <Controller
              label="Disability Due to"
              required={true}
              name="Disability Due to"
              type="text"
            >
              Disability Due to
            </Controller>
            <Controller
              label="Percentage Option%"
              required={true}
              name="Percentage Option%"
              type="text"
            >
              Percentage Option%
            </Controller>
            <Controller
              label="Disability Certificate Number"
              required={true}
              name="Disability Certificate Number"
              type="text"
            >
              Disability Certificate Number
            </Controller>
            <Controller
              type="file-upload"
              name="Upload Certificate of Disability (Issued by CMO)"
              label="Upload Certificate of Disability (Issued by CMO)​"
              rowSpan={2}
              colSpan={2}
            />
          </form>
        </FormProvider>
      </RationCardContainerCard>
    </section>
  );
};

export default RationCardRegistration;
