import './CustomDateOfBirthDropDown.css';

export type DateOfBirth = {
  day?: string;
  month?: string;
  year?: string;
};
interface CustomDateOfBirthDropDownProps {
  field: {
    value: DateOfBirth;
    onChange: (value: { day?: string; month?: string; year?: string }) => void;
  };
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

const CustomDateOfBirthDropDown: React.FC<CustomDateOfBirthDropDownProps> = ({
  field,
  disabled,
  onChange,
  onBlur,
}) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 101 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <div className="dob-select-container">
      <select
        className="dob-select"
        onChange={(e) => {
          field.onChange({ ...field.value, day: e.target.value });
          onChange?.(e);
        }}
        onBlur={onBlur}
        disabled={disabled}
        value={field.value?.day || ''}
      >
        <option value="" disabled>
          Day
        </option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select
        className="dob-select"
        onChange={(e) => {
          field.onChange({ ...field.value, month: e.target.value });
          onChange?.(e);
        }}
        onBlur={onBlur}
        disabled={disabled}
        value={field.value?.month || ''}
      >
        <option value="" disabled>
          Month
        </option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        className="dob-select"
        onChange={(e) => {
          field.onChange({ ...field.value, year: e.target.value });
          onChange?.(e);
        }}
        onBlur={onBlur}
        disabled={disabled}
        value={field.value?.year || ''}
      >
        <option value="" disabled>
          Year
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDateOfBirthDropDown;
