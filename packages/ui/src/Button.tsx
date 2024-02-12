import React from 'react';

enum ButtonColor {
  Warning = 'warning',
  Success = 'success',
  Info = 'info',
}

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  color: string;
};

const Button = ({ onClick = () => { }, children }: ButtonProps) => {
  return (
    <button onClick={onClick}>{children}</button>
  );
}

export default Button;
