import { FC } from 'react';
import { useFormContext, Controller as RHFController } from 'react-hook-form';
import './FormController.css';
import CustomTextInput from './CustomTextInput';
import CustomTextBox from './CustomTextBox';
import CustomNumberInput from './CustomNumberInput';
import CustomEmailInput from './CustomEmailInput';
import CustomFileUpload from './CustomFileUpload';
import * as _ from 'lodash';
import CustomAvatarFileUpload from './CustomAvatarFileUpload';
import CustomDateOfBirthDropDown from './CustomDateOfBirthDropDown';
import CustomDropdown from './CustomDropdown';
import CustomRadioButtons from './CustomRadioButtons';
import CustomCheckbox from './CustomCheckbox';
import CustomOtpInput from './CustomOtpInput';
import CustomToggle from './CustomToggle';
// import { DevTool } from '@hookform/devtools';

interface ControllerProps {
  name: string;
  label?: string;
  type:
    | 'text'
    | 'textbox'
    | 'number'
    | 'email'
    | 'date-of-birth'
    | 'dropdown'
    | 'file-upload'
    | 'avatar-upload'
    | 'radio'
    | 'checkbox'
    | 'otp'
    | 'toggle';
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  length?: number;
  value?: number | string;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  errorMsg?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClick?: (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  validate?: (value: any) => string | boolean;
  options?: { value: string | boolean; label: string }[];
}

const componentMap: Record<string, FC<any>> = {
  text: CustomTextInput,
  textbox: CustomTextBox,
  number: CustomNumberInput,
  email: CustomEmailInput,
  'file-upload': CustomFileUpload,
  'avatar-upload': CustomAvatarFileUpload,
  'date-of-birth': CustomDateOfBirthDropDown,
  dropdown: CustomDropdown,
  radio: CustomRadioButtons,
  checkbox: CustomCheckbox,
  otp: CustomOtpInput,
  toggle: CustomToggle,
};

const Controller: FC<ControllerProps> = ({
  name,
  label,
  type,
  id,
  length,
  disabled,
  readOnly,
  placeholder,
  children,
  onChange,
  onClick,
  onBlur,
  validate,
  options,
  colSpan = 1,
  rowSpan = 1,
  required = false,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const Component = componentMap[type];

  if (!_.isEmpty(Component)) {
    console.error(`Unsupported type: ${type}`);
    return null;
  }

  return (
    <>
      <div
        className={`controller-container row-span-${rowSpan} col-span-${colSpan} `}
      >
        {label && (
          <label
            htmlFor={id || name}
            className={`controller-label ${disabled && 'disabled'}`}
          >
            {label}
            {required && <span className="required-mark"> *</span>}
          </label>
        )}
        {!label && children && children}
        <RHFController
          name={name}
          control={control}
          rules={{ validate, required }}
          render={({ field }: { field: any; fieldState: any }) => (
            <Component
              id={id || name}
              field={field}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={placeholder}
              className={`controller-input ${errors[name] ? 'error' : ''}`}
              onChange={onChange}
              onClick={onClick}
              onBlur={onBlur}
              options={options}
              length={length}
              name={name}
            />
          )}
        />
      </div>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default Controller;
