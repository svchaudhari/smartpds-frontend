import { FC } from 'react';
import './CustomRadioButtons.css';

interface RadioButtonOption {
  value: string | number;
  label: string;
}

interface CustomRadioButtonsProps {
  id?: string;
  field: {
    value: string | number;
    onChange: (value: string | number) => void;
    onBlur: () => void;
  };
  disabled?: boolean;
  className?: string;
  options: RadioButtonOption[];
}

const CustomRadioButtons: FC<CustomRadioButtonsProps> = ({
  id,
  field,
  disabled,
  className,
  options,
}) => {
  return (
    <div className={`custom-radio-buttons ${className}`}>
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={`${id}-${option.value}`}
          className="radio-label"
        >
          <input
            type="radio"
            id={`${id}-${option.value}`}
            name={id}
            value={option.value}
            checked={field.value === option.value}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
            disabled={disabled}
            className="radio-input"
          />
          <span className="radio-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CustomRadioButtons;
