import { FC } from 'react';
import './CustomNumberInput.css';

const CustomNumberInput: FC<any> = ({
  field,
  onChange,
  onClick,
  onBlur,
  ...props
}) => (
  <input
    type="number"
    {...field}
    {...props}
    onChange={onChange || field.onChange}
    onClick={onClick}
    onBlur={onBlur || field.onBlur}
  />
);
export default CustomNumberInput;
