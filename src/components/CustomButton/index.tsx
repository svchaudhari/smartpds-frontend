import React from 'react';
import './CustomButton.css';

interface CustomButtonProps {
  type?: 'default' | 'contained' | 'outlined';
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  width?: 'text' | 'full';
  size?: 'small' | 'medium' | 'large' | string;
  name?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  fullWidth?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
  [key: string]: string | boolean | React.ReactNode | undefined | Function;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = 'default',
  variant = 'primary',
  disabled = false,
  iconLeft,
  iconRight,
  width = 'text',
  size = 'medium',
  name,
  id,
  buttonType = 'button',
  onClick,
  children,
  className,
  fullWidth,
}) => {
  const buttonClass = [
    'custom-button',
    `button-${type}`,
    `button-${variant}`,
    `button-${size}`,
    disabled ? 'disabled' : '',
    fullWidth || width === 'full' ? 'full-width' : '',
    className,
    `text-nowrap`
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={buttonType}
      name={name}
      id={id}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {children && <span className="button-text">{children}</span>}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
};

export default CustomButton;
