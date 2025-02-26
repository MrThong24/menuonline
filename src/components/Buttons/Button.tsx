import { Button, ButtonProps } from 'antd';
import React from 'react';

interface ColorButtonProps extends ButtonProps {
  override?: string;
  textColor?: string;
}

const BaseButton: React.FC<ColorButtonProps> = ({ children, override, textColor = '#fff', ...props }) => {
  const buttonStyle = override
    ? {
        backgroundColor: override,
        borderColor: override,
        color: textColor
      }
    : {};

  return (
    <Button {...props} style={{ ...buttonStyle, ...props.style }}>
      {children}
    </Button>
  );
};

export default BaseButton;
