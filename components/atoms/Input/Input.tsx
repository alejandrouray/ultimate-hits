import React from 'react';
import IInput from './Input.interface';
import styles from './Input.styles';
import Icon from '../Icon/Icon';

const Input = ({
  className, errors, icon, label, name, register, rules, ...props
}: IInput): JSX.Element => (
  <div className={className}>
    {label && (
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    )}

    <div className={[styles.container, icon && 'grid-cols-inputIcon'].join(' ')}>
      {icon && <Icon fill="gray" size={18} type={icon} />}
      <input
        className={styles.input}
        {...register && { ...register(name, rules) }}
        {...props}
      />
    </div>

    <span className="grid mt-1 text-red-500">{errors && errors.message}</span>
  </div>
);

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};

export default Input;
