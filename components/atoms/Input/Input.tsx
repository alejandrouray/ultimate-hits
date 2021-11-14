import React from 'react';
import * as FontAwesomeIcons from 'react-icons/fa';
import IInput from './Input.interface';

const Input = ({
  className, icon, label, placeholder, type,
}: IInput): JSX.Element => {
  const BASE_CONTAINER = `
    bg-white border-2 grid items-center
    rounded-lg focus-within:border-blue-500
    focus-within:shadow-input
  `;

  const BASE_INPUT = 'py-3 rounded-inherit focus:outline-none';
  const Icon = icon && FontAwesomeIcons[icon];

  return (
    <div className={className}>
      <label className="grid" htmlFor={placeholder}>
        <span className="mb-2">{label || placeholder}</span>
        {Icon ? (
          <div className={[BASE_CONTAINER, 'grid-cols-inputIcon'].join(' ')}>
            <Icon className="justify-self-center" size={18} fill="gray" />
            <input
              name={placeholder}
              className={[BASE_INPUT].join(' ')}
              placeholder={placeholder}
              type={type}
            />
          </div>
        ) : (
          <div className={[BASE_CONTAINER].join(' ')}>
            <input
              className={[BASE_INPUT, 'px-3'].join(' ')}
              placeholder={placeholder}
              type={type}
            />
          </div>
        )}
      </label>
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};

export default Input;
