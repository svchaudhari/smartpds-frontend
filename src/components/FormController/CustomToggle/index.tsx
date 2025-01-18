import { FC } from 'react';
import './CustomToggle.css';

interface CustomToggleProps {
  id?: string;
  field: {
    value: boolean;
    onChange: (value: boolean) => void;
    onBlur: () => void;
  };
  disabled?: boolean;
  className?: string;
}

const CustomToggle: FC<CustomToggleProps> = ({
  id,
  field,
  disabled,
  className,
}) => {
  return (
    <div className={`custom-toggle-switch-${className}`} id={`custom-toggle-${id}`}>
      <label htmlFor={id} className="toggle-switch-label">
        <input
          type="checkbox"
          id={id}
          checked={field.value}
          onChange={(e) => field.onChange(e.target.checked)}
          onBlur={field.onBlur}
          disabled={disabled}
          className="toggle-switch-input"
        />
        <span className="toggle-switch-slider"></span>
      </label>
    </div>
  );
};

export default CustomToggle;
