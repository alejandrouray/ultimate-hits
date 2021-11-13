import React from 'react';
import IButton from './Button.interface';

const Button = ({
  primary, size, label, ...props
}: IButton): JSX.Element => {
  const BASE = 'border-0 cursor-pointer font-bold inline-block rounded-lg';

  const mode = primary
    ? 'bg-primary text-white'
    : 'bg-white shadow-xl text-gray-500';

  const dimensions = {
    small: 'px-4 py-2.5 text-xs',
    medium: 'px-5 py-3 text-sm',
    large: 'px-6 py-3.5 text-base',
  };

  return (
    <button
      className={[BASE, dimensions[size], mode].join(' ')}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  onClick: null,
  primary: false,
  size: 'medium',
};

export default Button;
