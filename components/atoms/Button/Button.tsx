import React from 'react';
import Interface from './Button.interface';

const Button = ({
  primary, size, backgroundColor, label, ...props
}: Interface) => {
  const base = 'cursor-pointer font-bold border-0 rounded-3xl inline-block inline-block';

  const mode = primary
    ? 'bg-blue-500 text-white'
    : 'bg-transparent text-gray-500 shadow-xl';

  const dimensions = {
    small: 'text-xs py-2.5 px-4',
    medium: 'text-sm py-3 px-5',
    large: 'text-base py-3.5 p-6',
  };

  return (
    <button
      type="button"
      className={[base, dimensions[size], mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: '',
  onClick: null,
  primary: false,
  size: 'medium',
};

export default Button;
