import { useSearchParams } from 'react-router';
import Controller from '../../components/FormController';
import RationCardContainerCard from '../../components/RationCardLayout/Card';
import { FormProvider, useForm } from 'react-hook-form';
import {
  GenderOptions,
  Nationalities,
} from '../../Fixtures/Constants/RationCardRegistration';
import './NewUserRegister.css';
import NewUserRegisterFooter from './NewUserRegisterFooter';
import { useEffect } from 'react';
import _ from 'lodash';

const NewUserRegister = () => {
  const methods = useForm(); // Initialize form methods
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  useEffect(() => {
    if (userId) {
      getHOfDetailsById();
    }
  }, [userId]);

  async function getHOfDetailsById() {
    // Fetch logic here
  }

  return (
    <div className="flex justify-center h-full">
      <FormProvider {...methods}>
        <section className="new-user-register hide-scrollbar max-w-default">
          <div className="mt-5 font-bold text-xl text-center">
            New Registration Page
          </div>
          <RationCardContainerCard title="Personal Details">
            <Controller
              label="User Name(In English)"
              required={true}
              name="userNameEng"
              type="text"
              placeholder="Please enter user name"
            />
            <Controller
              label="User Name(In Local)"
              required={true}
              name="userNameLcl"
              type="text"
              placeholder="Please enter User name"
            />
            <Controller
              label="Invitation Code"
              required={true}
              name="invtCode"
              type="text"
              placeholder="Please enter invitation code"
            />
            <Controller
              label="Mother's Name(In English)"
              required={true}
              name="motherNameEng"
              type="text"
              placeholder="Please enter Mother's name"
            />
            <Controller
              label="Mother's Name(In Local)"
              required={true}
              name="motherNameLcl"
              type="text"
              placeholder="Please enter Mother's name"
            />
            <Controller
              label="Remarks"
              required={true}
              name="remarks"
              type="text"
              placeholder="Please enter remarks"
            />
            <Controller
              label="Father's Name(In English)"
              required={true}
              name="fatherNameEng"
              type="text"
              placeholder="Please enter Father's name"
            />
            <Controller
              label="Father's Name(In Local)"
              required={true}
              name="fatherNameLcl"
              type="text"
              placeholder="Please enter Father's name"
            />
            <Controller
              label="Date of Birth"
              required={true}
              name="dob"
              type="date-of-birth"
              placeholder="Please enter name"
            />
            <Controller
              label="Gender"
              required={true}
              name="gender"
              type="dropdown"
              options={GenderOptions}
            />
            <Controller
              label="Nationality"
              required={true}
              name="nationality"
              type="dropdown"
              options={Nationalities}
            />
            <Controller
              label="Mobile Number"
              required={true}
              name="nationality"
              type="number"
              placeholder="Please enter name"
            />
            <Controller
              label="Email"
              required={true}
              name="email"
              type="email"
              placeholder="Please enter email"
            />
            <div className="flex flex-col">
              <Controller
                label="UIDAI/Aadhar No/VID"
                required={true}
                name="aadhar"
                type="text"
                placeholder="Please enter UIDAI/Aadhar No/VID"
              />
              <p className="cursor-pointer text-end text-sm">
                Verify your Aadhar
              </p>
            </div>
            <Controller
              name="iAgree"
              type="checkbox"
              colSpan={2}
              options={[
                {
                  label:
                    'I agree to the terms and conditions and give my conset to store my Aadhar number in encrypted format to use various authentication services provided in the PDS application software',
                  value: 'i agree',
                },
              ]}
            />
            <Controller
              name="iDeclare"
              type="checkbox"
              colSpan={2}
              options={[
                {
                  label:
                    'I her by declare that the details furnished above are true and correct to the best of my knowledge and belief and I undertake to inform you of any changes therein, immediately.',
                  value: 'i declare',
                },
              ]}
            />
            <div className="flex flex-col">
              <Controller
                label="Preferred Login Id"
                required={true}
                name="loginId"
                type="text"
                placeholder="Please enter login id"
              />
              <p className="cursor-pointer text-end text-sm">
                Check Availability
              </p>
            </div>
            <Controller
              label="Captcha"
              required={true}
              name="captcha"
              type="text"
              placeholder="Please enter captcha"
            />
            {/* Other controllers */}
          </RationCardContainerCard>
          <NewUserRegisterFooter />
          {/* <DisabilityDetails />
          <UploadDocuments /> */}
        </section>
      </FormProvider>
    </div>
  );
};

export default NewUserRegister;
