import { FC } from 'react';

const CustomEmailInput: FC<any> = ({ field, onChange, onClick, ...props }) => (
  <input
    {...field}
    {...props}
    type="email"
    onChange={onChange || field.onChange}
    onClick={onClick}
  />
);

export default CustomEmailInput;
