import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  color?: string;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  color,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-red-400' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};
