import React from 'react';
import * as FontAwesomeIcons from 'react-icons/fa';
import IButton from './Button.interface';

const Button = ({
  color, dark, icon, primary, size, label, ...props
}: IButton): JSX.Element => {
  const BASE = 'border-2 cursor-pointer font-bold inline-block rounded-lg';

  const mode = primary
    ? 'bg-primary text-white'
    : `${color} ${dark ? 'text-white' : 'text-gray-500'}`;

  const dimensions = {
    small: 'px-4 py-2.5 text-xs',
    medium: 'px-5 py-3 text-sm',
    large: 'px-6 py-3.5 text-base',
  };

  const Icon = icon && FontAwesomeIcons[icon];

  return Icon ? (
    <button
      className={[BASE, dimensions[size], mode, 'grid grid-cols-inputIcon'].join(' ')}
      type="button"
      {...props}
    >
      <Icon className="justify-self-center" size={18} fill="white" />
      <span className="ml-1">{label}</span>
    </button>
  ) : (
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
