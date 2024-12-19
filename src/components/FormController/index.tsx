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
    | 'avatar-upload';
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
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
  options?: { value: string; label: string }[];
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
};

const Controller: FC<ControllerProps> = ({
  name,
  label,
  type,
  id,
  disabled,
  readOnly,
  placeholder,
  children,
  errorMsg,
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
    formState: { errors, touchedFields },
  } = useFormContext();

  const Component = componentMap[type];

  if (!_.isEmpty(Component)) {
    console.error(`Unsupported type: ${type}`);
    return null;
  }

  return (
    <div
      className={`controller-container row-span-${rowSpan} col-span-${colSpan}`}
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
        rules={{ validate }}
        render={({ field }: { field: any }) => (
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
          />
        )}
      />
      {touchedFields[name] && errorMsg && (
        <>
          <span className="controller-error">{errorMsg}</span>
        </>
      )}
    </div>
  );
};

export default Controller;
