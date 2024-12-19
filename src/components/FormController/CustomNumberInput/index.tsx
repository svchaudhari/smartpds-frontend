import { FC } from 'react';
import './CustomNumberInput.css';

const CustomNumberInput: FC<any> = ({ field, onChange, onClick, ...props }) => (
  <input
    {...field}
    {...props}
    onChange={onChange || field.onChange}
    onClick={onClick}
    type="number"
  />
);
export default CustomNumberInput;
