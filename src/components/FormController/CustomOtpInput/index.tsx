import { Fragment, FC } from 'react';
import './CustomOtpInput.css';
import _ from 'lodash';

interface CustomOtpProps {
  name: string;
  value: string;
  // onChange: (name: string, otp: string) => void;
  length?: number;
}

const CustomOtpInput: FC<CustomOtpProps> = ({
  name,
  // onChange,
  value ='',
  length = 4,
}) => {

  const otpValues = (typeof value === "number" ? value + '' : value) ?.slice(0, length);

  const handleChange = (inputValue: string) => {
    if (!/^[0-9]?$/.test(inputValue)) return;
    console.log(inputValue)

    // const updatedOtpValues = { ...otpValues };
    // updatedOtpValues[index] = inputValue;
    // const updatedOtp = updatedOtpValues.join("");

    // onChange(name, updatedOtp);

    // if (inputValue && index < length - 1) {
    //   const nextInput = document.getElementById(`otp-input-${index + 1}`);
    //   nextInput?.focus();
    // }

  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === 'Backspace' && otpValues[index] === '' && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="custom-otp-container">
      {Array.from({ length }).map((_, index) => (
        <Fragment key={index}>
          <input
            id={`otp-input-${name}-${index}`}
            className="custom-otp-input"
            type="text"
            maxLength={1}
            value={otpValues[index] || ""}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            placeholder='-'
          />
        </Fragment>
      ))}
    </div>
  );
};

export default CustomOtpInput;
