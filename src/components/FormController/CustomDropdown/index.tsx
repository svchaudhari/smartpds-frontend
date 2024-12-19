import React from 'react';
import './CustomDropdown.css';

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
  return (
    <div className="dropdown-select-container">
      <select
        className="dropdown-select"
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
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
