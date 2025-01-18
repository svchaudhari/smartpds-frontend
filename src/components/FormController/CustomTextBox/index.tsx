import { FC } from 'react';
import './CustomTextBox.css';

const CustomTextBox: FC<any> = ({
  field,
  onChange,
  onClick,
  onBlur,
  rows,
  ...props
}) => (
  <textarea
    {...field}
    onChange={onChange || field.onChange}
    onClick={onClick}
    onBlur={onBlur || field.onBlur}
    {...props}
    rows={rows || 4}
  />
);

export default CustomTextBox;
