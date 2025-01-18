import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

const CustomEmailInput: FC<any> = ({
  field,
  onChange,
  onClick,
  onBlur,
  ...props
}) => {
  const {
    formState: { errors, touchedFields, isSubmitted },
  } = useFormContext();

  const errorMessage =
    (touchedFields[field.name] || isSubmitted) && errors[field.name]?.message;

  return (
    <>
      <div className={`custom-input-field-wrapper input-field-${field.name}`}>
        <input
          {...field}
          {...props}
          type="email"
          onChange={onChange || field.onChange}
          onClick={onClick}
          onBlur={onBlur || field.onBlur}
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
    </>
  );
};

export default CustomEmailInput;
