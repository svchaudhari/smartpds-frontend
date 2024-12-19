import { FC } from 'react';
import './CustomTextBox.css';

const CustomTextBox: FC<any> = ({ field, onChange, onClick, ...props }) => (
  <textarea
    {...field}
    onChange={onChange || field.onChange}
    onClick={onClick}
    {...props}
  />
);

export default CustomTextBox;
