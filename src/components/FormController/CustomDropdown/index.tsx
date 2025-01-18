import React from 'react';
import './CustomDropdown.css';
import { useFormContext } from 'react-hook-form';

interface CustomDropdownProps {
  options: { label: string; value: string | number }[];
  field: any;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  field,
  disabled,
  onChange,
  onBlur,
}) => {
  const {
    formState: { errors, touchedFields, isSubmitted },
  } = useFormContext();

  const errorMessage = (touchedFields[field.name] || isSubmitted) && errors[field.name]?.message;

  return (
    <div className="dropdown-select-container">
      <select
        className={`dropdown-select ${errorMessage ? 'error' : ''}`}
        onChange={(e) => {
          field.onChange(e);
          onChange?.(e);
        }}
        onBlur={(e) => {
          field.onBlur(e);
          onBlur?.(e);
        }}
        disabled={disabled}
        value={field.value || ''}
        aria-invalid={!!errors[field.name]}
        aria-describedby={errorMessage ? `${field.name}-error` : undefined}
        name={field.name}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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

export default CustomDropdown;
