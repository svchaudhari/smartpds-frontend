import React, { FC } from 'react';
import './CustomCheckbox.css';

interface CustomCheckboxOption {
  value: string | number;
  label: string;
}

interface CustomCheckboxProps {
  id: string;
  field: {
    value: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  label?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  options: CustomCheckboxOption[];
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({
  id,
  field,
  options,
  disabled,
  onChange,
  onBlur,
}) => {
  return (
    <div className={`checkbox-container ${disabled ? 'disabled' : ''}`}>
      {options.map(({ label }) => (
        <React.Fragment key={label}>
          <input
            type="checkbox"
            id={id}
            checked={field.value}
            onChange={(e) => {
              field.onChange(e);
              onChange?.(e);
            }}
            onBlur={(e) => {
              field.onBlur();
              onBlur?.(e);
            }}
            disabled={disabled}
            className="custom-checkbox"
          />
          {label && (
            <label htmlFor={id} className="checkbox-label">
              {label}
            </label>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CustomCheckbox;
