import { FC } from 'react';
import './CustomTextInput.css';

const CustomTextInput: FC<any> = ({
  field,
  onChange,
  onClick,
  onBlur,
  ...props
}) => (
  <input
    {...field}
    {...props}
    type="text"
    onChange={onChange || field.onChange}
    onClick={onClick}
    onBlur={onBlur || field.onBlur}
  />
);

export default CustomTextInput;
