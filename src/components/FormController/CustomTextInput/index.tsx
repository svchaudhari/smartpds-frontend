import { FC } from 'react';
import './CustomTextInput.css';
import { useFormContext } from 'react-hook-form';

interface CustomTextInputProps {
  field: {
    name: string;
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  field,
  onChange,
  onClick,
  onBlur,
  name,
  readOnly,
  ...props
}) => {
  const {
    formState: { errors, touchedFields, isSubmitted },
  } = useFormContext();

  const errorMessage =
    (touchedFields[field.name] || isSubmitted) && errors[field.name]?.message;

  return (
    <div className={`custom-input-field-wrapper input-field-${field.name}`}>
      <input
        {...field}
        {...props}
        type="text"
        aria-invalid={!!errors[field.name]}
        aria-describedby={
          errors[field.name] ? `${field.name}-error` : undefined
        }
        id={field.name}
        onChange={onChange || field.onChange}
        name={name || field.name}
        onClick={onClick}
        onBlur={onBlur || field.onBlur}
        className={`controller-input ${errorMessage ? 'error' : ''}`}
        value={field.value || ''}
        readOnly={readOnly || false}
      />
      {errorMessage && (
        <span
          id={`${field.name}-error`}
          className="error-message controller-error"
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default CustomTextInput;
